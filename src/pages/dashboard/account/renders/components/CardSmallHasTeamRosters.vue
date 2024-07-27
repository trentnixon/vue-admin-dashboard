<template>
  <CardSmall1DataPoint
    :icon="'mdi-account-group'"
    :value="hasTeamRostersCount"
    subtitle="Team Rosters Requested"
    buttonText="Details"
    @click="goToDetails"
    theme="cardNeutral"
  />
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useRendersStore } from "@/store/renders";
import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

const rendersStore = useRendersStore();
const { getRendersBySchedulerId } = storeToRefs(rendersStore);

const hasTeamRostersCount = computed(() => {
  return getRendersBySchedulerId.value.filter(
    (render) => render.attributes.hasTeamRosters
  ).length;
});

const router = useRouter();
const goToDetails = () => {
  router.push("/dashboard/renders/hasTeamRosters");
};
</script>
