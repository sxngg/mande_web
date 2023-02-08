<script>
import { registerUser } from '../../../../services/user-service.js';
import { createToaster } from "@meforma/vue-toaster";
import { userPrimaryKey } from './UserLogin.vue'
const toaster = createToaster({ });
export default {
  name: "user-register",
  data() {
    return {
      client: {
        user_name: null,
        user_last_name: null,
        email: null,
        phone_number: null,
        address: null,
        payment_method: null,
        public_services: null,
        is_active: true,
      }
    }
  },
  computed: {
    formIsValid() {
      return this.email && this.user_name;
    },
  },
  methods: {
    async onStore() {
      console.log(this.client)
      //const data = await registerUser(this.client);

      toaster.show('Te has registrado con éxito', { 
        duration:1000,
        type: "success",
        position: "top",
        maxToasts: 1,
      });
      setTimeout(() => {
        this.$router.push('/user-login');
      }, 1000)
    },
    handleFileChange(e) {
      this.client.public_services = e.target.files[0];
    },
  },
}
</script>

<template>

  <body class="text-center body-uslog">
    <div class="main-container">
      <div class="images">
        <img class="user-img" src="../../../../assets/user.png">
        <img class="who-img" src="../../../../assets/who.png">
      </div>
      <h1 class="h1 mb-3 font-weight-normal">EMPIEZA AHORA</h1>
      <h3 class="h3 mb-3 font-weight-normal"> REGISTRATE COMO <b>USUARIO</b></h3>
      <div class="container-form">
        <form class="form-signin" action="http://localhost:3000/mande/user/add" enctype="multipart/form-data" method="post">
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <input type="text" id="form3Example1m" v-model="client.user_name"
                  class="form-control form-control-lg" name="user_name"/>
                <label class="form-label" for="form3Example1m">Nombre</label>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="form-outline">
                <input type="text" id="form3Example1n" v-model="client.user_last_name"
                  class="form-control form-control-lg" name="user_last_name"/>
                <label class="form-label" for="form3Example1n">Apellido</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline mb-4">
                <input type="email" id="form3Example8" v-model="client.email" class="form-control form-control-lg" name="email"/>
                <label class="form-label" for="form3Example8">Email</label>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="form-outline mb-4">
                <input type="text" id="form3Example8" v-model="client.phone_number"
                  class="form-control form-control-lg" name="phone_number"/>
                <label class="form-label" for="form3Example8">Telefono</label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form3Example97" name="address" v-model="client.address" class="form-control form-control-lg" />
            <label class="form-label" for="form3Example97">Dirección de residencia</label>
          </div>

          <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

            <label for="method">Metodo de pago</label>
            <select id="method" class="form-select" v-model="client.payment_method" name="payment_method">
              <option value="efectivo">Efectivo</option>
              <option value="debito">Débito</option>
            </select>
          </div>
          
          <div class="form-outline">
            <input type="file" name="public_services" class="form-control  form-control-sm" id="formFileSm" @change="handleFileChange">
            <label v-if="client.public_services" for="formFileSm" class="form-label"></label>
            <label>Recibo público</label>
            <!---
              <input type="submit" value="Get me the stats!" class="btn btn-default">
              <input class="form-control  form-control-sm" id="formFileSm" type="file" name="public_services" @change="handleFileChange" />
              <label v-if="client.public_services" for="formFileSm" class="form-label"></label>
              <label>Recibo público</label>
            -->
          </div>
          <div class="btn-container">
            <button class="btn btn-lg btn-primary btn-block btn-ingresar"
              :disabled="!client.user_name || !client.user_last_name || !client.email || !client.phone_number || !client.address || !client.payment_method || !client.public_services"
              type="submit" @click="onStore">Registrarse</button>
          </div>
        </form>


      </div>

      <div class="link-to-register mb-3">
        <p> ¿Ya tienes una cuenta?
          <RouterLink class="link-to-register-user" to="/user-login">Ingresa</RouterLink>
        </p>

      </div>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p> Proyecto universitario <br> <b>Universidad del Valle</b></p>
        </div>
      </footer>
    </div>
  </body>





  <!--
<section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          
          <div class="row g-0">
            
            <div class="col-xl-6 d-none d-xl-block">
              <img class="log-img" src="../../../../assets/logo-acmas.png">
              <img src="../../../../assets/register-img.jpg"
                alt="Sample photo" class="img-fluid"
                style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
            </div>
            
            <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h1 class="h1 mb-3 font-weight-normal">REGISTRATE</h1>
                  <h3 class="mb-5 text-uppercase">como usuario</h3>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1m">Nombre</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1n">Apellido</label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example8" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example8">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example8" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example8">Telefono</label>
                  </div>

                  <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                    <h6 class="mb-0 me-4">Método de pago: </h6>

                    <div class="form-check form-check-inline mb-0 me-4">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                        value="option1" />
                      <label class="form-check-label" for="femaleGender">Efectivo</label>
                    </div>

                    <div class="form-check form-check-inline mb-0 me-4">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                        value="option2" />
                      <label class="form-check-label" for="maleGender">Débito</label>
                    </div>

                    <div class="form-check form-check-inline mb-0">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                        value="option3" />
                      <label class="form-check-label" for="otherGender">Crédito</label>
                    </div>

                  </div>
                  PARA WORKER
                  <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">State</option>
                      <option value="2">Medicina</option>
                      <option value="3">Belleza</option>
                      <option value="4">Construcción</option>
                    </select>

                  </div>
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>-->
  <!--
                  <div class="form-outline mb-4">
                    <label for="formFileSm" class="form-label">Imagen de perfil</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file" />
                  </div>

                  <div class="form-outline mb-4">
                    <label for="formFileSm" class="form-label">Imagen de tu documento</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file" />
                  </div>

                  <div class="form-outline mb-4">
                    <label for="formFileSm" class="form-label">Recibo público</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file" />
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example97" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example97">Dirección de residencia</label>
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-warning btn-lg ms-2">Registrarse</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>-->
</template>

<style scoped>
body {
  background: url('../../../../assets/background.jpg');
  background-size: cover;
  max-height: 100%;
}

.btn:disabled{
  opacity: 50%; 
  background-color: rgb(0, 0, 0);
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

.mb-4 {
  margin-bottom: 10px !important;
}

.images {
  position: relative;
  left: 45%;
  top: 0px;
}

.user-img {
  width: 60px;
  height: 60px;
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
  background-color: rgb(49, 49, 49);
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
  max-width: 600px;
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

/**section {
  background: url('../../../../assets/background.jpg');
  background-size: cover;
  max-height: 100%;
}

.img-fluid {
  object-fit: cover;
  width: 550px;
  height: 950px;

}

.forma {
  background: rgba(255, 255, 255, 0.8);

}

.col-xl-6 {
  border: 1px solid black;

}

.log-img{
  position: absolute;
  right: 55%;
  width: 450px;
  height: 350px;

}*/
</style>
