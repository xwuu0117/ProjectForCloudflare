<template>
    <div class="about" v-if="isLoggedIn">
      <h1>About Our Library</h1>
      <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
    </div>
    <div class="container mt-5" v-if="!isLoggedIn">
        <h1>Sorry, please login first.</h1>
    </div>
  </template>
  
  <script setup>
  // No script needed for now
    import { ref } from 'vue';

    const isLoggedIn = ref(localStorage.getItem('isLogged')==='true'?true:false);

  </script>
