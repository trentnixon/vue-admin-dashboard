<template>
  <SectionContainerWithTitle>
    <template #title></template>
    <template #content>
      <v-row>
        <v-col cols="3">
          <CardSmall1DataPoint
            :icon="'mdi-receipt'"
            :value="accountOrdersDetails.TotalNum"
            subtitle="Orders"
            buttonText="Orders"
            @click="goToOrders"
          />
        </v-col>
        <v-col cols="3">total number of Bundles</v-col>
        <v-col cols="3">total number of Downloads</v-col>
        <v-col cols="3">total number of Articles</v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
  import { useOrdersStore } from '@/store/orders';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import { storeToRefs } from 'pinia';

  const ordersStore = useOrdersStore();
  //const { accountOrdersDetails } = storeToRefs(ordersStore);
  const { accountOrdersDetails } = storeToRefs(ordersStore);

  const goToOrders = () => {
    console.log('Button clicked');
  };
</script>

<style scoped></style>
