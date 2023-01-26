import { ref } from "vue";


const service = ref({
    service_id: 1,
    job_offered_id: ref(1),
    user_email: "",
    user_phone: "",
    cost: "",
    dateBegin: "",
    dateEnd: "",
});

const useServiceState = () => {
  return {
    service,
  };
};
export default useServiceState;
