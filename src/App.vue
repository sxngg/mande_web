<template>
  <header class="masthead mb-auto">
    <div class="inner">   
      <nav class="nav nav-masthead justify-content-center navbar-dark bg-dark">
        <RouterLink class="nav-link active" to="/">Home</RouterLink>
        <RouterLink class="nav-link active" to="/worker-login">Inicia sesión como trabajador</RouterLink>
        <RouterLink class="nav-link active" to="/user-login">Inicia sesión como usuario</RouterLink>
      </nav>
    </div>

    
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>
.bg-dark {
    background-color: rgba(0, 0, 0, .8) !important;
    --bs-bg-opacity: .5;

}

.nav-link{
  margin-right: 15px;
}

.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link+.nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }

  .nav-masthead {
    float: center;
  }
}
</style>
