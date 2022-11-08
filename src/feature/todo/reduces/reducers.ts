import { createReducer } from '@reduxjs/toolkit';
import { Task } from '../models/task';
import * as ac from './action.creator';

const initialState: Array<Task> = [];

// Se escribe como la forma anterior que usabamos (devuelven y reciben lo mismo)
export const TaskReducer = createReducer(initialState, (builder) => {
    // state se deja aunque no se use y por eso se usa el _
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);

    builder.addCase(ac.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );

    builder.addCase(ac.deleteActionCreator, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );

    // Muy importante que no falte nunca. Siempre es asi el caso por defecto
    builder.addDefaultCase((state) => state);
});
