import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiRequestresGet, apiRequestresPost } from "../api/apiRequest";

const launchersStore = create()(
  persist(
    (set) => ({
      launchers: [],
      getLaunchers: async () => {
        const {data} = await apiRequestresGet("/api/launchers", "GET");
        set({ launchers: data });
      },
      addLauncher: async (data) => {
        await apiRequestresPost("/api/launchers", 'POST', data);
      }
    }),
    { name: "launchers-storage" },
  ),
)
export default launchersStore;