<template>
    <v-card class="mx-auto mb-4">
      <v-card-title>Trial Logo Gallery</v-card-title>
      <v-card-subtitle>Accounts Currently on Free Trial</v-card-subtitle>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              v-for="(account, index) in accountsOnFreeTrial"
              :key="index"
              cols="auto"
            >
              <v-avatar size="64">
                <img :src="account.attributes.logoURL" alt="Account Logo" />
              </v-avatar>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </template>

  <script setup>
  import { storeToRefs } from "pinia";
  import { useAccountStore } from "@/store/account";

  const accountStore = useAccountStore();
  const { accountsOnFreeTrial } = storeToRefs(accountStore);

console.log("accountsOnFreeTrial ", accountsOnFreeTrial)

  </script>

  <style scoped>
  .v-avatar img {
    object-fit: cover;
  }
  </style>
