import { create } from 'zustand';
import { apiRequestresGet } from '../api/apiRequest';

const useLaunchers = create((set) => ({
    launchers: [],
    getLaunchers: () => set(async () => ({launchers: await apiRequestresGet("/api/launchers", "GET")}))
}))

export default useLaunchers;