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

  <body class="text-center">
    <form class="form-signin">
      <h1 class="h1 mb-3 font-weight-normal">BIENVENIDO</h1>
      <h3 class="h3 mb-3 font-weight-normal"> INGRESA COMO USUARIO</h3>
      <div class="container-email">
        <label for="inputEmail" class="sr-only email-input">Email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      </div>
      <div class="container-phone">
        <label for="inputPhone" class="sr-only">Telefono</label>
        <input type="password" id="inputPhone" class="form-control" placeholder="Phone" required>
      </div>


      <button class="btn btn-lg btn-primary btn-block btn-ingresar" type="submit">Ingresar</button>

      <div class="link-to-register mb-3">
        <label>
          ¿No tienes cuenta? <a href="https:facebook.com">Crea una ahora</a>
        </label>
      </div>

    </form>
  </body>

  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p> Proyecto universitario <br> <b>Universidad del Valle</b></p>
    </div>
  </footer>

</template>

<script>
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

<style>
html,
body {
  display: center;
  justify-content: center;

  height: 100%;
}

a {
  color: black;
}

a:hover {
  color: aqua;
}

body {
  margin-top: 50px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background: url('../../../../assets/background.jpg');
  background-size: cover;
}

.btn-ingresar {
  background-color: rgb(0, 0, 0);
  border: none;
  margin-left: 85px;
  margin-top: 10px;
}

.btn-ingresar:hover {
  background-color: rgb(49, 49, 49);
}

.link-to-register {
  padding: 20px;
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
    padding-top: 25px;
    display: flex;
    color: rgba(255, 255, 255, .5);
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
}
</style>
