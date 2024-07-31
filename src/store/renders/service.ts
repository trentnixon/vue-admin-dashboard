import fetcher from "@/actions/fetcher";
import { Render } from "@/types";

interface ApiResponse<T> {
  data: T;
}

export async function fetchRenderFromService(
  id: number
): Promise<ApiResponse<Render>> {
  const response = await fetcher.get<ApiResponse<Render>>(
    `/renders/${id}?populate=*`
  );
  return response;
}

export async function fetchRendersBySchedulerIdFromService(
  schedulerId: number
): Promise<ApiResponse<Render[]>> {
  const response = await fetcher.get<ApiResponse<Render[]>>(
    `/renders?filters[scheduler][id][$eq]=${schedulerId}`
  );
  return response;
}

// New service to fetch all renders
export async function fetchAllRendersFromService(): Promise<
  ApiResponse<Render[]>
> {
  const response = await fetcher.get<ApiResponse<Render[]>>(
    `/renders?populate=scheduler`
  );
  return response;
}

// New service to fetch renders from the previous 24 hours
export async function fetchRendersFromPrevious24Hours(): Promise<
  ApiResponse<{ Table: Render[]; Stats: any }>
> {
  const response = await fetcher.get<
    ApiResponse<{ Table: Render[]; Stats: any }>
  >(`/render/previous24hours`);
  return response;
}