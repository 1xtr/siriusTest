import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import * as photoSelectors from '../redux/Images/selectors';
import {ImagesList} from '../components/ImagesList';
import {SingleImage} from '../redux/Images/reducer';

export const FavoritesScreen = ({navigation}: any) => {
  const likedPhotos = useSelector(photoSelectors.liked);
  const openImageHandler = (image: SingleImage) => {
    navigation.navigate('SingleImage', image);
  };

  if (!likedPhotos?.length) {
    return (
      <View style={styles.container}>
        <Text>No liked photos yet =)</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImagesList data={likedPhotos} onOpen={openImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
