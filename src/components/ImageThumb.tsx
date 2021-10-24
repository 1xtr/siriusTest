import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {SingleImage} from '../redux/Images/reducer';
import {MaterialIcon} from './Icon';

type ImageThumbProps = {
  index?: number;
  image: SingleImage;
  onOpen: Function;
};

export const ImageThumb = ({image, onOpen}: ImageThumbProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(image)}>
      <View style={[styles.imageContainer]}>
        <ImageBackground
          source={{uri: image.urls.thumb}}
          style={styles.image}
          resizeMode={'cover'}>
          {image.isLiked ? (
            <View style={styles.likeBadge}>
              <MaterialIcon size={'medium'} name={'heart'} color={'red'} />
            </View>
          ) : null}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: 81,
    height: 81,
    marginRight: 5,
    marginBottom: 7,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  likeBadge: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
});
