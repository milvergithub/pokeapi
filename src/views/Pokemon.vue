<template>
  <div>
    <DataTable :value="results" :loading="loading">
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <img alt="logo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" height="50" class="mt-10">
        </div>
      </template>
      <Column field="id" header="#"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="option" header="">
        <template #body="{data}">
          <Button icon="pi pi-star" :class="data.className" @click="addFavorite(data)"/>
        </template>
      </Column>
    </DataTable>
    <div class="flex flex-row flex-wrap card-container blue-container">
      <div class="flex align-items-center justify-content-center m-2" v-if="data.previous">
        <Button label="Anterior" class="p-button-outlined" @click="nextPrevious(-1)"/>
      </div>
      <div class="flex align-items-center justify-content-center m-2" v-if="data.next">
        <Button label="Siguiente" class="p-button-outlined" @click="nextPrevious(1)"/>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { useToast } from 'primevue/usetoast';

export default {
  name: 'Pokemon',
  setup() {
    const store = useStore();
    const toast = useToast();
    const results = computed(() => store.getters.GET_POKEMON);
    const data = computed(() => store.getters.GET_DATA);
    const params = computed(() => store.getters.GET_PARAMS);
    const nextPrevious = (increment) => {
      const attrs = { ...params.value };
      store.dispatch('GET_POKEMON_ACTION', { ...attrs, offset: attrs.offset + increment });
    };
    const addFavorite = (value) => {
      toast.add({
        severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 3000,
      });
      store.dispatch('ADD_FAVORITE_ACTION', value);
    };
    onMounted(() => {
      store.dispatch('GET_POKEMON_ACTION', params.value);
    });
    return {
      results,
      data,
      loading: computed(() => store.getters.GET_LOADING),
      nextPrevious,
      addFavorite,
    };
  },
  components: {
    DataTable,
    Column,
    Button,
  },
};
</script>

<style scoped>

</style>
