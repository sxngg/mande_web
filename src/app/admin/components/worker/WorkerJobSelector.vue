<template>
  <body>
    <div class="card shadow border-0 mb-5">
      <h1>email: {{ worker.email }} contraseña: {{ worker.phone }}</h1>
      <div class="card-body p-5">
        <h2 class="h4 mb-1 text-center">TRABAJOS QUE PUEDES OFRECER</h2>
        <p class="small text-muted font-italic mb-4 text-center">
          Escoge que servicios puedes ofrecer en nuestra página
        </p>
        <ul class="list-group">
          <li
            class="
              list-group-item
              rounded-0
              align-items-center
              justify-content-between
            "
          >
            <div
              class="col-md-6 mb-4 custom-control custom-radio"
              v-for="(work, index) in works"
              :key="work.work_id"
            >
              <div class="d-flex">
                <input
                  type="checkbox"
                  v-bind:value="work.work_id"
                  class="btn-check custom-control-input"
                  :id="`btn-check-${work.work_id}-${index}`"
                  autocomplete="off"
                  @change="checkedWork(work)"
                />
                <label
                  class="btn btn-primary custom-control-label btn-trabajo"
                  :for="`btn-check-${work.work_id}-${index}`"
                  >{{ work.work_name }}</label
                >
                <div class="additional-input" v-show="work.is_active">
                  <input
                    class="form-control-sm .form-control-plaintext"
                    type="number"
                    v-model="priceForHour"
                    placeholder="Costo por hora (COP)"
                  />
                  <button
                    class="btn btn-agregar"
                    :disabled="!priceForHour"
                    type="submit"
                  >
                    Agregar
                  </button>
                </div>
              </div>
              <span class="description small font-italic text-muted">{{
                work.description
              }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script setup>
import { onMounted } from "vue";
import { getAllJobs } from "../../../../services/jobs-service.js";
import useWorkerState from "../../composables/useWorkerState";
import {ref} from 'vue'
const { worker } = useWorkerState();
/**
 * Arrays
 */
let works = ref([]);
/**
 * Number
 */
const priceForHour = null;
/**
 * Functions
 */

 onMounted(async () => {
  const data = await getAllJobs();
  works.value = data;
});

const checkedWork = (work) => {
  console.log("seleccionado", work);
  changeIsActive(work);
};
const changeIsActive = (work) => {
  if (work.is_active) {
    console.log("estaba en true");
    work.is_active = false;
  } else if (!work.is_active) {
    console.log("estaba en false");
    work.is_active = true;
  }
};
</script>

<style scoped>
/** BODY */
body {
  background: url("../../../../assets/background.jpg");
  background-size: cover;
  max-height: 100%;
  display: flex;
  justify-content: center;
}

/** BOTONES */

/** Botón de trabajo */

/** Botón de agregar trabajo */
.btn-agregar {
  color: white;
  background-color: rgb(0, 0, 0);
  border: none;
}

.btn-agregar:hover {
  color: whitesmoke;
  background-color: rgb(49, 49, 49);
}

/** Toda la tarjeta de trabajos por ofrecer */
.card {
  margin-top: 80px;
  display: flex;
  --bs-card-bg: rgba(238, 237, 237, 0.8);
  justify-content: center;
  align-items: center;
  width: 700px;
  border: 1px solid red;
}

.additional-input {
  display: flex;
  padding-left: 10px;
}

.list-group {
  width: 560px;
}
</style>
