<template>
  <SectionContainerWithTitle>
    <template #title>Renders ({{ getRendersBySchedulerId.length }})</template>
    <template #content>
      <v-data-table
        :headers="headers"
        :items="formattedRenders"
        :items-per-page="5"
        class="mx-auto"
        fixed-header
        color="cardNeutral"
        variant="flat"
        rounded
      >
        <template #item="{ item }">
          <tr>
            <td align="start">{{ item.attributes.Name }}</td>
            <td align="center">{{ item.formattedPublishedAt }}</td>
            <td align="center">{{ item.timeDifference }}</td>
            <td align="center">
              <v-icon color="warning" v-if="item.attributes.Processing">
                mdi-close-circle
              </v-icon>
              <v-icon color="primary" v-else>mdi-check-circle</v-icon>
            </td>
            <td align="center">
              <v-icon color="primary" v-if="item.attributes.Complete">
                mdi-check-circle
              </v-icon>
              <v-icon color="warning" v-else>mdi-close-circle</v-icon>
            </td>
            <td align="center">
              <v-icon color="primary" v-if="item.attributes.EmailSent">
                mdi-check-circle
              </v-icon>
              <v-icon color="warning" v-else>mdi-close-circle</v-icon>
            </td>
            <td align="center">
              <v-icon
                color="primary"
                v-if="item.attributes.hasTeamRosterRequest"
              >
                mdi-check-circle
              </v-icon>
              <v-icon color="warning" v-else>mdi-close-circle</v-icon>
            </td>
            <td align="center">
              <v-icon color="primary" v-if="item.attributes.hasTeamRosterEmail">
                mdi-check-circle
              </v-icon>
              <v-icon color="warning" v-else>mdi-close-circle</v-icon>
            </td>
            <td align="center">
              <v-icon color="primary" v-if="item.attributes.forceRerender">
                mdi-check-circle
              </v-icon>
              <v-icon color="warning" v-else>mdi-close-circle</v-icon>
            </td>
            <td align="center">
              <v-icon color="primary" v-if="item.attributes.forceRerenderEmail">
                mdi-check-circle
              </v-icon>
              <v-icon color="warning" v-else>mdi-close-circle</v-icon>
            </td>

            <td align="center">
              <SecondaryButton
                :href="`/dashboard/scheduler/${accountId}/render/${item.id}/`"
              >
                View
              </SecondaryButton>
            </td>
          </tr>
        </template>
      </v-data-table>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useRendersStore } from '@/store/renders';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import SecondaryButton from '@/components/common/buttons/SecondaryButton.vue';
  import { useRoute } from 'vue-router';
  import { format, parseISO, differenceInSeconds } from 'date-fns';
  import { computed } from 'vue';

  const route = useRoute();
  const accountId = Number(route.params.id);

  // Store setup
  const rendersStore = useRendersStore();
  const { getRendersBySchedulerId } = storeToRefs(rendersStore);

  // Format the renders data
  const formattedRenders = computed(() => {
    return getRendersBySchedulerId.value.map(render => {
      const createdAt = parseISO(render.attributes.publishedAt);
      const updatedAt = parseISO(render.attributes.updatedAt);
      const timeDifference = (
        differenceInSeconds(updatedAt, createdAt) / 60
      ).toFixed(2);
      const formattedPublishedAt = format(createdAt, 'dd/MM');

      return {
        ...render,
        formattedPublishedAt,
        timeDifference
      };
    });
  });

  // Table headers
  const headers = [
    { title: 'Name', value: 'attributes.Name', align: 'start' },
    { title: 'Published', value: 'formattedPublishedAt', align: 'center' },
    {
      title: 'Time Difference',
      value: 'timeDifference',
      align: 'center'
    },
    { title: 'Processed', value: 'attributes.Processing', align: 'center' },
    { title: 'Complete', value: 'attributes.Complete', align: 'center' },
    { title: 'Email', value: 'attributes.EmailSent', align: 'center' },
    {
      title: 'Team Roster',
      value: 'attributes.hasTeamRosterRequest',
      align: 'center'
    },
    {
      title: 'Roster Email',
      value: 'attributes.hasTeamRosterEmail',
      align: 'center'
    },
    {
      title: 'Force Rerender',
      value: 'attributes.forceRerender',
      align: 'center'
    },
    {
      title: 'Rerender Email',
      value: 'attributes.forceRerenderEmail',
      align: 'center'
    },

    { title: 'Actions', value: 'actions', align: 'center', sortable: false }
  ];
</script>

<style scoped>
  /* Add any necessary styles here */
</style>
