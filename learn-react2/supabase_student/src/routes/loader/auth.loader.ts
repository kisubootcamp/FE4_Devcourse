import { useAuthStore } from '../../stores/authStore';
import supabase from '../../utils/supabase';

export const fetchUserData = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const setLogin = useAuthStore.getState().setLogin;
    setLogin(session);
  }
};

// loader
// 주스탄드 값 세팅 된 후 라우트 전환 이루어진다.
