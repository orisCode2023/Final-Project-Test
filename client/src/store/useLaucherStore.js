import { create } from 'zustand'

const useLaunchers = create((set) => ({
    launchers: [],
    getLaunchers: () => set((state) => ({launchers: state.launchers}))
}))

export default useLaunchers;