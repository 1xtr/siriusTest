import {RootState} from '../store';
import {GalleryState} from './reducer';

export const all = (state: RootState): GalleryState => state.gallery;

export const photos = (state: RootState) => all(state).allPhotos;
export const liked = (state: RootState) => all(state).likedPhotos;
