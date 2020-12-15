<template>
  <div class="Login">
    登录页面
    <button type="button" @click="add()">登录</button>
  </div>
</template>

<script>
import store from "@/store/main.js";
export default {
  name: "Login",
  store,
  methods: {
    add() {  
      console.log("add Event");
      store.commit("increase");
    }
  }
};
</script>

<style src="">
</style>