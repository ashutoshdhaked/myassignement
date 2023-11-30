import { configureStore } from '@reduxjs/toolkit';
import { StudentApi } from './features/StudentSlice';
export const store = configureStore ({
    reducer: {
       [StudentApi.reducerPath] : StudentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StudentApi.middleware),


})

