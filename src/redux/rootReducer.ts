import {combineReducers} from '@reduxjs/toolkit';
import {ImagesReducer} from './Images/reducer';

export const rootReducer = combineReducers({
  gallery: ImagesReducer,
});
