<script setup>
import {ref} from 'vue'
const checkedWorks = ref([]);
</script>

<template>

  <body class="text-center body-uslog">
    <div class="main-container">
      <form class="form-signin">
        <div class="images">
          <img class="worker-img" src="../../../../assets/workers.png">
        </div>
        <h1 class="h1 mb-3 font-weight-normal">EMPIEZA AHORA</h1>
        <h3 class="h3 mb-3 font-weight-normal"> REGISTRATE COMO <b>TRABAJADOR</b></h3>
        <div class="container-form">
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

          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="form-outline mb-4">
                <input type="email" id="form3Example8" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example8">Email</label>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="form-outline mb-4">
                <input type="text" id="form3Example8" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example8">Telefono</label>
              </div>
            </div>
          </div>
          <div class="form-outline mb-4">
            <input type="text" id="form3Example97" class="form-control form-control-lg" />
            <label class="form-label" for="form3Example97">Dirección de residencia</label>
          </div>

          <div class="form-outline">
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

          <div class="works-list">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option1" value="medico" v-model="checkedWorks">
              <label class="form-check-label" for="option1">Médico</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option2" value="estilista" v-model="checkedWorks">
              <label class="form-check-label" for="option2">Estilista</label>
            </div>
            <span>checkedNames: {{ checkedWorks }}</span>

            <!--
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option3" value="option3">
              <label class="form-check-label" for="option3">Barbero </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option4" value="option4">
              <label class="form-check-label" for="option4">Constructor </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option5" value="option5">
              <label class="form-check-label" for="option5">Conductor </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option6" value="option6">
              <label class="form-check-label" for="option6">Cocinero </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="option7" value="option7">
              <label class="form-check-label" for="option7">Programador</label>
            </div>-->
          </div>

        </div>

        <div class="btn-container">
          <button class="btn btn-lg btn-primary btn-block btn-ingresar" type="submit">Registrarse</button>
        </div>
        <div class="link-to-register mb-3">
          <p> ¿Ya tienes una cuenta?
            <RouterLink class="link-to-register-user" to="/worker-login">Ingresa</RouterLink>
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

.main-container {
  padding-top: 80px;
  padding-bottom: 40px;
}

.text-center {
  text-align: left !important;
}

.works-list{
  padding: 10px;
  justify-content: center;
  text-align: center;
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

.worker-img {
  width: 80px;
  height: 80px;
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
