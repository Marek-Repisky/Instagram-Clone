import { defineStore } from "pinia";

export const useCommentsStore = defineStore("comments", {
  state: () => ({
    comments: {},
  }),
  actions: {
    addComment(postId, comment) {
      if (!this.comments[postId]) {
        this.comments[postId] = [];
      }
      this.comments[postId].push(comment);
    },
    getComments(postId) {
      return this.comments[postId] || [];
    },
  },
});
