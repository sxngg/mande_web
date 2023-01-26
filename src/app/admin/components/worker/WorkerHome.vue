<script setup>
import useWorkerState from "../../composables/useWorkerState";
import {ref} from 'vue';
import { onMounted } from "vue";
import { getJobOfferedByWorkId } from "../../../../services/job-offered-service.js";
import useServiceState from "../../composables/useServiceState";

const {service} = useServiceState();
const { worker } = useWorkerState();
let selectedWorkName = ref([]);
const jobAssigned = ref([]);

onMounted(async () => {
    const data = await getJobOfferedByWorkId(2);
    jobAssigned.value = data;
    selectedWorkName = jobAssigned.value[1].work_id;  
});

</script>

<template>

  <body>
    <div class="main-container">
      <div class="text">
        <h1>PROFILE WORKER</h1>
        <h2> worker email{{ worker.email }}</h2>
      </div>

      <div class="imagen">
        <img class="worker-profile" src="">
      </div>

      
      <div class="card-body p-5 d-flex">
      <div class="form-check mb-3" v-for="(job, index) in jobAssigned" :key="job.job_offered_id">
        <div class="container">
          <div class="card" style="width: 250px">
            <img class="card-img-top worker-img" src="../../../../assets/workers.png" alt="Card image" />

            <div class="card-body text-center">
              <h4 class="card-title small">{{ selectedWorkName }} {{ service.user_email }}</h4>
              <p class="card-text small mb-1">
               Te han contratado en el oficio de: {{  }}
              </p>
              <p class="small mb-1">Contacto: <b>{{ }}</b></p>
              <button class="btn btn-primary" >
                Terminado
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>


    </div>

  </body>
  <!-- <div class="container-list-group">
     <ol class="list-group list-group-numbered">
     <li class="list-group-item">A list item</li>
     <li class="list-group-item">A list item</li>
     <li class="list-group-item">A list item</li>
     </ol>
   </div>

   <div class="container-check">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
       OPCION 1
       </label> 
     </div>

     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
       <label class="form-check-label" for="flexCheckChecked">
       OPCION 2
       </label>
     </div>

     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
       OPCION 3
       </label>
     </div>-->
</template>

<style scoped>
body {
  background: url('../../../../assets/background.jpg');
  background-size: cover;
  height: 100vh;
}

.worker-img {
    width: 50px;
    height: 50px;
}
.card {
    margin: 20px;
    display: flex;
    --bs-card-bg: rgba(238, 237, 237, 0.8);
    justify-content: center;
    align-items: center;
    width: 700px;
    border: 1px solid red;
}

.text {
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

.container-list-group {
  border: 1px solid black;
  position: relative;
  float: left;
  width: 33.33%;
  margin-right: 10px;
  /* top: 0;
  left: 200px; */
  width: 500px;

}

.container-check {
  border: 1px solid rgb(238, 24, 24);
  position: relative;
  float: left;
  width: 33.33%;
  margin-right: 10px;
  /* top: 0;
  left: 40px; */
  width: 40px;
}

.form-check {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>