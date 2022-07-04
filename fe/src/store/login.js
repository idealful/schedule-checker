import { defineStore } from 'pinia';
import jwt_decode from 'jwt-decode';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    isLogin: false,
    loginInfo: null,
    grade: null,
    accessToken: null,
    refreshToken: null,
  }),
  getters: {
    getIsLogin: (state) => {
      return state.isLogin;
    },
    getLoginInfo: (state) => {
      return state.loginInfo;
    },
    getGrade: (state) => {
      return state.grade;
    },
    getAccessToken: (state) => {
      return state.accessToken;
    },
    getRefreshToken: (state) => {
      return state.refreshToken;
    },
  },
  actions: {
    setIsLogin(val) {
      this.isLogin = val;
    },
    setLoginInfo(val) {
      this.loginInfo = val;
    },
    setGrade(val) {
      this.grade = val;
    },
    setAccessToken(val) {
      this.accessToken = val;
      // this.loginInfo = JSON.parse(JSON.stringify(jwt_decode(val)));
      // this.loginInfo = { ...jwt_decode(val) };
    },
    setRefreshToken(val) {
      this.refreshToken = val;
    },
  },
  persist: {
    enabled: true, // It keeps you logged in even after updating your web browser.
  },
});
