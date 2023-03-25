<template>
  <div>
    <input
      v-model="searchQuery"
      @input="searchChampion"
      class="w-full p-3 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
      placeholder="Search for a champion..."
    />
    <ul class="mt-4">
      <li
        v-for="(champion, index) in searchResults"
        :key="index"
        @click="$emit('champion-selected', champion.item)"
        class="mb-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
      >
        {{ champion.item.championName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import Fuse from 'fuse.js';

export default {
  setup() {
    const searchQuery = ref('');
    const searchResults = ref([]);

    function searchChampion() {
      const options = {
        keys: ['championName'],
        threshold: 0.3,
      };

      const fuse = new Fuse(champions, options);
      searchResults.value = searchQuery.value ? fuse.search(searchQuery.value) : [];
    }

    return {
      searchQuery,
      searchResults,
      searchChampion,
    };
  },
};
</script>
