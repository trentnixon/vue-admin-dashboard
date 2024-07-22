import { computed } from "vue";
import { usePrivateSchedulerState } from "./private";
import { Scheduler } from "@/types";
import { useAccountStore } from "@/store/account";

export const scheduler = computed(() => usePrivateSchedulerState().scheduler);
export const schedulers = computed(() => usePrivateSchedulerState().schedulers);
export const loading = computed(() => usePrivateSchedulerState().loading);
export const error = computed(() => usePrivateSchedulerState().error);

export const getScheduler = computed(() => scheduler.value);
export const schedulerCount = computed(() => schedulers.value.length);
export const firstTenSchedulers = computed(() => schedulers.value.slice(0, 10));
export const schedulersDueTomorrow = computed(() => usePrivateSchedulerState().schedulersDueTomorrow);

export const schedulersByDayOfWeek = computed(() => {
  const state = usePrivateSchedulerState();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const counts = daysOfWeek.map((day) => {
    const count = state.schedulers.filter((scheduler: Scheduler) => {
      return scheduler.attributes.days_of_the_week.data.attributes.Name === day;
    }).length;

    return {
      day,
      count,
    };
  });

  return counts;
});

export const activeSchedulersThisWeek = computed(() => {
    const state = usePrivateSchedulerState();
    const accountStore = useAccountStore();
    const accounts = accountStore.accounts;

    // Get the current week dates
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const isActiveScheduler = (scheduler: Scheduler) => {
      const account = accounts.find(acc => acc.id === scheduler.id);
      if (!account) return false;

      const activeOrder = account.attributes.orders?.data.some(order => order.attributes.isActive && !order.attributes.OrderPaid);

      return activeOrder || account.attributes.trial_instance?.data?.attributes.isActive;
    };

    const activeSchedulers = state.schedulers.filter(scheduler => {
      const scheduleDate = new Date(scheduler.attributes.days_of_the_week.data.attributes.Name);
      return scheduleDate >= startOfWeek && scheduleDate <= endOfWeek && isActiveScheduler(scheduler);
    });

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const counts = daysOfWeek.map(day => {
      const count = activeSchedulers.filter(scheduler => {
        return scheduler.attributes.days_of_the_week.data.attributes.Name === day;
      }).length;

      return {
        day,
        count,
      };
    });

    return counts;
  });