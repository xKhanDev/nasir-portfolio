import {create} from "zustand";

const useAuthStore = create((set)=>({
    accessToken: null,
    user: null,
    setAccessToken: (token) => set({ accessToken: token }),
    setUser: (user) => set({ user })
}))

export default useAuthStore

// TO GET THE ABOVE STATE
// const accessToken = useAuthStore((state) => state.accessToken);