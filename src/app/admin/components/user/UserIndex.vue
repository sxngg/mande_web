<template>

  <body class="bod">
    <h1> USER INDEX</h1>

    <div class="row">
      <div class="col-md-4">
        <div class="card bg-primary">
          <div class="card-header">
            <h3 v-for="(user, index) in users" :key="index"> {{ user.email }} </h3>
            <!-- <h3 v-for="(pr,index) in prueba" :key="index">{{ pr }}</h3> -->
          </div>
        </div>
      </div>

    </div>
  </body>


</template>

<script>
import { ref } from 'vue';
let users = ref([]);
const prueba = ref(["a", "b"]);
import userService from '../../../../services/user-service'
export default {
  name: "user-index",
  data() {
    return {
      users,
      prueba
    }
  },
  async mounted() {
    this.users = await userService.getUser();
    //console.log(this.users)
  }
}
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: chartreuse;
}
</style>
