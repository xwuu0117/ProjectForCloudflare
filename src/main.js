import { createApp } from 'vue'
import App from './App.vue'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router'


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);

app.mount('#app');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD80DSr96fO8pHvRfbCZJXSvLxwwDhiUfU",
  authDomain: "week7-xuanwu.firebaseapp.com",
  projectId: "week7-xuanwu",
  storageBucket: "week7-xuanwu.firebasestorage.app",
  messagingSenderId: "369002639219",
  appId: "1:369002639219:web:e6662f1b0c050e47fe1f06"
};

// Initialize Firebase
initializeApp(firebaseConfig);



