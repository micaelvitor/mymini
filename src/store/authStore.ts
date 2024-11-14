import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      login: (email, password) => {
        if (email === 'admin@admin.com.br' && password === 'admin') {
          set({ isAuthenticated: true });
          localStorage.setItem('auth-expiration', `${new Date().getTime() + 24 * 60 * 60 * 1000}`);
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false });
        localStorage.removeItem('auth-expiration');
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        const currentTime = new Date().getTime();
        const expirationTime = parseInt(localStorage.getItem('auth-expiration') || '0', 10);
        if (expirationTime < currentTime) {
          state?.logout();
        }
      },
    }
  )
);