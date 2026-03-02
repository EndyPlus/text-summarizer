import { create } from "zustand";
import { DATE_OPTIONS } from "../utils/vars";

interface DateFilterStore {
  currentDate: string;
  setCurrentDate: (dateOption: string) => void;
}

export const useDateFilterStorage = create<DateFilterStore>()((set) => ({
  currentDate: DATE_OPTIONS.last7Days,
  setCurrentDate: (dateOption) => set({ currentDate: dateOption }),
}));
