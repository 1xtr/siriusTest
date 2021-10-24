import * as ImagesActions from './types';
import {AnyAction} from '@reduxjs/toolkit';
import {SingleImage} from './reducer';

export type IImagesActions = {
  SET_LOADING: string;
  GET_IMAGES_START: string;
  GET_IMAGES_SUCCESS: string;
  REMOVE_PHOTO: string;
  TOGGLE_LIKE: string;
};

export interface ISet_Loading extends AnyAction {
  type: IImagesActions['SET_LOADING'];
}

export interface IGetImagesStart extends AnyAction {
  type: IImagesActions['GET_IMAGES_START'];
}

export interface IGetImagesSuccess extends AnyAction {
  type: IImagesActions['GET_IMAGES_SUCCESS'];
  payload?: [] | SingleImage[];
}

export interface IToggleLike extends AnyAction {
  type: IImagesActions['TOGGLE_LIKE'];
  payload?: string;
}

export interface IRemovePhoto extends AnyAction {
  type: IImagesActions['REMOVE_PHOTO'];
  payload?: string;
}

export type ImagesActionTypes =
  | ISet_Loading
  | IGetImagesStart
  | IGetImagesSuccess
  | IRemovePhoto
  | IToggleLike;

export const fetchImages = (): IGetImagesSuccess => ({
  type: ImagesActions.GET_IMAGES_START,
});

export const setLoading = () => ({
  type: ImagesActions.SET_LOADING,
});

export const toggleLike = (id: string) => ({
  type: ImagesActions.TOGGLE_LIKE,
  payload: id,
});

export const removePhoto = (id: string) => ({
  type: ImagesActions.REMOVE_PHOTO,
  payload: id,
});
