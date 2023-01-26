<template>
  <!-- PRUEBA CONEXIÓN BACK
  <body class="bod">
    <h1> USER INDEX</h1>

    <div class="row">
      <div class="col-md-4">
        <div class="card bg-primary">
          <div class="card-header">
            <h3 v-for="(user, index) in users" :key="index"> {{ user.email }} </h3>
            <h3 v-for="(pr,index) in prueba" :key="index">{{ pr }}</h3>
          </div>
        </div>
      </div>

    </div>
  </body> -->

  <body class="text-center body-uslog">
    <div class="main-container">
      <form class="form-signin">
        <div class="images">
          <img class="user-img" src="../../../../assets/user.png">
          <img class="who-img" src="../../../../assets/who.png">
        </div>
        <h1 class="h1 mb-3 font-weight-normal">BIENVENIDO</h1>
        <h3 class="h3 mb-3 font-weight-normal"> INGRESA COMO <b>USUARIO</b></h3>
        <div class="container-email">
          <label for="inputEmail" class="sr-only email-input">Email</label>
          <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Email" required
            autofocus>
        </div>
        <div class="container-phone">
          <label for="inputPhone" class="sr-only">Telefono</label>
          <input type="password" v-model="user.phone" id="inputPhone" class="form-control" placeholder="Telefono" required>
        </div>
        <div class="btn-container">
          <button class="btn btn-lg btn-primary btn-block btn-ingresar" @click.prevent="authUser"
            type="submit">Ingresar</button>
        </div>
        <div class="link-to-register mb-3">
          <p> ¿No tienes una cuenta?
            <RouterLink class="link-to-register-user" to="/user-register">Creala ahora</RouterLink>
          </p>

        </div>

      </form>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p> Proyecto universitario <br> <b>Universidad del Valle</b></p>
        </div>
      </footer>
    </div>
  </body>



</template>

<script setup>
import { useRouter } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";
import { ref } from 'vue'
import AuthService from '../../../../services/AuthServiceUser.js'
import useUserState from '../../composables/useUserState.js'

let email = ref("")
let phone = ref("")
const {user} = useUserState();
const router = useRouter();
const toaster = createToaster({ });

const authUser = async () => {
  console.log(user.value.email);
  console.log(user.value.phone);

  const auth = new AuthService()
  const success = await auth.login(user.value.email, user.value.phone)
  if (success) {
    toaster.show('Has ingresado con éxito', { 
      duration:1000,
      type: "success",
      position: "top",
      maxToasts: 1,

    });
        setTimeout(() => {
            router.push('/user-home')
        }, 1000)
  } else {
    toaster.show('Tus datos son incorrectos o no estás registrado aún', { 
      duration:1000,
      type: "error",
      position: "top",
      maxToasts: 1,

    });
  }
}

/** 
import { ref } from 'vue';
let users = ref([]);
const prueba = ref(["a", "b"]);
import userService from '../../../../services/user-service'
export default {
  name: "user-login",
  data() {
    return {
      users,
      prueba
    }
  },
  async mounted() {
    this.users = await userService.getUser();
    //console.log(this.users)
  }
}*/
</script>

<style scoped>
body {
  background: url('../../../../assets/background.jpg');
  background-size: cover;
  height: 100vh;
}

.main-container {
  padding-top: 80px;
  padding-bottom: 40px;
}

.text-center {
  text-align: left !important;
}

a {
  color: black;
}

a:hover {
  color: whitesmoke;
}

.images {
  position: relative;
  left: 40%;
  top: 0px;
}

.user-img {

  width: 80px;
  height: 80px;
}

.who-img {
  position: relative;
  bottom: 25px;
  width: 30px;
  height: 30px;
}

.btn-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.btn-ingresar {
  background-color: rgb(0, 0, 0);
  border: none;
}

.btn-ingresar:hover {
  background-color: rgb(22, 22, 22);
}

.link-to-register {
  display: flex;
  justify-content: center;
  margin-top: -15px;
}

.container-email {
  padding: 10px 0px 25px 0px;
}

.h1 {
  text-align: center;
}

.h3 {
  margin-top: -20px;
  font-size: 15px;
  text-align: center;
}

.form-signin {

  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.mastfoot {
  display: flex;
  color: rgba(255, 255, 255, .5);
  justify-content: center;
  align-items: center;
  letter-spacing: 5px;
}
</style>
