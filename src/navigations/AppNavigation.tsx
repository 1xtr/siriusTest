import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {THEME} from '../theme';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcon} from '../components/Icon';
import {createStackNavigator} from '@react-navigation/stack';
import {ImageScreen} from '../screens/ImageScreen';
import LinearGradient from 'react-native-linear-gradient';

const defaultScreenOptions: {} = {
  gestureEnabled: true,
  headerStyle: {height: 60},
  headerTintColor: '#FFF',
  headerTitleAlign: 'center',
  headerTitleStyle: {fontSize: 22, fontFamily: 'openSans'},
  headerBackground: () => (
    <LinearGradient
      colors={[THEME.HEADER_COLOR_1, THEME.HEADER_COLOR_2]}
      style={styles.gradientHeader}
    />
  ),
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: 10,
  },
  tabBarActiveTintColor: THEME.MAIN_TEXT_COLOR,
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
  },
};

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={defaultScreenOptions}
    backBehavior={'initialRoute'}>
    <Tab.Screen
      name={'TabGallery'}
      component={HomeScreen}
      options={{
        headerTitle: 'Все изображения',
        tabBarLabel: 'Галерея',
        tabBarIcon: ({color}) => (
          <MaterialIcon name={'grid'} color={color} size={'small'} />
        ),
      }}
    />
    <Tab.Screen
      name={'TabFavorites'}
      component={FavoritesScreen}
      options={{
        headerTitle: 'Избранное',
        tabBarLabel: 'Избранное',
        tabBarIcon: ({color, focused}) => (
          <MaterialIcon
            name={focused ? 'star' : 'star-outline'}
            color={color}
            size={'small'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name={'Tab'}
      component={TabNavigator}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name={'SingleImage'}
      component={ImageScreen}
      options={defaultScreenOptions}
    />
  </MainStack.Navigator>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  gradientHeader: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
