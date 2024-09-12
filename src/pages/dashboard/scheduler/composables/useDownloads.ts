import { ref, computed, watch } from 'vue';
import { useRendersStore } from '@/store/renders';
import { useDownloadsStore } from '@/store/downloads';
import { Download } from '@/types/download';
import { storeToRefs } from 'pinia';

interface GroupedDownloads {
  [key: string]: {
    totalSize: number;
    totalCost: number;
    totalTime: number;
    count: number;
    downloads: Download[];
  };
}

export function useDownloads() {
  const renderStore = useRendersStore();
  const downloadStore = useDownloadsStore();
  const { selectedRender } = storeToRefs(renderStore);
  const { downloadsByRender } = storeToRefs(downloadStore);

  const loading = ref(false);
  const error = ref<string | null>(null);

  const downloads = ref<Download[]>([]);

  // Watch for updates to selectedRender and react accordingly
  watch(
    () => selectedRender.value,
    newValue => {
      if (newValue) {
        downloads.value = downloadsByRender.value;
      }
    },
    { immediate: true }
  );

  watch(
    () => downloadsByRender.value, // Watch the reactive value from the store
    newDownloads => {
      if (newDownloads) {
        downloads.value = newDownloads; // Update downloads with the new data
      }
    },
    { immediate: true } // Run the watch callback immediately
  );

  // Function to parse file size from a string like "1.84 MB"
  function parseFileSize(sizeStr: string): number {
    if (!sizeStr) return 0;
    const [size, unit] = sizeStr.split(' ');
    const units = ['B', 'kB', 'MB', 'GB', 'TB'];
    const index = units.indexOf(unit);
    return parseFloat(size) * Math.pow(1024, index);
  }

  // Function to parse completion time from a string like "2.54 seconds"
  function parseCompletionTime(timeStr: string): number {
    if (!timeStr) return 0;
    return parseFloat(timeStr.split(' ')[0]);
  }

  // Compute the total number of downloads
  const totalDownloads = computed(() => {
    return downloads.value.length;
  });

  // Compute the total size of all downloads
  const totalDownloadSize = computed(() => {
    return downloads.value.reduce((acc, download) => {
      return (
        acc +
        (download.attributes.OutputFileSize
          ? parseFileSize(download.attributes.OutputFileSize)
          : 0)
      );
    }, 0);
  });

  // Compute the total completion time of all downloads
  const totalCompletionTime = computed(() => {
    return downloads.value.reduce((acc, download) => {
      return (
        acc +
        (download.attributes.CompletionTime
          ? parseCompletionTime(download.attributes.CompletionTime)
          : 0)
      );
    }, 0);
  });

  // Compute the total display cost of all downloads
  const totalDisplayCost = computed(() => {
    const total = downloads.value.reduce((acc, download) => {
      return acc + (download.attributes.DisplayCost || 0);
    }, 0);

    return parseFloat(total.toFixed(2)); // Ensure it returns a float with 2 decimal places
  });

  // Function to format file size
  function formatFileSize(size: number) {
    if (size === 0) return '0 B';
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    );
  }

  // Function to format time
  function formatTime(seconds: number) {
    return `${seconds.toFixed(2)} seconds`;
  }

  // Compute a breakdown of processed vs unprocessed downloads
  const downloadStatusBreakdown = computed(() => {
    const processed = downloads.value.filter(
      download => download.attributes.hasBeenProcessed
    ).length;
    const unprocessed = downloads.value.length - processed;
    return {
      processed,
      unprocessed
    };
  });

  // Compute error messages
  const errorMessages = computed(() => {
    return downloads.value
      .filter(download => download.attributes.hasError)
      .map(download => download.attributes.UserErrorMessage);
  });

  // Group downloads by asset type/category
  const groupDownloadsByAssetType = computed(() => {
    const grouped: GroupedDownloads = {};

    downloads.value.forEach(download => {
      // Get the asset type using the Identifier from asset_category
      const assetType =
        download.attributes.asset_category?.data?.attributes?.Identifier ||
        'Unknown Type';

      if (!grouped[assetType]) {
        grouped[assetType] = {
          totalSize: 0,
          totalCost: 0,
          totalTime: 0,
          count: 0,
          downloads: []
        };
      }

      grouped[assetType].totalSize += parseFileSize(
        download.attributes.OutputFileSize
      );
      grouped[assetType].totalCost += download.attributes.DisplayCost || 0;
      grouped[assetType].totalTime +=
        parseCompletionTime(download.attributes.CompletionTime) || 0;
      grouped[assetType].count += 1;
      grouped[assetType].downloads.push(download);
    });

    return grouped;
  });

  const averageFileSize = computed(() => {
    if (totalDownloads.value === 0) return 0;
    return totalDownloadSize.value / totalDownloads.value;
  });

  async function fetchDownloadsForRender(renderId: number) {
    loading.value = true;
    error.value = null;

    try {
      await renderStore.fetchRenderById(renderId);
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to fetch render data';
    } finally {
      loading.value = false;
    }
  }

  // Generate data for a Processed vs Unprocessed pie chart
  const processedVsUnprocessedChartData = computed(() => {
    const breakdown = downloadStatusBreakdown.value;
    return [
      { name: 'Processed', value: breakdown.processed },
      { name: 'Unprocessed', value: breakdown.unprocessed }
    ];
  });

  // Generate data for a File Size Distribution chart
  const fileSizeDistributionChartData = computed(() => {
    const distribution = {
      small: 0, // < 1MB
      medium: 0, // 1MB - 10MB
      large: 0, // 10MB - 100MB
      xlarge: 0 // > 100MB
    };

    downloads.value.forEach(download => {
      const size = download.attributes.OutputFileSize
        ? parseFileSize(download.attributes.OutputFileSize)
        : 0;
      if (size < 1 * 1024 * 1024) distribution.small++;
      else if (size < 10 * 1024 * 1024) distribution.medium++;
      else if (size < 100 * 1024 * 1024) distribution.large++;
      else distribution.xlarge++;
    });

    return [
      { name: 'Small (<1MB)', value: distribution.small },
      { name: 'Medium (1MB - 10MB)', value: distribution.medium },
      { name: 'Large (10MB - 100MB)', value: distribution.large },
      { name: 'Extra Large (>100MB)', value: distribution.xlarge }
    ];
  });

  // Find the most expensive renders
  const getMostExpensiveRenders = computed(() => {
    return [...downloads.value].sort((a, b) => {
      return (b.attributes.DisplayCost || 0) - (a.attributes.DisplayCost || 0);
    });
  });

  // Find the most time-consuming renders
  const getMostTimeConsumingRenders = computed(() => {
    return [...downloads.value].sort((a, b) => {
      return (
        parseCompletionTime(b.attributes.CompletionTime) -
        parseCompletionTime(a.attributes.CompletionTime)
      );
    });
  });

  // Analyze relationship for image types (number of URLs vs time and cost)
  const analyzeImageTypesRelationship = computed(() => {
    return downloads.value
      .filter(download => {
        const downloadUrls = download.attributes.downloads as { url: string }[];
        const firstUrl = downloadUrls?.[0]?.url || '';
        return firstUrl.endsWith('.png');
      })
      .map(download => {
        const numUrls = Array.isArray(download.attributes.downloads)
          ? download.attributes.downloads.length
          : 0;
        const cost = download.attributes.DisplayCost || 0;
        const time = parseCompletionTime(download.attributes.CompletionTime);

        return {
          numUrls,
          cost,
          time,
          download
        };
      });
  });

  // Format downloads for table display
  const formatDownloadsForTable = computed(() => {
    return downloads.value.map(download => {
      console.log('download ', download);
      const id = download.id;
      const name = download.attributes.Name || 'Unnamed Download';
      const fileSize = formatFileSize(
        parseFileSize(download.attributes.OutputFileSize)
      );

      const cost =
        download.attributes.DisplayCost !== null &&
        download.attributes.DisplayCost !== undefined
          ? download.attributes.DisplayCost.toFixed(2)
          : 'N/A';

      const time = formatTime(
        parseCompletionTime(download.attributes.CompletionTime)
      );

      const downloadUrls = download.attributes.downloads as { url: string }[];
      const firstUrl = downloadUrls?.[0]?.url || '';
      const type = firstUrl.endsWith('.png') ? 'Image' : 'Video';

      const urlCount = Array.isArray(download.attributes.downloads)
        ? download.attributes.downloads.length
        : 1;

      const numDownloads = download.attributes?.numDownloads || 0;
      const assetName =
        download.attributes.asset?.data?.attributes?.Name || 'N/A';
      const assetCompositionID =
        download.attributes.asset?.data?.attributes?.CompositionID || 'N/A';
      const assetType =
        download.attributes.asset_category?.data?.attributes?.Identifier ||
        'N/A';
      const hasBeenProcessed = download.attributes.hasBeenProcessed || false;
      const hasError = download.attributes.hasError || false;
      const link = `download/${id}`;

      return {
        id,
        name,
        fileSize,
        cost,
        time,
        urlCount,
        type,
        numDownloads,
        assetName,
        assetCompositionID,
        assetType,
        link,
        hasBeenProcessed,
        hasError
      };
    });
  });

  return {
    downloads,
    totalDownloads,
    totalDownloadSize,
    totalCompletionTime,
    totalDisplayCost,
    averageFileSize,
    formatFileSize,
    formatTime,
    downloadStatusBreakdown,
    processedVsUnprocessedChartData,
    fileSizeDistributionChartData,
    fetchDownloadsForRender,
    groupDownloadsByAssetType,
    getMostExpensiveRenders,
    getMostTimeConsumingRenders,
    analyzeImageTypesRelationship,
    formatDownloadsForTable,
    errorMessages,
    loading,
    error
  };
}
