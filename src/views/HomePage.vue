<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -rotate-6 rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
        <h1 class="text-center text-2xl font-semibold mb-4">Banned Champions</h1>
        <champion-search-bar @champion-selected="bannedChampions.push" />
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(champion, index) in champions" :key="index">
            <label class="cursor-pointer" @click="bannedChampions.push(champion.championName)">
              <div
                class="rounded-lg p-4 border-2 border-solid transition-colors duration-300"
                :class="{
                  'border-red-400': bannedChampions.includes(champion.championName),
                  'border-gray-300': !bannedChampions.includes(champion.championName)
                }"
              >
                {{ champion.player.name }}
              </div>
            </label>
          </div>
        </div>
        <button
          @click="generateSuggestions"
          class="w-full mt-6 py-3 bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-semibold rounded-lg"
        >
          Generate Team Suggestions
        </button>
        <div v-if="suggestedChampions.length > 0" class="mt-6">
          <h2 class="text-center text-xl font-semibold mb-4">Suggested Champions</h2>
          <ul>
            <li v-for="(champion, index) in suggestedChampions" :key="index" class="mb-2">
              {{ champion.championName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getChampionData } from '../services/getChampionData'
import ChampionSearchBar from '@/components/ChampionSearchBar.vue';


export default {
  setup() {
    const champions = getChampionData()
    const bannedChampions = ref([])
    const suggestedChampions = ref(['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu'])

    function generateSuggestions() {
      const availableChampions = champions.filter(
        (champion) => !bannedChampions.value.includes(champion.championName)
      )

      suggestedChampions.value = getRandomChampions(availableChampions, 5)
    }

    function getRandomChampions(arr, n) {
      const result = new Array(n)
      let len = arr.length
      const taken = new Array(len)

      if (n > len) {
        throw new RangeError('getRandomChampions: more elements taken than available')
      }

      while (n--) {
        const x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
      }

      return result
    }

    return {
      champions,
      bannedChampions,
      suggestedChampions,
      generateSuggestions
    }
  }
}
</script>
