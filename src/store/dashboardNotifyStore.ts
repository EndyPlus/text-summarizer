import { create } from "zustand";

interface DashboardNotifyState {
  dashboardNotify: string;
  setDashboardNotify: (msg: string) => void;
  resetDashboardNotify: () => void;
}

export const useDashboardNotifyStorage = create<DashboardNotifyState>()(
  (set) => ({
    dashboardNotify: "",
    setDashboardNotify: (msg) => set({ dashboardNotify: msg }),
    resetDashboardNotify: () => set({ dashboardNotify: "" }),
  }),
);
