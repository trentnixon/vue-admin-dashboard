import { usePrivateSchedulerState } from './private';
import {
  fetchSchedulerFromService,
  fetchAllSchedulersFromService,
  fetchSchedulersDueTomorrowFromService
} from './service';

export async function fetchScheduler(id: number) {
  const state = usePrivateSchedulerState();
  //const rendersStore = useRendersStore(); // Instantiate the renders store

  try {
    state.loading = true;
    const response = await fetchSchedulerFromService(id);

    if (response && response.data) {
      state.scheduler = response.data;
    } else {
      throw new Error('Invalid data structure');
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function fetchAllSchedulers() {
  const state = usePrivateSchedulerState();

  try {
    state.loading = true;
    const response = await fetchAllSchedulersFromService();

    if (response && response.data) {
      state.schedulers = response.data;
    } else {
      throw new Error('Invalid data structure');
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export function setScheduler(scheduler: { id: number }) {
  fetchScheduler(scheduler.id);
}

export async function fetchSchedulersDueTomorrow() {
  const state = usePrivateSchedulerState();
  try {
    state.loading = true;
    const response = await fetchSchedulersDueTomorrowFromService();
    if (response && response.data) {
      console.log('response.data ', response.data);
      state.schedulersDueTomorrowOBJ = response.data;
      state.schedulersDueTomorrow = response.data.length;
      console.log(
        'Fetched schedulers due tomorrow:',
        state.schedulersDueTomorrow
      );
    } else {
      throw new Error('Invalid data structure');
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}
