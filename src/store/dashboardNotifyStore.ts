import { create } from "zustand";

interface DashboardNotifyState {
  isDashboardError: boolean;
  dashboardNotify: string;
  setDashboardNotify: (msg: string) => void;
  setDashboardError: (bool: boolean) => void;
  resetDashboardNotify: () => void;
}

export const useDashboardNotifyStorage = create<DashboardNotifyState>()(
  (set) => ({
    isDashboardError: false,
    dashboardNotify: "",
    setDashboardNotify: (msg) => set({ dashboardNotify: msg }),
    setDashboardError: (bool) => set({ isDashboardError: bool }),
    resetDashboardNotify: () =>
      set({ dashboardNotify: "", isDashboardError: false }),
  }),
);
