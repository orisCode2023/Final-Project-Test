import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { apiRequestresWithBody, apiRequestresWithoutBody } from '../api/usersApiRequest';

const useAuthStore = create()(
    persist(
        set => ({
            user: null,
            users: [],
            loginStore: async(path, method, loginData) => {
                const userLoginData = await apiRequestresWithBody(path, method, loginData);
                set({user: userLoginData});
            },
            getUsersData: async(path, method) => {
                const usersData = await apiRequestresWithoutBody(path, method);
                set({users: usersData});
            },
            logout: async(path, method) => {
                await apiRequestresWithoutBody(path, method)
                set({user: null})
            }
        }),
        {name: 'authStore-storage'},
    ),
)

export default useAuthStore;