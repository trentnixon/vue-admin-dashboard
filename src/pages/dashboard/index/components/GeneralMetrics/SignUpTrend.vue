<template>
  <v-card class="mx-auto">
    <v-card-title>Sign-Up Trend</v-card-title>
    <v-card-subtitle>Monthly Sign-Up Trend</v-card-subtitle>

    <v-card-text>
      <BarChart
        :data="signUpTrendData.data"
        :categories="signUpTrendData.categories"
        title="Sign-Up Trend"
        subtitle="Monthly Trend of User Sign-Ups"
        seriesName="Sign-Ups"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useAccountStore } from "@/store/account";
import BarChart from "@/components/common/charts/BarChart.vue";
import { storeToRefs } from "pinia";

const accountStore = useAccountStore();
const { accountSignUpTrend } = storeToRefs(accountStore);

const signUpTrendData = computed(() => accountSignUpTrend.value);
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
