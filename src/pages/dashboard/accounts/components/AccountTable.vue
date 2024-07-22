<!-- eslint-disable vue/valid-v-slot -->
<template>
  <SectionContainerWithTitle>
    <template #title> Registered Accounts ({{ accountCount }}) </template>
    <template #content>
      <v-data-table
        :headers="headers"
        :items="filteredAccounts"
        :items-per-page="5"
        class="elevation-1"
        fixed-header
      >
        <template v-slot:top>
          <v-toolbar flat class="px-4 bg-blue-grey-darken-1" rounded>
            <v-toolbar-title> </v-toolbar-title>

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

        <template v-slot:item.FirstName="{ item }">
          {{ item.attributes.FirstName }}
        </template>
        <template v-slot:item.isActive="{ item }">
          <v-icon color="success" v-if="item.attributes.isActive"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.Sport="{ item }">
          {{ item.attributes.Sport }}
        </template>
        <template v-slot:item.orders="{ item }">
          <v-icon color="success" v-if="item.attributes.orders?.data.length"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.account_type="{ item }">
          {{ item.attributes.account_type?.data.attributes.Name || "N/A" }}
        </template>
        <template v-slot:item.associations="{ item }">
          {{ item.attributes.associations?.data[0]?.attributes.Name || "N/A" }}
        </template>
        <template v-slot:item.clubs="{ item }">
          {{ item.attributes.clubs?.data[0]?.attributes.Name || "N/A" }}
        </template>
        <template v-slot:item.isSetup="{ item }">
          <v-icon color="success" v-if="item.attributes.isSetup"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.isUpdating="{ item }">
          <v-icon color="success" v-if="item.attributes.isUpdating"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.hasCompletedStartSequence="{ item }">
          <v-icon color="success" v-if="item.attributes.hasCompletedStartSequence"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.isRightsHolder="{ item }">
          <v-icon color="primary" v-if="item.attributes.isRightsHolder"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.isPermissionGiven="{ item }">
          <v-icon color="success" v-if="item.attributes.isPermissionGiven"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.group_assets_by="{ item }">
          <v-icon color="success" v-if="item.attributes.group_assets_by"
            >mdi-check-circle</v-icon
          >
          <v-icon color="warning" v-else>mdi-close-circle</v-icon>
        </template>
        <template v-slot:item.actions="{ item }">
          <SecondaryButton @click="viewAccount(item.id)">View</SecondaryButton>
        </template>
      </v-data-table>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAccountStore } from "@/store/account";
import { storeToRefs } from "pinia";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import SecondaryButton from "@/components/common/buttons/SecondaryButton.vue";

const accountStore = useAccountStore();
const { accounts, accountCount } = storeToRefs(accountStore);
const search = ref("");

const headers = [
  /* { title: "First Name", value: "FirstName", align: "start" }, */
  { title: "Association/Club", value: "associations", align: "start" },
  { title: "Type", value: "account_type", align: "start" },
  { title: "Sport", value: "Sport", align: "start" },

  { title: "Active", value: "isActive", align: "center" },
  { title: "Subscribed", value: "orders", align: "center" },

  { title: "Setup Complete", value: "isSetup", align: "center" },
  { title: "Updating", value: "isUpdating", align: "center" },
  { title: "Actions", value: "actions", align: "start", sortable: false },
];

const router = useRouter();


const viewAccount = (id: number) => {
  router.push(`/dashboard/account/${id}/home`);
};

const filteredAccounts = computed(() => {
  return accounts.value.filter((account) => {
    const searchTerm = search.value.toLowerCase();
    return (
      account.attributes.FirstName.toLowerCase().includes(searchTerm) ||
      account.attributes.Sport.toLowerCase().includes(searchTerm) ||
      account.attributes.account_type?.data.attributes.Name.toLowerCase().includes(
        searchTerm
      ) ||
      account.attributes.associations?.data[0]?.attributes.Name.toLowerCase().includes(
        searchTerm
      ) ||
      account.attributes.clubs?.data[0]?.attributes.Name.toLowerCase().includes(
        searchTerm
      )
    );
  });
});
</script>

<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
