<template>
    <CardSmall1DataPoint :icon="'mdi-download'" :value="fixturesInRenderCount" subtitle="Total Fixtures" buttonText=""
        @click="() => { }" theme="cardNeutral" />
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRendersStore } from "@/store/renders";
import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

const renderStore = useRendersStore();
const { selectedRender } = storeToRefs(renderStore);

const fixturesInRenderCount = computed(() => {
    return selectedRender.value?.attributes.upcoming_games_in_renders.data.length || 0;
});
</script>
