<script setup>
import useWorkerState from "../../composables/useWorkerState";
import { ref } from 'vue';
import { onMounted } from "vue";
import useServiceState from "../../composables/useServiceState";
import { getJobOfferedByWorkerForView } from '../../../../services/job-offered-service.js';
import { getServiceByJobOfferedId } from '../../../../services/service-service.js';
import { getWorkNameByWorkId } from '../../../../services/work-service.js'
import { getWorkerByEmailAndPhone } from '../../../../services/worker-service.js'
import { getAllServicePaid } from '../../../../services/service-service.js'
import { updateIsActiveWorker } from '../../../../services/worker-service.js'
import { updateSignedJobOffered } from '../../../../services/job-offered-service.js';
import { updateDoneService } from '../../../../services/service-service.js';
import { getAllJobOfferedByWorker } from '../../../../services/job-offered-service.js';
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});
const { worker } = useWorkerState();
let selectedWorkName = ref([]);
const serviceAssigned = ref();
const jobAssigned = ref([]);
let jobOfferedIds = ref([]);
const allService = ref([]);
let workIds = ref([]);
const allWorks = ref([]);
const allJobOfferedIds = ref([]);
const allJobAssigned = ref();
let disabled = ref(false);

/**
 * Para traer los servicios ya terminados
 */
const servicePaid = ref(); //Aquí se almacena sólo uno, ya que traemos desde el back solo uno
const allServicePaid = ref([]); //Es un array donde se almacenan todos los serviceDone que traemos desde el back

/**
 * worker que se envía al back para buscar
 */
const workerBack = {
  email: worker.value.email,
  phone_number: worker.value.phone
}
const workerName = ref();
const workerLastName = ref();
const workerStars = ref();



/**
 * En cuanto se monta el componente me va a recuperar todos los jobOffered de este trabajador, luego va a sacar sus job_offered_id
 * y sus work_ids para almacenarlos localmente y tratarlos mejor, luego por cada uno de estos arrays voy a obtener su servicio getService
 * y el work name getWorkName
 */
onMounted(async () => {
  const data = await getJobOfferedByWorkerForView(workerBack);
  jobAssigned.value = data;
  const dataAll = await getAllJobOfferedByWorker(workerBack);
  allJobAssigned.value = dataAll;

  jobAssigned.value.forEach(job => {
    jobOfferedIds.value.push(job.job_offered_id)
    workIds.value.push(job.work_id)

  })

  allJobAssigned.value.forEach(job => {
    allJobOfferedIds.value.push(job.job_offered_id)
  })

  for (const id of allJobOfferedIds.value) {
    getServicePaid(id);
  }

  for (const id of jobOfferedIds.value) {
    getService(id);
  }
  for (const workId of workIds.value) {
    getWorkName(workId)
  }



  /**
 * Función que retorna el worker por medio del email y phone y lo asignamos a workerFront
 */
  const dataWorker = await getWorkerByEmailAndPhone(workerBack);
  workerName.value = dataWorker[0].worker_name;
  workerLastName.value = dataWorker[0].worker_last_name;
  workerStars.value = dataWorker[0].stars;
});

/** 
 * Me obtiene por medio del work_id (que le daré en el v-for en el template) el work_name y ya veremos que más sirve sacar)
*/
const getWorkName = async (work_id) => {
  const data = await getWorkNameByWorkId(work_id);
  selectedWorkName.value = data;

  allWorks.value.push(selectedWorkName.value[0].work_name);
};

/**
 * 
 * @param {*} job_offered_id 
 * Obtiene todo un servicio asociado a un jobOfferedId, incluído el user_email
 */
const getService = async (id) => {
  const dataService = await getServiceByJobOfferedId(id);
  serviceAssigned.value = dataService;
  allService.value.push(serviceAssigned.value);
}

/**
 * Obtiene los servicios asociados a un jobOfferedId que tienen el paid=true osea que el cliente ya pagó y calificó
 */
const getServicePaid = async (id) => {
  const data = await getAllServicePaid(id);
  let contador = 0;

  if (data.length > 1) {
    data.forEach(i => {
      console.log('aca', contador);
      allServicePaid.value.push(data[contador]);
      contador++;
    })
  }

  if (data.length == 1){
    allServicePaid.value.push(data[0]);
  }
  console.log("todo", allServicePaid.value);

}

/**
 * BOTÓN DE TERMINADO: Indica que el worker ya realizó el trabajo así que le da clic y debe:
 * Cambiar el estado is_active de worker que estaba en false a true, porque ya estará activo, podrá recibir más trabajos
 * Cambiar el estado signed de job_offered que era true a false, ya que no estará más contratado y podrá ser contratado por alguien más
 * Cambiar el estado de done de service a true ya que el servicio está realizado para que el usuario pueda listar los trabajos hechos
 */
