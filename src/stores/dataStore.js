import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
const data = {
  userInfo: null,
}
  return { data }
})
