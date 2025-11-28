import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IUserAuthStore {
  isLoggedIn: boolean;
  setLoginRemember: () => void;
  logout: () => void;
}

export const useUserAuthStore = create<IUserAuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,

      setLoginRemember: () => set({ isLoggedIn: true }),

      logout: () => {
        localStorage.removeItem("user-auth-storage");
        set({ isLoggedIn: false });
      },
    }),
    {
      name: "user-auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);
