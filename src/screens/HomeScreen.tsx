import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImages} from '../redux/Images/actions';
import {THEME} from '../theme';
import * as gallerySelectors from '../redux/Images/selectors';
import {IPhotos, SingleImage} from '../redux/Images/reducer';
import {ImagesList} from '../components/ImagesList';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const openImageHandler = (image: SingleImage) => {
    navigation.navigate('SingleImage', image);
  };

  const photos: IPhotos = useSelector(gallerySelectors.photos);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (!photos?.length) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={THEME.MAIN_TEXT_COLOR} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImagesList data={photos} onOpen={openImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
});

export default HomeScreen;
