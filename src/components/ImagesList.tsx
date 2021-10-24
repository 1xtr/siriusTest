import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ImageThumb} from './ImageThumb';
import {IPhotos} from '../redux/Images/reducer';
import {THEME} from '../theme';

type ImagesListProps = {
  data: IPhotos;
  onOpen: Function;
};

export const ImagesList = ({data, onOpen}: ImagesListProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageList}>
        <FlatList
          data={data}
          keyExtractor={image => image.id.toString()}
          renderItem={({item, index}) => (
            <ImageThumb image={item} index={index} onOpen={onOpen} />
          )}
          numColumns={4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: THEME.BG_COLOR_2,
  },
  imageList: {
    alignItems: 'flex-start',
  },
});
