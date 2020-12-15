<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: lightblue;
}

ul > li {
  list-style: none;
}
</style>
