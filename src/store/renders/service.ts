import fetcher from "@/actions/fetcher";
import { Render } from "@/types";

interface ApiResponse<T> {
  data: T;
}

export async function fetchRenderFromService(id: number): Promise<ApiResponse<Render>> {
  const response = await fetcher.get<ApiResponse<Render>>(`/renders/${id}?populate=*`);
  return response;
}

export async function fetchRendersBySchedulerIdFromService(schedulerId: number): Promise<ApiResponse<Render[]>> {
  const response = await fetcher.get<ApiResponse<Render[]>>(`/renders?scheduler=${schedulerId}&populate=*`);
  return response;
}

// New service to fetch all renders
export async function fetchAllRendersFromService(): Promise<ApiResponse<Render[]>> {
  const response = await fetcher.get<ApiResponse<Render[]>>(`/renders?populate=*`);
  return response;
}
