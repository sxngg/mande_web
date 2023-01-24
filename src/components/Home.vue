<script >
export default {
    name: "Home"
}

</script>

<template>

    <body class="body-home">

        <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
            
            <main role="main" class="inner cover container-main">
                <h1 class="cover-heading">CONECTA AHORA</h1>
                <p class="lead">Somos un intermediario entre tú y el trabajador que estás necesitando. <br>
                    Tenemos profesionales esperando por ti  </p>
                <p class="registrate"> REGISTRATE </p>
                <p class="como"> como </p>
                <p class="lead">
                    <RouterLink class="btn btn-lg btn-secondary register-worker-button" to="/worker-register">
                        Trabajador</RouterLink>
                    <RouterLink class="btn btn-lg btn-secondary register-user-button" to="/user-register">Usuario
                    </RouterLink>
                   
                </p>
                <p class="registrate"> INGRESA </p>
                <p class="como"> como </p>
                <p class="lead"> 
                    <RouterLink class="btn btn-lg btn-secondary login-worker-button" to="/worker-login">Trabajador
                        </RouterLink>
                    <RouterLink class="btn btn-lg btn-secondary login-user-button" to="/user-login">Usuario
                    </RouterLink>
                </p>
                
            </main>
            
            
        </div>
        <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p> Proyecto universitario <br> <b>Universidad del Valle</b></p>
                </div>
            </footer>
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

.h-100{
    height: auto !important;
}
.p-3{
    padding: 50px !important;
}

.cover-heading {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.registrate {
    margin-top: 35px;
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
.register-user-button,
.login-worker-button,
.login-user-button {    
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
}

.btn-secondary:hover{
    color: rgb(255, 255, 255);
    text-shadow: none;
    /* Prevent inheritance from `body` */
    background-color: rgb(49, 49, 49);
}



.btn-secondary,
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

body{
    background: url(../assets/background.jpg);
    background-size: cover;
    height: 100vh;
}

.body{
    display: -ms-flexbox;
    display: flex;
    color: #fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
    min-height: calc(100vh - 50px);
    
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

 footer{
    padding-top: 10px;
    height: 50px;
 }
.mastfoot {
    margin-top: 20px;
    display: flex;
    color: rgba(255, 255, 255, .5);
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>