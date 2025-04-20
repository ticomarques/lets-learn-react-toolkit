import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counter-slice';
import { apiSlice } from '../features/dogs/dogs-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

console.log("store.dispatch: ",  store.dispatch);
console.log("store.getState: ",  store.getState);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
