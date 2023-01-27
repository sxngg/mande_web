import { ref } from "vue";


const service = ref({
    service_id: 1,
    job_offered_id: ref(1),
    user_email: "",
    user_phone: "",
    cost: "",
    service_stars: ref(0),
    date_begin: "",
    date_end: "",
    paid: false,
    status: false
});

const useServiceState = () => {
  return {
    service,
  };
};
export default useServiceState;
