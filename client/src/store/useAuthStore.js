import { set } from 'mongoose';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { apiRequestresWithBody } from '../api/usersApiRequest';

const useAuthStore = create()(
    persist(
        set({
            user: null,
            loginStore: async (path, method, loginData) => {
                const userLoginData = await apiRequestresWithBody(path, method, loginData);
                set({users: userLoginData});
            },
        }),
        {name: 'authStore-storage'},
    ),
)

export default useAuthStore;