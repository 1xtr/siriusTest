import {call, put, takeEvery} from 'redux-saga/effects';
import * as ImagesActions from './Images/types';
import axios from '../tools/axios-tool';
import {AxiosResponse} from 'axios';
import {SingleImage} from './Images/reducer';

export function* sagaWatcher() {
  yield takeEvery(ImagesActions.GET_IMAGES_START, sagaWorker);
}

function* sagaWorker() {
  const payload = yield call(fetchImages);
  yield put({type: ImagesActions.GET_IMAGES_SUCCESS, payload});
}

const fetchImages = async () => {
  try {
    const response: AxiosResponse = await axios.get('/photos/random?count=50');
    const data: any = response.data;
    return data.map(
      (image: any): SingleImage => ({
        id: image.id,
        isLiked: false,
        author: image.user.name,
        urls: {regular: image.urls.regular, thumb: image.urls.thumb},
        description: image.description,
      }),
    );
  } catch (e) {
    console.log(e);
  }
};
//
// const fetchImages = async () => {
//   const query = 'Airplane';
//   try {
//     const data: any = await axios.get(`search?query=${query}&per_page=50`);
//     console.log(data);
//     return data.photos;
//   } catch (e) {
//     console.log(e);
//   }
// };
