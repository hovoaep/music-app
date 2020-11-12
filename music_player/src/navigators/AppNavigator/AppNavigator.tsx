import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import {StatusBar} from 'react-native';

/**
 * File: AppNavigator.tsx
 * @created 2020-11-06 22:38:45
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<AppNavigatorProps>>}
 */
const {Navigator, Screen} = createStackNavigator();

const AppNavigator: FC<PropsWithChildren<AppNavigatorProps>> = (
  props: PropsWithChildren<AppNavigatorProps>,
): ReactElement => {
  return (
    <>
      <StatusBar hidden={true} />
      <Navigator
        headerMode="none"
        initialRouteName={'HomeScreen'}
        screenOptions={{
          gestureEnabled: false,
          gestureDirection: 'vertical',
        }}>
        <Screen name={'HomeScreen'} component={HomeScreen} initialParams={{}} />
      </Navigator>
    </>
  );
};

export interface AppNavigatorProps {
  //
}

AppNavigator.defaultProps = {
  //
};

AppNavigator.propTypes = {
  //
};

export default React.memo(AppNavigator);
