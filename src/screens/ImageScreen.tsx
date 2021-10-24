import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {MaterialIcon} from '../components/Icon';
import {useDispatch, useSelector} from 'react-redux';
import {removePhoto, toggleLike} from '../redux/Images/actions';
import * as photoSelectors from '../redux/Images/selectors';

export const ImageScreen = ({navigation, route}: any) => {
  const image = route.params;
  const dispatch = useDispatch();
  const isLiked = useSelector(photoSelectors.liked)?.some(
    photo => photo.id === image.id,
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: image.author,
    });
  }, [image.author, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{uri: image.urls.regular}}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.bottomControls}>
        <TouchableOpacity
          style={[styles.buttons, styles.buttonsTop]}
          onPress={() => {
            dispatch(toggleLike(image.id));
          }}>
          {isLiked ? (
            <View style={styles.btn}>
              <MaterialIcon size={'medium'} name={'heart'} color={'#F00'} />
              <Text style={styles.text}>Remove from favorites</Text>
            </View>
          ) : (
            <View style={styles.btn}>
              <MaterialIcon
                size={'medium'}
                name={'heart-outline'}
                color={'#000'}
              />
              <Text style={styles.text}>Add to favorites</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, styles.buttonsBottom]}
          onPress={() => {
            navigation.navigate('Tab');
            dispatch(removePhoto(image.id));
          }}>
          <MaterialIcon
            size={'medium'}
            name={'delete-outline'}
            color={'#000'}
          />
          <Text style={styles.text}>Remove photo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 15,
    height: 85,
    width: '100%',
    alignSelf: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    backgroundColor: '#FFF',
  },
  buttonsTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: '#C4C4C4',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  buttonsBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: '#000',
    paddingLeft: 8,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  btn: {display: 'flex', flexDirection: 'row'},
});
