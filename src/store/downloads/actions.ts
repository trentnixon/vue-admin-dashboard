import { usePrivateDownloadState } from "./private";
import {
  fetchAllDownloadsFromService,
  fetchDownloadFromService,
  fetchDownloadsByRenderIdFromService,
  fetchDownloadsInLast24HoursFromService,
  fetchTotalDownloadCountFromService,
} from "./service";
import { Download } from "@/types";

export async function fetchDownload(id: number) {
  const state = usePrivateDownloadState();
  try {
    state.loading = true;
    const response = await fetchDownloadFromService(id);
    if (response && response.data) {
      state.download = response.data as Download;
      console.log("Fetched download details:", state.download);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function fetchDownloadsByRenderId(renderId: number) {
  const state = usePrivateDownloadState();
  try {
    state.loading = true;
    const response = await fetchDownloadsByRenderIdFromService(renderId);
    if (response && response.data) {
      state.downloads = response.data as Download[];
      console.log(
        "Fetched downloads for render ID:",
        renderId,
        state.downloads
      );
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

// New function to fetch all downloads
export async function fetchAllDownloads() {
  const state = usePrivateDownloadState();
  try {
    state.loading = true;
    const response = await fetchAllDownloadsFromService();
    if (response && response.data) {
      state.downloads = response.data as Download[];
      console.log("Fetched all downloads:", state.downloads);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

// New function to fetch total download count
export async function fetchTotalDownloadCount() {
  const state = usePrivateDownloadState();
  try {
    state.loading = true;
    const response = await fetchTotalDownloadCountFromService();

    if (response) {
      state.totalDownloadCount = Number(response);
      console.log("Fetched total download count:", state.totalDownloadCount);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}


export async function fetchDownloadsInLast24Hours() {
  const state = usePrivateDownloadState();
  try {
    state.loading = true;
    const response = await fetchDownloadsInLast24HoursFromService();
    if (response && response.data) {
      state.downloads = response.data as Download[];
      console.log("Fetched downloads in the last 24 hours:", state.downloads);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}