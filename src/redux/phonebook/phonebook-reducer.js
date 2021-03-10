import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const items = createReducer([], {
    [actions.fetchContactSuccess]: (_, { payload }) => payload,
    [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
    [actions.removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
    [actions.cahngeFilter]: (state, {payload}) => payload
})

export default combineReducers({
    items,
    filter
})