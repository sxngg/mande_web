import { ref } from "vue";


const service = ref({
    service_id: 4,
    job_offered_id: ref(1),
    user_email: "",
    user_phone: "",
    cost: "",
    service_stars: ref(0),
    date_begin: "",
    date_end: "",
    paid: false,
    done: false
});

const useServiceState = () => {
  return {
    service,
  };
};
export default useServiceState;
