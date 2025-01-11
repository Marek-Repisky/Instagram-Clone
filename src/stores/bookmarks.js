import { defineStore } from 'pinia'

export const useBookmarksStore = defineStore('bookmarks', {
  state: () => {
    return {
      bookmarks: []
    }
  },
  actions: {
    addBookmark(id){
      this.bookmarks.push(id)
    },
    removeBookmark(id){
      const index = this.bookmarks.indexOf(id)
      this.bookmarks.splice(index, 1)
    }
  }
})
