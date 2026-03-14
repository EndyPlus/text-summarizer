import { DATE_OPTIONS } from "@/src/helpers/utils/vars";
import { create } from "zustand";

interface DateFilterStore {
  currentDate: string;
  setCurrentDate: (dateOption: string) => void;
}

export const useDateFilterStorage = create<DateFilterStore>()((set) => ({
  currentDate: DATE_OPTIONS.last7Days,
  setCurrentDate: (dateOption) => set({ currentDate: dateOption }),
}));
