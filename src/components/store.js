import { create } from "zustand";

const useColorStore = create((set) => ({
  score: 0,
  currentAnswer: null,
  restart: () => set(() => ({score: 0})),
  levelUp: () => set((state) => ({score: state.score + 1}))
}))

export default useColorStore;