import { usePrivateRendersState } from "./private";
import {
  fetchAllRendersFromService,
  fetchRenderFromService,
  fetchRendersBySchedulerIdFromService,
  fetchRendersFromPrevious24Hours,
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
    console.log("response ", response, schedulerId);
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

// New action to fetch renders from the previous 24 hours
export async function fetchRendersFromPrevious24HoursAction() {
  const state = usePrivateRendersState();

  try {
    state.loading = true;
    const response = await fetchRendersFromPrevious24Hours();

    if (response?.data) {
      state.previous24HoursRenders = response.data.Table;
      state.previous24HoursStats = response.data.Stats;
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function fetchRenderById(id: number) {
  const state = usePrivateRendersState();
  try {
    state.loading = true;
    const response = await fetchRenderFromService(id);
    if (response && response.data) {
      state.selectedRender = response.data;
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}
