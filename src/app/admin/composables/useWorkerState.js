import { ref } from "vue";

const worker = ref({
  email: "",
  phone: "",
});

const useWorkerState = () => {
  return {
    worker,
  };
};
export default useWorkerState;
