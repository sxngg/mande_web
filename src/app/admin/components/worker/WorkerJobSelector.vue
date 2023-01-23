<script>
import { getAllJobs } from '../../../../services/jobs-service.js'
let works = [];

export default {
  name: "worker-job-selector",
  data() {
    return {
      works,
    }

  },
  async mounted() {
    this.works = await getAllJobs();
  },
  methods: {
    checkedWork(work) {
      console.log('seleccionado', work);
      this.changeIsActive(work);
    },
    changeIsActive(work) {
      if (work.is_active) {
        console.log('estaba en true')
        work.is_active = false;
      }
      else if (!work.is_active) {
        console.log('estaba en false')
        work.is_active = true;
      }
    }
  }
}
</script> 

<template>

  <body>
    <div class="card shadow border-0 mb-5">
      <div class="card-body p-5 ">
        <h2 class="h4 mb-1">TRABAJOS QUE PUEDES OFRECER</h2>
        <p class="small text-muted font-italic mb-4">Escoge que servicios puedes ofrecer en nuestra página</p>

        <ul class="list-group">
          <li class="list-group-item rounded-0 align-items-center text-center justify-content-between">
            
            <div class="col-md-6 mb-4 d-flex custom-control custom-radio" v-for="(work, index) in works" :key="work.work_id">
              <input type="checkbox" v-bind:value="work.work_id" class="btn-check custom-control-input"
                :id="`btn-check-${work.work_id}-${index}`" autocomplete="off" @change="checkedWork(work)">
              <label class="btn btn-primary custom-control-label" :for="`btn-check-${work.work_id}-${index}`">{{ work.work_name }}</label>
              <span class="description small font-italic text-muted">{{ work.description }}</span>

              <div class="additional-input" v-show="work.is_active">
                <input type="text" placeholder="Costo por hora (COP)" />
                <button class="btn" type="submit"> Agregar </button>
              </div>
            </div>

          </li>
        </ul>

      </div>
    </div>
  </body>

</template>


<style scoped>
body {
  background: url('../../../../assets/background.jpg');
  background-size: cover;
  max-height: 100%;
  display: flex;
  justify-content: center;

}

.list-group .d-flex .description {
  display: block;
}


.card{
  margin-top: 80px;
  display: flex;
  --bs-card-bg: rgba(238, 237, 237, 0.8);
  justify-content: center;
  align-items: center;
  width: 700px;
  border: 1px solid red;
}

.additional-input{
  display: flex;
  padding-left: 10px;
}

.list-group{
  width: 560px;
}
</style>