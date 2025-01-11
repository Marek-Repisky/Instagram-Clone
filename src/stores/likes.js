import { defineStore } from 'pinia'

export const useLikeStore = defineStore('likes', {
  state: () => {
    return {
      likes: []
    }
  },
  actions: {
    addLike(id){
      this.likes.push(id)
    },
    removeLike(id){
      const index = this.likes.indexOf(id)
      this.likes.splice(index, 1)
    }
  }
})
