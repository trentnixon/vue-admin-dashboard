<template>
  <v-container class="pa-0">
    <!-- Gradient Banner -->
    <div class="gradient-banner pr-4 pt-4">
      <div class="d-flex align-end flex-column">
        <h3>{{ organisationName }}</h3>
        <p>{{ sport }}</p>
      </div>
    </div>

    <!-- Row with Image, Text, and Buttons -->
    <v-row class="align-center">
      <v-col cols="2" class="d-flex justify-center">
        <v-avatar size="120" class="elevation-4">
          <v-img :src="displayLogo" />
        </v-avatar>
      </v-col>
      <v-col cols="4" class="d-flex flex-column">
        <p>
          {{ accountDetails?.attributes.FirstName }} ({{
            accountDetails?.attributes.account_type?.data.attributes.Name ||
            "N/A"
          }})
        </p>
        <p>
          <SecondaryButton
            size="x-small"
            @click="handleClick(accountDetails?.attributes.DeliveryAddress)"
            >email</SecondaryButton
          >
        </p>
      </v-col>

      <v-col cols="6" class="d-flex justify-end">
        <v-btn
          v-for="(item, index) in navItems"
          :key="index"
          class="ma-0"
          variant="plain"
          :prepend-icon="item.icon"
          size="small"
          @click="navigateTo(item.to)"
        >
          {{ item.title }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Router View for Child Routes -->
    <router-view />
  </v-container>
</template>

<script setup lang="ts">
// Pinia
import { storeToRefs } from "pinia";
// Vue
import { onMounted, ref, watch } from "vue";
// Vue Router
import { useRoute, useRouter } from "vue-router";
// Stores
import { useAccountStore } from "@/store/account";
import { useAssociationStore } from "@/store/associationStore/";
import { useClubStore } from "@/store/clubStore/index";
import SecondaryButton from "@/components/common/buttons/SecondaryButton.vue";
import { useOrdersStore } from "@/store/orders";

const route = useRoute();
const router = useRouter();
const organisationName = ref(null);
const sport = ref(null);
const primaryColor = ref("#ffffff");
const secondaryColor = ref("#000000");
const displayLogo = ref("@/assets/logo.png");

const accountStore = useAccountStore();
const orderStore = useOrdersStore()
const accountId = Number(route.params.id);
const { accountDetails, getOrganizationDetails, getAccountTheme } =
  storeToRefs(accountStore);


const associationStore = useAssociationStore();
const { getAssociation } = storeToRefs(associationStore);

const clubStore = useClubStore();
const { getClub } = storeToRefs(clubStore);

// handle events

const handleClick = (emailAddress: string) => {
  // got to email address
  console.log("email clicked");
  // handle mailto: emailAddress
  window.location.href = `mailto:${emailAddress}`;
};

onMounted(() => {
  accountStore.fetchAccountDetails(accountId);
  orderStore.fetchAccountOrders(accountId)
});

watch(accountDetails, (newDetails) => {
  if (newDetails) {
    organisationName.value = newDetails.attributes.FirstName || "";
    sport.value = newDetails.attributes.Sport || "";

    const organization = getOrganizationDetails.value;
    if (organization) {
      if (organization.type === "Association") {
        associationStore.fetchAssociation(organization.id);
      } else if (organization.type === "Club") {
        clubStore.fetchClub(organization.id);
      }
    }
  }
});

watch(getAccountTheme, (newTheme) => {
  if (newTheme) {
    primaryColor.value = newTheme.Theme.primary || primaryColor.value;
    secondaryColor.value = newTheme.Theme.secondary || secondaryColor.value;
  }
});

watch(getAssociation, (newAssociation) => {
  if (newAssociation) {
    displayLogo.value = newAssociation.attributes.Logo.data.attributes.url;
  }
});

watch(getClub, (newClub) => {
  if (newClub) {
    displayLogo.value = newClub.attributes.Logo.data.attributes.url;
  }
});

// Navigation items
const navItems = ref([
  {
    icon: "mdi-account",
    title: "Home",
    to: `/dashboard/account/${accountId}/home`,
  },
  {
    icon: "mdi-play-circle",
    title: "Renders",
    to: `/dashboard/account/${accountId}/renders`,
  },
  {
    icon: "mdi-account",
    title: "Data",
    to: `/dashboard/account/${accountId}/data`,
  },

  {
    icon: "mdi-cog",
    title: "medialibrary",
    to: `/dashboard/account/${accountId}/medialibrary`,
  },
]);

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.gradient-banner {
  background: linear-gradient(
    to right,
    v-bind(primaryColor),
    v-bind(secondaryColor)
  );
  height: 150px; /* Adjust the height as needed */
  border-radius: 10px;
}

.v-avatar {
  margin-top: -60px;
  background-color: #fff;
}

.v-btn {
  font-weight: bold;
}
</style>
