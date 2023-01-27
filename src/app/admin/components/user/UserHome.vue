<script setup>
import { getAllJobs } from "../../../../services/jobs-service.js";
import { ref } from "vue";
import { onMounted } from "vue";
import { getJobOfferedByWorkId } from "../../../../services/job-offered-service.js";
import useUserState from "../../composables/useUserState.js";
import useServiceState from "../../composables/useServiceState";
import {addService} from '../../../../services/service-service.js'
import {bussyWorker} from '../../../../services/worker-service.js'
import {bussyJobOffered} from "../../../../services/job-offered-service.js";

let works = ref([]);
let jobsOffered = ref([]);
let selectedWorkName = ref([]);
let units = ref([]);
let dateBegin = ref([]);
let dateEnd = ref([]);
const { user } = useUserState();
const {service} = useServiceState();

onMounted(async () => {
    const data = await getAllJobs();
    works.value = data;
});

const worker = {
    email: "",
    phone_number: ""
}

/** 
const service = ref({
    service_id: 1,
    job_offered_id: ref(1),
    user_email: user.value.email,
    user_phone: user.value.phone,
    cost: "",
    dateBegin: "",
    dateEnd: "",
});*/

const showJobsByWorkId = async (work) => {
    selectedWorkName = work.work_name;
    const data = await getJobOfferedByWorkId(work.work_id);
    jobsOffered.value = data;
};

const signJobOffered = (job, unts, dateBegin, dateEnd) => {
    service.value.job_offered_id = job.job_offered_id;
    console.log("JOB_OFFERED_ID", service.value.job_offered_id);
    service.value.date_begin = dateBegin;
    service.value.date_end = dateEnd;
    console.log("inicio", service.value.date_begin, "fin", service.value.date_end);
    service.value.cost = unts * job.cost_per_service;
    console.log(service.value.cost, job.worker_email);
    service.value.user_email = user.value.email;
    service.value.user_phone = user.value.phone;
    console.log(service.value.user_email, service.value.user_phone);
    console.log(service.value.service_stars);
    console.log(service.value.paid);
    console.log(service.value.status);
    addService(service.value);
    worker.email = job.worker_email;
    worker.phone_number = job.worker_phone_number;
    console.log(worker.email,worker.phone_number);
    console.log(worker);
    bussyWorker(worker);
    bussyJobOffered(service.value.job_offered_id);
};
</script>
<template>

    <body>
        <div class="
        chosee-work-container
        funkyradio
        card-body
        list-group-flush
        mx-auto
        card-body
      ">
            <div class="
          funkyradio-default
          card-body
          list-group-item-action list-group-item-light
          p-3
        ">
                <h1 class="h1 mb-1 text-center">BIENVENIDO</h1>
                <h4 class="text-uppercase fw-weight-bold mb-0 text-center">
                    Escoge el servicio que estás buscando
                </h4>
                <p class="text-gray fst-italic mb-0 text-center pb-4">
                    Hay varios trabajadores esperando por ofrecer sus servicios
                </p>
                <li class="
            d-flex
            rounded-0
            card-body
            align-items-center
            justify-content-between
          ">
                    <div class="mb-4 custom-control custom-radio" v-for="(work, index) in works" :key="work.work_id">
                        <input type="checkbox" v-bind:value="work.work_id" class="btn-check custom-control-input"
                            :id="`btn-check-${work.work_id}-${index}`" autocomplete="off"
                            @click="showJobsByWorkId(work)" />

                        <label class="btn btn-primary custom-control-label btn-trabajo"
                            :for="`btn-check-${work.work_id}-${index}`">{{ work.work_name }}
                        </label>
                    </div>
                </li>
            </div>
        </div>

        <div class="
        card
        mx-auto
        justify-content-center
        rounded
        border-0
        shadow-sm
        position-relative
      ">
            <div class="card-body p-5 d-flex">
                <div class="form-check mb-3" v-for="(job, index) in jobsOffered" :key="job.job_offered_id">
                    <!-- <input type="checkbox" :value="job.job_offered_id" class="form-check-input"
                        :id="`form-check-input-${job.job_offered_id}-${index}`" />-->
                    <div class="container">
                        <!--<label class="form-check-label container"
                            :for="`form-check-input-${job.job_offered_id}-${index}`">-->
                        <div class="card" style="width: 250px">
                            <img class="card-img-top worker-img" src="../../../../assets/workers.png"
                                alt="Card image" />

                            <div class="card-body text-center">
                                <h4 class="card-title small">{{ selectedWorkName }}</h4>
                                <p class="card-text small">
                                    Precio por hora: {{ job.cost_per_service }}
                                </p>
                                <p class="small mb-0">Contacto: <b>{{ job.worker_email }}</b></p>
                                <input class="horas form-control-sm .form-control-plaintext" type="number"
                                    v-model="units[index]" placeholder="# Horas deseadas" />
                                <p class="card-text small pb-0">
                                    Costo total por esas horas:
                                    {{ units[index] * job.cost_per_service }}
                                </p>
                                <div class="dates d-flex text-center alignin-items-center justify-content-center mb-2">
                                    <div class="dateBegin text-center">
                                        <p class="small  mb-0">Fecha de inicio</p>
                                        <input type="date" class="date" v-model="dateBegin[index]" />
                                        <span class="date-text">{{ dateBegin[index] }}</span>
                                    </div>
                                    <div class="dateEnd text-center justify-content-center">
                                        <p class="small mb-0 ">Fecha final</p>
                                        <input type="date" class="date" v-model="dateEnd[index]" />
                                        <span class="date-text">{{ dateEnd[index] }}</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary" @click="signJobOffered(job, units[index],
                                dateBegin[index], dateEnd[index])">
                                    Contratar
                                </button>
                            </div>
                        </div>
                        <!--
                            <h3>Oficio: {{ selectedWorkName }}</h3>
                            <h3>Precio por hora: {{ job.cost_per_service }}</h3>
                            <h3>Contacto: {{ job._email }}</h3>
                            <input class="horas form-control-sm .form-control-plaintext" type="number"
                                v-model="units[index]" placeholder="¿Cuántas horas deseas contratar?" />
                            <h3>Costo total por esas horas: {{ units[index]* job.cost_per_service }}</h3>
                            <input type="date" v-model="service.dateBegin"> {{ service.dateBegin }}
                            <input type="date" v-model="service.dateEnd"> {{ service.dateEnd }}-->
                        <!-- </label>-->
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
}

/**
*barra de escoger trabajo que buscas
*/

.chosee-work-container {
    width: 100vh;
    margin-left: 20px;
}

.list-group-item-light {
    background-color: rgba(238, 237, 237, 0.7);
    height: 100%;
}

.list-group-item-action:hover {
    background-color: rgba(0, 0, 0, 0.9);
}

/** 
* Listado de jobOffered
*/

.container {
    overflow: hidden;
    max-height: 550px;
}

.worker-img {
    width: 50px;
    height: 50px;
}

.horas {
    padding: 0;
    width: 130px;
    height: 7px;
}

.horas::placeholder {
    font-size: 12px;
}


.date {
    width: 25px;
}

.dateBegin {
    padding-right: 15px;
}

.date-text{
    font-size: 12px;
}

.card {
    margin: 20px;
    display: flex;
    --bs-card-bg: rgba(238, 237, 237, 0.8);
    justify-content: center;
    align-items: center;
    width: 700px;
}
</style>