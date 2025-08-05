<template>
    <h1>Sign in your account</h1>
    <p><input type="text" placeholder="Email" v-model = "email"/></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in</button></p>
</template>

<script setup>
    import { ref }from"vue"
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
    import {useRouter} from "vue-router"
    const email = ref("")
    const password = ref("")
    const router = useRouter()
    const auth = getAuth()

    // const isLoggedIn = ref(localStorage.getItem('isLogged')==='true'?true:false);


    const signin = () =>{
        signInWithEmailAndPassword (auth, email.value, password.value)
        .then( (data)=>{
            console.log("Firebase Login successful!");
            router.push("/"); //跳转主页
            console.log(auth.currentUser);
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('FirebaseUser', auth.currentUser.email);
            console.log("\n")
            console.log(data)
            // if (auth.currentUser===data.user)
            //     console.log("AAA")
            //控制台可以输出AAA，说明等价
            console.log(data.operationType) //signIn
            console.log(data.user.email)
            console.log(data.user.stsTokenManager.expirationTime) //登陆令牌有效的时间戳格式->保存到local storage？
            console.log(Date.now())
        }).catch( (error)=>{
            console.log(error.code);
        });
    };

</script>