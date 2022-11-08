import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from '../../feature/todo/reduces/reducers';

// Se le pasa un obj de config. Lo que va entre {} son las ramas de estado
export const appStore = configureStore({
    reducer: { tasks: taskReducer },
});

// Lo ponemos siempre, lo vamos a usar despues
export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
