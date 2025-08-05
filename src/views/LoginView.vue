<template>
    <div class="container mt-5" v-if="!isLoggedIn">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">User Information Form</h1>
                
                <form @submit.prevent="loginForm">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username"
                            @blur="()=>verifyName(true)"
                            @input="()=>verifyName(false)"
                            v-model="formData.username">
                            <div v-if="errors.username" class="text-danger">
                                {{ errors.username }}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"
                            @blur="()=>verifyPassword(true)"
                            @input="()=>verifyPassword(false)"
                            v-model="formData.password">
                            <div v-if="errors.password" class="text-danger">
                                {{ errors.password }}
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="login" class="btn btn-primary me-2" >Login</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm()">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div v-if="isLoggedIn">
        <h1>Login successful! {{ loginUser }}</h1>
        <h1>Now you can browser the page "about" and  many others.</h1>
    </div>
</template>

<script setup>
    import { ref  } from 'vue';
    import { sha256 } from 'js-sha256';
    
    const formData = ref({
        username: '',
        password: '',
    });

    // localStorage.setItem('isLogged','false');
    const isLoggedIn=ref(localStorage.getItem('isLogged')==='true'?true:false);
    const loginUser=ref(localStorage.getItem('isLogged')==='true'?localStorage.getItem('User'):null)

    const loginForm = () => {
        verifyName(true);
        verifyPassword(true);
    
        if (!errors.value.username && !errors.value.password )
        {   
            //改变登陆状态值
            // isLogged.value = true;
            localStorage.setItem('isLogged','true');
            localStorage.setItem('User',formData.value.username)
            clearForm();
            alert("Login successful!");
            console.log(localStorage.getItem('isLogged'));
        }
    };

    const clearForm = () => {
        console.log(localStorage.getItem('isLogged'));
        formData.value = {
            username: '',
            password: '',
        };
        errors.value = {
            username: null,
            password: null,
        };
    };

    const errors = ref({
        username: null,
        password: null,
    });

    const verifyName = (blur) => {
        const username = formData.value.username;
        if (!username.trim()) {
            if (blur) {
                errors.value.username = "【error message】\n Username cannot be empty";
            }
            return;
        }
        // console.log(localStorage.getItem('registeredUsers'));
        const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || []);
        const usernameExists = storedUsers.some(user => 
            user.username.toLowerCase() === username.toLowerCase()
        );
        if (!usernameExists) {
            if (blur) {
                errors.value.username = "【error message】\n Username not found";
            }
        } else {
            errors.value.username = null;
        }
    };

    const verifyPassword = ()=>{
        const username = formData.value.username;
        const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
        const user = storedUsers.find(user => user.username.toLowerCase() === username.toLowerCase());
        if (user) {
            const hashedPassword = sha256(formData.value.password);
            if (hashedPassword !== user.password) {
                errors.value.password = "【error message】\n Incorrect password";
            } else {
                errors.value.password = null;
            }
        }
    };
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