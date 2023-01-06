<script >
export default {
    name: "Home"
}

</script>

<template>

    <body class="body-home">

        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="masthead mb-auto">
                <div class="inner">
                    <h3 class="masthead-brand">MANDE</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <RouterLink class="nav-link active" to="/login-worker">Inicia sesión como trabajador</RouterLink>
                        <RouterLink class="nav-link active" to="/user-login">Inicia sesión como usuario</RouterLink>
                    </nav>
                </div>
            </header>
            <main role="main" class="inner cover container-main">
                <h1 class="cover-heading">CONECTA AHORA</h1>
                <p class="lead">Somos un intermediario entre tú y el trabajador que estás necesitando. <br>
                    Tenemos profesionales esperando por ti  </p>
                <p class="registrate"> REGISTRATE </p>
                <p class="como"> como </p>
                <p class="lead">
                    <RouterLink class="btn btn-lg btn-secondary register-worker-button" to="/registerWorker">Como
                        trabajador</RouterLink>
                    <RouterLink class="btn btn-lg btn-secondary register-user-button" to="/registerUser">Como usuario
                    </RouterLink>
                </p>
            </main>

            <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p> Proyecto universitario <br> <b>Universidad del Valle</b></p>
                </div>
            </footer>
        </div>
    </body>
</template>

<style scoped>
a,
a:focus,
a:hover {
    color: #fff;
}

.lead {
    display: flex;
    justify-content: center;
    text-align: center;
}

.cover-heading {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.registrate {
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 15px;
    font-size: 35px;
}

.como {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
}

.register-worker-button,
.register-user-button {
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
    color: #333;
    text-shadow: none;
    /* Prevent inheritance from `body` */
    background-color: #fff;
    border: .05rem solid #fff;
}


/*
 * Base structure
 */

.body-home{
    background: url(../assets/background.jpg);
    background-size: cover;
    height: 100vh;
}

.body-home{
    display: -ms-flexbox;
    display: flex;
    color: #fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {

    max-width: 42em;
}


/*
 * Header
 */
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
        float: right;
    }
}


/*
 * Cover
 */
.cover {
    padding: 0 1.5rem;
}

.cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
}


/*
 * Footer
 */
.mastfoot {
    display: flex;
    color: rgba(255, 255, 255, .5);
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
}
</style>