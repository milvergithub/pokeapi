<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="../assets/logo.png" height="40" class="mr-2">
      </template>
    </Menubar>
    <router-view/>
  </div>
</template>

<script>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

export default {
  name: 'Layout',
  setup() {
    const items = ref([
      {
        label: 'Inicio',
        to: 'Home',
      },
      {
        label: 'Pokemones',
        to: 'Pokemon',
      },
      {
        label: 'Favoritos',
        to: 'Favorite',
      },
    ]);

    return { items };
  },
  components: {
    Menubar,
  },
};
</script>

<style scoped>

</style>
