<script>
</script>

<template>

  <body class="text-center body-uslog">
    <div class="main-container">
      <form class="form-signin">
        <div class="images">
          <img class="worker-img" src="../../../../assets/workers.png">
        </div>
        <h1 class="h1 mb-3 font-weight-normal">BIENVENIDO</h1>
        <h3 class="h3 mb-3 font-weight-normal"> INGRESA COMO <b>TRABAJADOR</b></h3>
        <div class="container-email">
          <label for="inputEmail" class="sr-only email-input">Email</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
        </div>
        <div class="container-phone">
          <label for="inputPhone" class="sr-only">Telefono</label>
          <input type="password" id="inputPhone" class="form-control" placeholder="Telefono" required>
        </div>

        <div class="btn-container">
          <button class="btn btn-lg btn-primary btn-block btn-ingresar" type="submit">Ingresar</button>
        </div>
        <div class="link-to-register mb-3">
          <p> ¿No tienes una cuenta?
            <RouterLink class="link-to-register-user" to="/worker-register">Creala ahora</RouterLink>
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
