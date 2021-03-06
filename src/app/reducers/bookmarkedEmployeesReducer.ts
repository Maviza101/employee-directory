import { createReducer, on } from '@ngrx/store';

import {
    bookmarkEmployee,
    unbookmarkEmployee,
    resetBookmarkedEmployees
} from '../actions/bookmarkedEmployeesActions';

const initialState: IBookmarkedEmployeesState = {};

const reduceBookmarkedEmployeesState = createReducer<IBookmarkedEmployeesState>(
    initialState,
    on(bookmarkEmployee, (state, action) => {
        const { payload } = action;
        const newState = {
            ...state,
            [payload.id]: payload
        };
        return newState;
    }),
    on(unbookmarkEmployee, (state, action) => {
        const newState = { ...state };
        const { id } = action.payload;
        delete newState[id];
        return newState;
    }),
    on(resetBookmarkedEmployees, () => initialState)
);

export function bookmarkedEmployeesReducer(state: IBookmarkedEmployeesState, action: GenericAction) {
    return reduceBookmarkedEmployeesState(state, action);
}
