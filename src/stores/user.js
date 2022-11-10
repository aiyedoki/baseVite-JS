import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {
      username: 'xinhui',
      token: 'testxxxxxxxx'
    },
    date: '2020-02-02'
  }),

  getters: {},
  actions: {
    emptyUserInfo() {
      this.userInfo = {
        username: '',
        token: ''
      }
    }
  }
})
