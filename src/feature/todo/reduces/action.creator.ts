import { createAction } from '@reduxjs/toolkit';
import { Task } from '../models/task';
import { actionTypes } from './action.types';

// Funcion de utilidad que crea un action creator
// Es otra forma de hacer programacion orientada a obj
// Forma más abreviada de lo que haciamos antes al crear accciones
export const loadActionCreator = createAction<Array<Task>>(actionTypes.load);
export const addActionCreator = createAction<Task>(actionTypes.add);
export const updateActionCreator = createAction<Task>(actionTypes.update);
export const deleteActionCreator = createAction<Task>(actionTypes.delete);
