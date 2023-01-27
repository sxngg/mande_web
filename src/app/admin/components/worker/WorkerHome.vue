<script setup>
import useWorkerState from "../../composables/useWorkerState";
import { ref } from 'vue';
import { onMounted } from "vue";
import useServiceState from "../../composables/useServiceState";
import { getJobOfferedByWorker } from '../../../../services/job-offered-service.js';
import {getServiceByJobOfferedId} from '../../../../services/service-service.js';

const { service } = useServiceState();
const { worker } = useWorkerState();
let selectedWorkName = ref([]);
const serviceAssigned = ref([]);
const jobAssigned = ref([]);
const loaded = ref(false);

const workerBack = {
    email: worker.value.email,
    phone: worker.value.phone
}

onMounted(async () => {
  const data = await getJobOfferedByWorker(workerBack);
  jobAssigned.value = data;
  console.log(jobAssigned.value);
});

/** 
 * Me obtiene por medio del work_id (que le daré en el v-for en el template) el work_name y ya veremos que más sirve sacar)
*/
const getWorkName = async (work_id) => {
  /**const data = await getWorkbyWorkId(work_id);
  selectedWorkName.value = data;
  selectedWorkName = work.work_name; */
};

/**
 * 
 * @param {*} job_offered_id 
 * Obtiene todo un servicio asociado a un jobOfferedId, incluído el user_email
 */
const getService = async (job) =>{
  console.log(`ID: ${job.job_offered_id}`)
  const dataService = await getServiceByJobOfferedId(job.job_offered_id);
  serviceAssigned.value = dataService;
  console.log("se ejectuo service", serviceAssigned.value);
  loaded.value = true;
}


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
        <div class="form-check mb-3" v-for="(jobAssigned, index) in jobAssigned" :key="jobAssigned.job_offered_id"
        v-on="getService(jobAssigned)">
          <div v-if="!loaded" class="container">
            <div class="card" style="width: 250px">
              <img class="card-img-top worker-img" src="../../../../assets/workers.png" alt="Card image" />

              <div class="card-body text-center">
                <h4 class="card-title small">NUEVO TRABAJO ASIGNADO</h4>
                <p class="card-text small mb-1">
                  Te ha contratado en el oficio de: {{}}
                </p>
                <p class="card-text small mb-1">
                  La fecha de inicio es: {{}} 
                </p>
                <p class="card-text small mb-1">
                  La fecha limite es: {{}} 
                </p>
                <p class="card-text small mb-1">
                  Tu servicio tendrá un valor de: {{}} 
                </p>
                <p class="small mb-1">Contacto:  <b>{{serviceAssigned.user_email}}</b></p>
                <button class="btn btn-primary">
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