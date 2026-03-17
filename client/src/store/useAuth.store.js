import { set } from 'mongoose';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { apiRequestresWithBody } from '../api/usersApiRequest';

const usersStore = create()(
    persist(
        set({
            users: null,
            loginStore: async (path, method, loginData) => {
                const user = await apiRequestresWithBody(path, method, loginData);
                set({users: user});
            },
        }),
        {name: 'userLogin-storage'},
    ),
)

export default usersStore;