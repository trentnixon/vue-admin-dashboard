import { defineStore } from 'pinia';
import { Scheduler } from '@/types';

export interface PrivateSchedulerState {
  scheduler: Scheduler | null;
  schedulers: Scheduler[];
  loading: boolean;
  error: string | null;
  schedulersDueTomorrow: number;
}

export const usePrivateSchedulerState = defineStore('scheduler-private', {
  state: (): PrivateSchedulerState => ({
    scheduler: null,
    schedulersDueTomorrow: 0,
    schedulers: [],
    loading: false,
    error: null
  })
});
