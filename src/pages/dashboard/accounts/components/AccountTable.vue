<template>
  <!-- eslint-disable vue/valid-v-slot -->
  <SectionContainerWithTitle>
    <template #title> Registered Accounts ({{ accountCount }}) </template>
    <template #content>
      <v-data-table
        :headers="headers"
        :items="filteredAccounts"
        :items-per-page="5"
        class="mx-auto"
        fixed-header
        color="cardNeutral"
        variant="flat"
        rounded
      >
        <template #top>
          <v-toolbar flat class="px-4" color="secondary" rounded>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              density="compact"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="solo-filled"
              flat
              hide-details
              single-line
            ></v-text-field>
          </v-toolbar>
        </template>
        <template #item.LOGO="{ item }">
          <v-avatar :image="item.LOGO" size="large"></v-avatar>
        </template>
        <template #item.FirstName="{ item }">
          <span v-if="item.organizationType === 'Association'">
            {{ item.associations }}
          </span>
          <span v-if="item.organizationType === 'Club'">
            {{ item.clubs }}
          </span>
        </template>

        <template #item.organizationType="{ item }">
          {{ item.organizationType }}
        </template>
        <template #item.isActive="{ item }">
          <v-icon color="success" v-if="item.isActive">mdi-check-circle</v-icon>
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.Sport="{ item }">
          {{ item.Sport }}
        </template>
        <template #item.orders="{ item }">
          <v-icon color="success" v-if="item.orders">mdi-check-circle</v-icon>
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>

        <template #item.isSetup="{ item }">
          <v-icon color="success" v-if="item.isSetup">mdi-check-circle</v-icon>
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.isUpdating="{ item }">
          <v-icon color="success" v-if="item.isUpdating"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.hasCompletedStartSequence="{ item }">
          <v-icon color="success" v-if="item.hasCompletedStartSequence"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.isRightsHolder="{ item }">
          <v-icon color="primary" v-if="item.isRightsHolder"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.isPermissionGiven="{ item }">
          <v-icon color="success" v-if="item.isPermissionGiven"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.group_assets_by="{ item }">
          <v-icon color="success" v-if="item.group_assets_by"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template #item.actions="{ item }">
          <SecondaryButton @click="viewAccount(item.id)">View</SecondaryButton>
        </template>
      </v-data-table>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAccountStore } from "@/store/account";
import { storeToRefs } from "pinia";
import { getFormattedAccounts } from "@/utils/accountObjUtils";

import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import SecondaryButton from "@/components/common/buttons/SecondaryButton.vue";

const accountStore = useAccountStore();
const { accounts, accountCount } = storeToRefs(accountStore);
const search = ref("");

const headers = [
  { title: "Logo", value: "LOGO", align: "start" },
  { title: "Organization", value: "FirstName", align: "start" },
  { title: "Type", value: "organizationType", align: "start" },
  { title: "Sport", value: "Sport", align: "start" },
  { title: "Active", value: "isActive", align: "center", icon: true },
  { title: "Subscribed", value: "orders", align: "center", icon: true },
  { title: "Setup", value: "isSetup", align: "center", icon: true },
  { title: "Updating", value: "isUpdating", align: "center", icon: true },
  { title: "Actions", value: "actions", align: "start", sortable: false },
];

const router = useRouter();

const viewAccount = (id: number) => {
  router.push(`/dashboard/account/${id}/home`);
};

const formattedAccounts = computed(() => getFormattedAccounts(accounts.value));

const filteredAccounts = computed(() => {
  return formattedAccounts.value.filter((account) => {
    const searchTerm = search.value.toLowerCase();
    return (
      account.FirstName.toLowerCase().includes(searchTerm) ||
      account.associations.toLowerCase().includes(searchTerm) ||
      account.clubs.toLowerCase().includes(searchTerm)
    );
  });
});
</script>

<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
