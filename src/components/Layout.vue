<script setup>

</script>

<template>
    <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
    </div>
</template>


<style  scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>