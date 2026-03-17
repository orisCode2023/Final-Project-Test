import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { apiRequestresGet, apiRequestresPost } from "../api/apiRequest";
import { apiRequestresWithBody, apiRequestresWithoutBody } from "../api/usersApiRequest";

const launchersStore = create()(
  persist(
    (set) => ({
      launchers: [],
      getLaunchers: async () => {
        const {data} = await apiRequestresWithoutBody("/api/launchers", "GET");
        set({ launchers: data });
      },
      addLauncher: async (data) => {
        await apiRequestresWithBody("/api/launchers", 'POST', data);
      }
    }),
    { name: "launchers-storage" },
  ),
)
export default launchersStore;