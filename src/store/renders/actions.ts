import { usePrivateRendersState } from "./private";
import {
  fetchAllRendersFromService,
  fetchRenderFromService,
  fetchRendersBySchedulerIdFromService,
} from "./service";

export async function fetchRender(id: number) {
  const state = usePrivateRendersState();
  try {
    state.loading = true;
    const response = await fetchRenderFromService(id);
    if (response && response.data) {
      state.render = response.data;
      console.log("Fetched render details:", state.render);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function fetchRendersBySchedulerId(schedulerId: number) {
  const state = usePrivateRendersState();
  try {
    state.loading = true;
    const response = await fetchRendersBySchedulerIdFromService(schedulerId);
    console.log("response ", response, schedulerId)
    if (response && response.data) {
      state.specificRenders = response.data;
      console.log(
        "Fetched renders for scheduler ID: NEW :: ",
        schedulerId,
        state.specificRenders
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

// New action to fetch all renders
export async function fetchAllRenders() {
  const state = usePrivateRendersState();
  try {
    state.loading = true;
    const response = await fetchAllRendersFromService();
    if (response && response.data) {
      state.renders = response.data;
      console.log("Fetched all renders:", state.renders);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}
