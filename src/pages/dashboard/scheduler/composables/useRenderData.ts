import { computed } from 'vue';
import { useRendersStore } from '@/store/renders';
import { storeToRefs } from 'pinia';

export function useRenderData() {
  const renderStore = useRendersStore();
  const { selectedRender } = storeToRefs(renderStore);

  // Fetch the render by ID
  async function fetchRenderById(id: number) {
    try {
      await renderStore.fetchRenderById(id);
    } catch (error) {
      console.error('Failed to fetch render:', error);
    }
  }

  // Get the current render's status
  const getRenderStatus = computed(() => {
    if (!selectedRender.value) return 'Unknown';

    const { Processing, Complete } = selectedRender.value.attributes;
    if (Processing) return 'Processing';
    if (Complete) return 'Complete';
    return 'Pending';
  });

  // Get the render name
  const getRenderName = computed(() => {
    return selectedRender.value?.attributes?.Name || 'Unknown';
  });

  // Get the render's associated scheduler name
  const getSchedulerName = computed(() => {
    return (
      selectedRender.value?.attributes?.scheduler?.data?.attributes?.Name ||
      'Unknown'
    );
  });

  // Get the team roster information
  const getTeamRosterInfo = computed(() => {
    return {
      hasRequest:
        selectedRender.value?.attributes?.hasTeamRosterRequest || false,
      hasRosters: selectedRender.value?.attributes?.hasTeamRosters || false,
      emailSent: selectedRender.value?.attributes?.hasTeamRosterEmail || false
    };
  });

  // Get the number of associated game results
  const getGameResultsCount = computed(() => {
    return (
      selectedRender.value?.attributes?.game_results_in_renders?.data?.length ||
      0
    );
  });

  // Get the number of associated upcoming games
  const getUpcomingGamesCount = computed(() => {
    return (
      selectedRender.value?.attributes?.upcoming_games_in_renders?.data
        ?.length || 0
    );
  });

  // Get the number of associated grades
  const getGradesCount = computed(() => {
    return (
      selectedRender.value?.attributes?.grades_in_renders?.data?.length || 0
    );
  });

  // Get the email-related booleans
  const getEmailInfo = computed(() => {
    return {
      sendEmail: selectedRender.value?.attributes?.sendEmail || false,
      emailSent: selectedRender.value?.attributes?.EmailSent || false,
      forceRerenderEmail:
        selectedRender.value?.attributes?.forceRerenderEmail || false
    };
  });

  // Get the force rerender information
  const getForceRerenderInfo = computed(() => {
    return {
      forceRerender: selectedRender.value?.attributes?.forceRerender || false
    };
  });

  return {
    selectedRender,
    fetchRenderById,
    getRenderStatus,
    getRenderName,
    getSchedulerName,
    getTeamRosterInfo,
    getGameResultsCount,
    getUpcomingGamesCount,
    getGradesCount,
    getEmailInfo,
    getForceRerenderInfo
  };
}
