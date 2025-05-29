import { useAuthStore } from '../store/authStore';
import supabase from '../utils/supbase';

export const fetchUserData = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const setLogin = useAuthStore.getState().setLogin;
    setLogin(session);
  }
};
