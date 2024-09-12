<template>
  <CardSmall1DataPoint
    :icon="'mdi-account-circle-outline'"
    :value="accountCount"
    subtitle="Account Total"
    buttonText="accounts"
    @click="goToAccounts"
  />
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useAccountStore } from '@/store/account';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const accountStore = useAccountStore();
  const { accountCount } = storeToRefs(accountStore);

  const router = useRouter();
  const goToAccounts = () => {
    router.push('/dashboard/accounts');
  };
</script>

<style scoped></style>
