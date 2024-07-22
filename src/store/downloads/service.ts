import fetcher from "@/actions/fetcher";
import { Download } from "@/types";

interface ApiResponse<T> {
  data: T;
}

export async function fetchDownloadFromService(id: number): Promise<ApiResponse<Download>> {
  const response = await fetcher.get<ApiResponse<Download>>(`/downloads/${id}?populate=*`);
  return response;
}

export async function fetchDownloadsByRenderIdFromService(renderId: number): Promise<ApiResponse<Download[]>> {
  const response = await fetcher.get<ApiResponse<Download[]>>(
    `/downloads?filters[render][id][$eq]=${renderId}&populate=*`
  );
  return response;
}

// New function to fetch all downloads
export async function fetchAllDownloadsFromService(): Promise<ApiResponse<Download[]>> {
  const response = await fetcher.get<ApiResponse<Download[]>>(`/downloads?populate=*`);
  return response;
}

// New function to fetch total download count
export async function fetchTotalDownloadCountFromService(): Promise<ApiResponse<number>> {
  const response = await fetcher.get<ApiResponse<number>>(`/download/count`);
  return response;
}

export async function fetchDownloadsInLast24HoursFromService(): Promise<ApiResponse<Download[]>> {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const response = await fetcher.get<ApiResponse<Download[]>>(
    `/downloads?filters[updatedAt][$gte]=${yesterday.toISOString()}&populate=*`
  );
  return response;
}