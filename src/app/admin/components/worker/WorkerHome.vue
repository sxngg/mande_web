<script></script>

<template>
    <body>
      <div class="main-container">
        <div class="text">
          <h1>PROFILE WORKER</h1>
        </div>
        
        <div class="imagen">
          <img class="worker-profile" src="imagen">
        </div>

        <div class="container-list-group">
          <ol class="list-group list-group-numbered">
          <li class="list-group-item">A list item</li>
          <li class="list-group-item">A list item</li>
          <li class="list-group-item">A list item</li>
          </ol>
        </div>

        <div class="container-check">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <!-- <label class="form-check-label" for="flexCheckDefault">
            OPCION 1
            </label> -->
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <!-- <label class="form-check-label" for="flexCheckChecked">
            OPCION 2
            </label> -->
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <!-- <label class="form-check-label" for="flexCheckDefault">
            OPCION 3
            </label> -->
          </div>

        </div>

      </div>
    </body>
</template>

<style scoped>
body {
  background: url('../../../../assets/background.jpg');
  background-size: cover;
  height: 100vh;
}

.text{
  text-align: center
}

.imagen {
  border: 1px solid black;
  position: relative;
  float: left;
  width: 33.33%;
  margin-right: 10px;
  /* top: 0;
  left: 150px; */
  width: 200px;
  height: 200px;
}

.container-list-group{
  border: 1px solid black;
  position: relative;
  float: left;
  width: 33.33%;
  margin-right: 10px;
  /* top: 0;
  left: 200px; */
  width: 500px;
  
}

.container-check{
  border: 1px solid rgb(238, 24, 24);
  position: relative;
  float: left;
  width: 33.33%;
  margin-right: 10px;
  /* top: 0;
  left: 40px; */
  width: 40px;
}

.form-check{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>