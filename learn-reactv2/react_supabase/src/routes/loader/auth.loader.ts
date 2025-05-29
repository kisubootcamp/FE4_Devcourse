import supabase from "../../utils/supabase";
import { useAuthStore } from "../../stores/authStore";

export const fetchUserData = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const setLogin = useAuthStore.getState().setLogin;
    setLogin(session);
  }
};
