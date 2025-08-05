<template>
    <div class="container mt-5" v-if="isLoggedIn">
        <h1>WELCOME TO OUR LIBRARY, {{ loginUser }} !</h1>
        <button @click="logout()">log out</button>

        <!-- <button @click="test()">test</button> -->
        <div>
            <div class="list-group">
                <div class="list-group-item">
                    <div class="card">
                        <div class="card-header">
                            <h2>Personal Information</h2>
                        </div>
                        <div class="list-group-item">
                            <!-- <p>Name: {{ userInfo.username }}</p>
                            <p>Gender: {{ userInfo.gender }}</p>
                            <p>isAustralian: {{ userInfo.isAustralian ? 'Yes' : 'No' }}</p>
                            <p>Reason: {{ userInfo.reason }}</p> -->
                            <p>Email: {{ user.email }}</p>
                            <p>Email Verified: {{ user.emailVerified ? 'Yes' : 'No' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-5" v-if="!isLoggedIn">
        <h1>Sorry, please login first.</h1>
        <!-- <button @click="test()">test</button> -->
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import { getAuth } from "firebase/auth";

    const isLoggedIn = ref(localStorage.getItem('isLogged')==='true'?true:false);
    // const loginUser=ref(localStorage.getItem('isLogged')==='true'?localStorage.getItem('User'):null);
    // const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
    // const userInfo = storedUsers.find(user => user.username === loginUser.value);

    const logout = () =>{
        localStorage.setItem('isLogged','false');
        alert("Log out successfully!")
    };

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        console.log("当前用户信息:", {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            metadata: {
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime
            }
        });
    }
        
</script>

<style scoped>
    /* Our logic will go here */
    .card {
   border: 1px solid #ccc;
   border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }
   .card-header {
   background-color: #275FDA;
   color: white;
   padding: 10px;
   border-radius: 10px 10px 0 0;
   }
   .list-group-item {
   padding: 10px;
   }
   .text-verify{
    color: green;
   }

</style>