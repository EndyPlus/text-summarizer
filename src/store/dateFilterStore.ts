import { create } from "zustand";
import { DATE_OPTIONS } from "../utils/vars";

export const useDateFilterStorage = create((set) => ({
  currentDate: DATE_OPTIONS.last7Days,
  setCurrentDate: (dateOption: string) => set({ currentDate: dateOption }),
}));
