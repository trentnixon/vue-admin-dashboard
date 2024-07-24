<template>
  <SingleChartCard>
    <template #title>Trial Logo Gallery</template>
    <template #subtitle>Accounts Currently on Free Trial</template>
    <template #chart>
      <v-container>
        <v-row>
          <v-col
            v-for="(account, index) in formattedAccounts"
            :key="index"
            cols="auto"
          >
            <v-avatar :image="account.LOGO" size="x-large"></v-avatar>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </SingleChartCard>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAccountStore } from "@/store/account";
import SingleChartCard from "@/components/common/cards/SingleChartCard.vue";
import { getFormattedAccounts } from "@/utils/accountObjUtils";
import { computed } from "vue";

const accountStore = useAccountStore();
const { accountsOnFreeTrial } = storeToRefs(accountStore);
const formattedAccounts = computed(() =>
  getFormattedAccounts(accountsOnFreeTrial.value)
);
console.log("formattedAccounts ", formattedAccounts);
</script>

<style scoped>
.v-avatar img {
  object-fit: cover;
}
</style>