const workDone = (jobOfferedId, serviceId) => {
  disabled.value = true;
  updateIsActiveWorker(workerBack);
  updateSignedJobOffered(jobOfferedId);
  updateDoneService(serviceId);
  toaster.show('Has terminado este trabajo, dentro de poco se realizará el pago', {
    duration: 1000,
    type: "success",
    position: "top",
    maxToasts: 1,

  });
  /**
  updateIsActiveWorker(workerName);
  updateSignedJobOffered(jobOfferedId);
  updateDoneService(serviceId) */
}


</script>

<template>

  <body>
    <div class="main-container">
      <div class="title-text-container">
        <h1 class="">BIENVENIDO </h1>
        <h2 class="">{{ workerName }}</h2>
      </div>

      <div class="work-done-container card-body">
        <div class="mb-3" v-for="(servicePaid, index) in allServicePaid" :key="index">
          <div class="container">
            <div class="card" style="width: 250px">
              <img class="card-img-top img-done" src="../../../../assets/work_done.png" alt="Card image" />

              <div class="card-body text-center">
                <h4 class="card-title small">HAS TERMINADO UN SERVICIO</h4>
                <p class="card-text small mb-1">
                  Has recibido: <b>${{ servicePaid.cost }}</b> (COP) a tu cuenta
                </p>

                <p class="card-text small mb-1">
                  Contacto del cliente <b> {{ servicePaid.user_email }} </b>
                </p>
                <p class="mb-0 small ">Tu calificación fue: <b>{{ servicePaid.service_stars }}</b></p>
                <span class="date-text small fw-bold"></span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="service-assigned-container card-body p-5 d-flex justify-content-center">
        <div class="form-check mb-3" v-for="(service, index) in allService" :key="service.service_id">
          <div class="container">
            <div class="card" style="width: 250px">
              <img class="card-img-top worker-img" src="../../../../assets/workers.png" alt="Card image" />

              <div class="card-body text-center">
                <h4 class="card-title small">NUEVO TRABAJO ASIGNADO</h4>
                <p class="card-text small mb-1">
                  Te ha contratado en el oficio de: <b> {{ allWorks[index]}} </b>
                </p>
                <div class="dates d-flex text-center alignin-items-center justify-content-center mb-2">
                  <div class="dateBegin text-center badge bg-primary text-wrap m-2">
                    <p class="mb-0 ">Fecha inicio</p>
                    <span class="date-text small fw-light font-monospace ">{{
                      service[0].date_begin.substring(0, 10)
                    }}</span>
                  </div>
                  <div class="dateEnd text-center justify-content-center badge bg-primary text-wrap m-2">
                    <p class="mb-0 ">Fecha final</p>
                    <span class="date-text small fw-light font-monospace">{{
                      service[0].date_end.substring(0, 10)
                    }}</span>
                  </div>
                </div>
                <p class="card-text small mb-1">
                  Tu servicio tendrá un valor de: <b>${{ jobAssigned[index].cost_per_service }}</b> (COP) por hora
                </p>
                <p class="mb-0 small ">Contacto:</p>
                <span class="date-text small fw-bold">{{ service[0].user_email }}</span>
                <button class="btn btn-primary mt-2" :disabled="disabled"
                  @click="workDone(jobAssigned[index].job_offered_id, service[0].service_id)">
                  Terminado
                </button>
              </div>
            </div>
          </div>
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
  display: flex;
  overflow-y: scroll;

}

.main-container {}

/** container donde va el titulo BIENVENIDO {{worker_name}} */
.title-text-container {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/** container donde van los servicios asignados que el worker ya ha dado como terminados y el user ha pagado*/
.work-done-container {
  float: left;
  width: 33.33%;
  margin-right: 10px;
  /* top: 0;
  left: 150px; */
  width: 300px;
  max-height: 100%;
}

.img-done {
  width: 20px;
  height: 20px;
}

/**
Container donde va todos los servicios asignados al worker
*/
.service-assigned-container {
  margin-top: 100px;
  margin-right: 200px;
}

.bg-primary {
  color: rgb(58, 58, 58);
  background-color: rgba(238, 237, 237, 0.8) !important;
}

.worker-img {
  width: 50px;
  height: 50px;
}

.card {
  margin-top: 20px;
  display: flex;
  --bs-card-bg: rgba(238, 237, 237, 0.8);
  justify-content: center;
  align-items: center;
  width: 200px;
}
</style>