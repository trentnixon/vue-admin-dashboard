import { computed } from 'vue';
import { usePrivateRendersState } from './private';
import { format, isWithinInterval, subDays, subMonths } from 'date-fns';

export const render = computed(() => usePrivateRendersState().render);
export const renders = computed(() => usePrivateRendersState().renders);
export const selectedRender = computed(
  () => usePrivateRendersState().selectedRender
);
export const loading = computed(() => usePrivateRendersState().loading);
export const error = computed(() => usePrivateRendersState().error);

/*----------------------------------*/
// Basic Computed Getters
/*----------------------------------*/
// Getter to fetch renders by scheduler ID
export const getRendersBySchedulerId = computed(
  () => usePrivateRendersState().specificRenders
);
export const RenderCount = computed(() => renders.value.length);
export const firstTenRenders = computed(() => renders.value.slice(0, 10));
// New getters for previous 24 hours renders and stats
export const previous24HoursRenders = computed(
  () => usePrivateRendersState().previous24HoursRenders || []
);
export const previous24HoursStats = computed(
  () => usePrivateRendersState().previous24HoursStats || {}
);

/*----------------------------------*/
// Functional Getters
/*----------------------------------*/

export const getRenderById = (id: number) => {
  return renders.value.find(render => render.id === id) || null;
};

// New getter to calculate scheduler activities over time
export const renderActivitiesOverTime = computed(() => {
  const state = usePrivateRendersState();

  const renders = state.renders;
  const currentDate = new Date();

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = subMonths(currentDate, i);
    return {
      month: format(date, 'yyyy-MM'),
      count: 0
    };
  }).reverse();

  renders.forEach(render => {
    const renderMonth = format(
      new Date(render.attributes.updatedAt),
      'yyyy-MM'
    );
    const monthIndex = months.findIndex(month => month.month === renderMonth);
    if (monthIndex !== -1) {
      months[monthIndex].count++;
    }
  });

  return {
    categories: months.map(month => month.month),
    data: months.map(month => month.count)
  };
});

export const rendersInLast24Hours = computed(() => {
  const now = new Date();
  const yesterday = subDays(now, 1);

  return renders.value.filter(render => {
    const completeDate = render.attributes.Complete
      ? new Date(render.attributes.updatedAt)
      : null;
    return (
      completeDate &&
      isWithinInterval(completeDate, { start: yesterday, end: now })
    );
  }).length;
});

export const listRendersInLast24Hours = computed(() => {
  const state = usePrivateRendersState();
  console.log('state.previous24HoursRenders ', state.previous24HoursRenders);
  return state.previous24HoursRenders || [];
});

export const totalRendersScheduled = computed(() => {
  const state = usePrivateRendersState();
  return state.previous24HoursStats?.totalScheduled || 0;
});

export const rendersStillProcessing = computed(() => {
  return renders.value.filter(
    render =>
      render.attributes.Processing === true ||
      render.attributes.Complete === false
  ).length;
});
