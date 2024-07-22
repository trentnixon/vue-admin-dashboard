<template>
  <ContainerWithBorder>
    <ContainerBlueGreyLighten2>
      <v-container>
        <v-row>
          <v-col
            v-for="(card, index) in cardTitles"
            :key="index"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
          >
            <BaseCard>
              <template #title>
                <span>{{ card.title }}</span>
              </template>
              <template #subtitle>
                <span>Subtitle for Profile</span>
              </template>
              <template #text>
                <span>Content for Profile</span>
              </template>
              <template #actions>
                <OutlinedButton icon="mdi-home" @click="handleClick"
                  >View</OutlinedButton
                >
              </template>
            </BaseCard>
          </v-col>
        </v-row>
      </v-container>
    </ContainerBlueGreyLighten2>
  </ContainerWithBorder>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "@/components/common/cards/BaseCard.vue";
import OutlinedButton from "@/components/common/buttons/OutlinedButton.vue";
import ContainerWithBorder from "@/components/common/containers/ContainerWithBorder.vue";
import ContainerBlueGreyLighten2 from "@/components/common/containers/ContainerBlueGreyLighten2.vue";

const cardTitles = ref([
  {
    title: "Orders",
  },
  {
    title: "Renders",
  },
  {
    title: "Fixtures",
  },
]);

const handleClick = () => {
  console.log("Button clicked");
};
</script>

<style scoped></style>
