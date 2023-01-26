import { ref } from "vue";

const user = ref({
  email: "",
  phone: "",
});

const useUserState = () => {
  return {
    user,
  };
};
export default useUserState;
