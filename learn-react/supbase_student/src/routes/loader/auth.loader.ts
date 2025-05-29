import { useAuthStore } from "../../stores/authoStore";
import supabase from "../../utils/supabase";

export const fetchUserData = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const setLogin = useAuthStore.getState().setLogin;
    setLogin(session);
  }
};
