import { defineStore } from 'pinia';
import * as getters from './getters';
import * as actions from './actions';

export const useSchedulerStore = defineStore('scheduler', () => {
  return { ...actions, ...getters };
});
