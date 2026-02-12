import { create } from "zustand";

export const useDashboardNotfiyStorage = create((set) => ({
  dashboardNotify: "",
  setDashboardNotify: (msg: string) => set({ dashboardNotify: msg }),
  resetDashboardNotify: () => set({ dashboardNotify: "" }),
}));
