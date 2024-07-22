import { computed } from "vue";
import { usePrivateDownloadState } from "./private";
import { isWithinInterval, subDays } from "date-fns";

export const downloads = computed(() => usePrivateDownloadState().downloads);
export const downloadDetails = computed(() => usePrivateDownloadState().download);
export const loading = computed(() => usePrivateDownloadState().loading);
export const error = computed(() => usePrivateDownloadState().error);
export const downloadCount = computed(() => downloads.value.length);
export const totalDownloadCount = computed(() => usePrivateDownloadState().totalDownloadCount); // Add this line

export const getDownloadById = (id: number) => {
  return downloads.value.find((download) => download.id === id) || null;
};

export const getDownloadCount = computed(() => downloads.value.length);
export const firstTenDownloads = computed(() => downloads.value.slice(0, 5));


export const downloadsInLast24Hours = computed(() => {
  const now = new Date();
  const yesterday = subDays(now, 1);

  return downloads.value.filter((download) => {
    const completedDate = download.attributes.updatedAt ? new Date(download.attributes.updatedAt) : null;
    return completedDate && isWithinInterval(completedDate, { start: yesterday, end: now });
  }).length;
});

export const downloadsInLast24HoursWithErrors = computed(() => {
  return downloads.value.filter((download) => download.attributes.hasError);
});