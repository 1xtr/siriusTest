import * as ImagesActions from './types';
import {
  IImagesActions,
  ImagesActionTypes,
  IGetImagesSuccess,
  IRemovePhoto,
} from './actions';

//interface for unsplash
export interface SingleImage {
  id: string;
  isLiked: boolean;
  urls: {
    regular: string;
    thumb: string;
  };
  author: string;
  description: string;
}
// interface for pexels
// export interface SingleImage {
//   id: number;
//   width: number;
//   height: number;
//   url: string;
//   photographer: string;
//   photographer_url: string;
//   photographer_id: number;
//   avg_color: string;
//   src: {
//     original: string;
//     large2x: string;
//     large: string;
//     medium: string;
//     small: string;
//     portrait: string;
//     landscape: string;
//     tiny: string;
//   };
// }
export type IPhotos = SingleImage[] | [] | undefined;

export interface GalleryState {
  loading: boolean;
  allPhotos?: IPhotos;
  likedPhotos?: [] | SingleImage[];
}

const initialState: GalleryState = {
  loading: false,
  allPhotos: [],
  likedPhotos: [],
};

const handlers = {
  [ImagesActions.SET_LOADING]: (state: GalleryState): GalleryState => ({
    ...state,
    loading: true,
  }),
  [ImagesActions.GET_IMAGES_START]: (state: GalleryState): GalleryState => ({
    ...state,
    loading: true,
  }),
  [ImagesActions.GET_IMAGES_SUCCESS]: (
    state: GalleryState,
    action: IGetImagesSuccess,
  ): GalleryState => ({...state, allPhotos: action.payload, loading: false}),
  [ImagesActions.REMOVE_PHOTO]: (
    state: GalleryState,
    action: IRemovePhoto,
  ) => ({
    ...state,
    allPhotos: state.allPhotos?.filter(image => image.id !== action.payload),
    likedPhotos: state.likedPhotos?.filter(
      image => image.id !== action.payload,
    ),
  }),
  [ImagesActions.TOGGLE_LIKE]: (state: any, action: any) => {
    const temp = state.allPhotos.map((image: any) => {
      if (image.id === action.payload) {
        image.isLiked = !image.isLiked;
      }
      return image;
    });
    return {
      ...state,
      allPhotos: temp,
      likedPhotos: temp.filter((image: any) => image.isLiked),
    };
  },
  DEFAULT: (state: GalleryState) => state,
};

export const ImagesReducer: (
  state: GalleryState,
  action: ImagesActionTypes,
) => GalleryState = (state = initialState, action: ImagesActionTypes) => {
  const handler =
    handlers[action.type as keyof IImagesActions] || handlers.DEFAULT;
  return handler(state, action);
};
