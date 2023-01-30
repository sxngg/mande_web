<script setup>
import { useRouter } from "vue-router";
import useUserState from "../../composables/useUserState.js";
import { getServiceByUserKey } from '../../../../services/service-service.js';
import { ref } from 'vue';
import { onMounted } from "vue";
import { getJobOfferedByJobOfferedId } from '../../../../services/job-offered-service.js'
import { getWorkerByEmailAndPhone } from '../../../../services/worker-service.js';
import { getWorkNameByWorkId } from '../../../../services/work-service.js'
import { updateStarsService } from '../../../../services/service-service.js';
import { createToaster } from "@meforma/vue-toaster";
import {updatePaidService} from '../../../../services/service-service.js';

const toaster = createToaster({});
const { user } = useUserState();
const $router = useRouter();
const stars = ref([]);
let disabled = ref(false);
/**
 * Nos obtiene todos los servicios por un usuario
 */
const allServiceDoneByUser = ref([]);

/**
 * Necesitamos recorrer todos los servicios de un usuario y obtener los job_offered_id para saber los datos del trabajador y los
 * almacenamos en allJobOfferedIds
 */
const allJobOfferedIds = ref([]);

/**
 * Recibimos cada jobOffered en jobOfferedAssigned y luego lo pusheamos a allJobOffered
 */
const jobOfferedAssigned = ref();
const allJobOffered = ref([]);

/**
 * Todos los trabajadores
 */
const workerName = ref();
const allWorkersName = ref([]);

/**
 * Para saber el nombre del trabajo
 */
const workName = ref();
const allWorksName = ref([]);

onMounted(async () => {
    const data = await getServiceByUserKey(user);
    allServiceDoneByUser.value = data;
    console.log(allServiceDoneByUser.value);

    allServiceDoneByUser.value.forEach(job => {
        allJobOfferedIds.value.push(job.job_offered_id)
        console.log('ids', allJobOfferedIds.value);
    })

    for (const id of allJobOfferedIds.value) {
        const data = await getJobOfferedByJobOfferedId(id);
        jobOfferedAssigned.value = data;
        if (jobOfferedAssigned.value.length >= 1) {
            allJobOffered.value.push(jobOfferedAssigned.value[0]);

        }

    }
    getAllWorkers();
    getWorkName();

});


const getAllWorkers = async () => {
    for (const job of allJobOffered.value) {
        const worker = {
            email: job.worker_email,
            phone_number: job.worker_phone_number
        }
        const data = await getWorkerByEmailAndPhone(worker);
        workerName.value = data[0].worker_name;
        allWorkersName.value.push(workerName.value);
    }
}

const getWorkName = async () => {
    for (const job of allJobOffered.value) {
        const data = await getWorkNameByWorkId(job.work_id);
        workName.value = data[0].work_name;
        allWorksName.value.push(workName.value);
    }
}

const goToUserHome = () => {
    $router.push("/user-home");
}

const pay = (service_id, stars) => {
    disabled.value = true;
    console.log('stars',stars)
    console.log('id',service_id);
    updateStarsService(service_id, stars);
    toaster.show('Has pagado con éxito, gracias por usar nuestra plataforma', {
        duration: 1000,
        type: "success",
        position: "top",
        maxToasts: 1,

    });
    updatePaidService(service_id);
}

</script>

<template>

    <body>
        <div class="goToPayment d-flex justify-content-end">
            <button class="btn btn-primary" @click="goToUserHome"> Volver</button>
        </div>
        <div>
            <h2 class="h2 d-flex justify-content-center">Servicios por pagar</h2>
        </div>

        <div class="work-done-container card-body">
            <div class="mb-3" v-for="(servicePaid, index) in allServiceDoneByUser" :key="index">
                <div class="container">
                    <div class="card" style="width: 250px">
                        <img class="card-img-top img-done" src="../../../../assets/work_done.png" alt="Card image" />

                        <div class="card-body text-center">
                            <h4 class="card-title small text-uppercase"> {{ allWorkersName[index] }} HA TERMINADO UN
                                SERVICIO
                            </h4>
                            <p class="card-text small mb-1">
                                Como <b> {{ allWorksName[index] }} </b>
                            </p>
                            <p class="card-text small mb-1">
                                Debes pagar: <b>${{ servicePaid.cost }}</b>
                            </p>
                            <p class="mb-0 small ">Califica tu experiencia con el servicio: <b>{{}}</b></p>
                            <input class="form-control-sm .form-control-plaintext" type="number" v-model="stars[index]"
                                placeholder="Califica del 1-5" /> <br>
                            <button class="btn btn-primary btn-sm mt-2" @click="pay(servicePaid.service_id,stars[index])"
                                type="submit" :disabled="!stars || disabled">Calificar y pagar </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>


</template>

<style scoped>
body {
    background: url("../../../../assets/background.jpg");
    background-size: cover;
    height: 100vh;
    overflow-y: scroll;
}

/** container donde van los servicios que el trabajador terminó y el usuario debe calificar y pagar*/
.work-done-container {
    display: flex;
    justify-content: center;

}

.img-done {
    width: 20px;
    height: 20px;
}

.card {
    margin-top: 20px;
    display: flex;
    --bs-card-bg: rgba(238, 237, 237, 0.8);
    justify-content: center;
    align-items: center;
    width: 200px;
}

/** container donde van los servicios ya pagados y calificados, osea el historial de todos los servicios
 */
.work-finish-container {
    float: right;
    width: 33.33%;
    margin-right: 10px;
    /* top: 0;
  left: 150px; */
    width: 300px;
    max-height: 100%;
}
</style>