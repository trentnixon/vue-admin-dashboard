import fetcher from "@/actions/fetcher";
import { Scheduler } from "@/types";

interface ApiResponse<T> {
  data: T;
}

export async function fetchSchedulerFromService(id: number): Promise<ApiResponse<Scheduler>> {
  const response = await fetcher.get<ApiResponse<Scheduler>>(`/schedulers/${id}?populate=*`);
  return response;
}

export async function fetchAllSchedulersFromService(): Promise<ApiResponse<Scheduler[]>> {
  const response = await fetcher.get<ApiResponse<Scheduler[]>>(`/schedulers?populate=*`);
  return response;
}


export async function fetchSchedulersDueTomorrowFromService(): Promise<ApiResponse<Scheduler[]>> {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const dayOfWeek = tomorrow.toLocaleString('en-us', { weekday: 'long' });

  const response = await fetcher.get<ApiResponse<Scheduler[]>>(
    `/schedulers?filters[days_of_the_week][Name][$eq]=${dayOfWeek}&populate=*`
  );
  return response;
}