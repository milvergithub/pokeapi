<template>
  <div class="favorite">
    <DataTable :value="results">
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <img alt="logo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" height="50" class="mt-10">
        </div>
      </template>
      <Column field="id" header="#"></Column>
      <Column field="avatar" header="Logo">
        <template #body="{data}">
          <img alt="logo" :src="data.avatar" height="75" class="mt-10">
        </template>
      </Column>
      <Column field="name" header="Name"></Column>
      <Column field="option" header="">
        <template #body="{data}">
          <Button icon="pi pi-star" :class="data.className" @click="addFavorite(data)"/>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script>

import { useStore } from 'vuex';
import { computed } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
  name: 'Favorite',
  setup() {
    const store = useStore();
    const results = computed(() => store.getters.GET_FAVORITES);
    const addFavorite = (value) => {
      store.dispatch('ADD_FAVORITE_ACTION', value);
    };
    return { results, addFavorite };
  },
  components: {
    DataTable,
    Column,
    Button,
  },
};
</script>
