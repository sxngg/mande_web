import { ref } from 'vue'

class AuthServiceWorker {
    constructor() {
        this.jwt = ref('');
        this.error = ref('');
    }

    getJwt() {
        return this.jwt;
    }

    async login(em, pho) {
        try {
            const res2 = await fetch('http://localhost:3000/mande/auth/worker', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: em,
                    phone_number: pho
                })
            })
            const response = await res2.json()
            if ('token' in response) {
                this.jwt = response.token
                return true
            } else {
                this.error = "login failed"
                return false
            }

        } catch (error) {
            this.error.value = "paico"
            return false    
        }
    }
}
export default AuthServiceWorker;