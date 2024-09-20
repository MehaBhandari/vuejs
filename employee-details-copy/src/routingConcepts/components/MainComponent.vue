<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/help">Help</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <hr />

  <div style="height: 600px; border: 1px solid red">
    <router-view></router-view>
  </div>

  <footer>This is TechnoFunnel</footer>
</template>

<style>
a {
  margin: 10px;
}
</style>
