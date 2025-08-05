<template>

  <div class="main-container">
    <header>
      <BHeader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import JSON from './components/JSON.vue'
// import RegisterForm from './views/RegisterForm.vue';
import BHeader from './components/BHeader.vue';
// import LoginView from './views/LoginView.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // JSON,
    BHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
