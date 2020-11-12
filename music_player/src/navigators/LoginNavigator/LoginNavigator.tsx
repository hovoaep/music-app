import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screen/LoginScreen/LoginScreen';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';

/**
 * File: LoginNavigator.tsx
 * @created 2020-11-06 22:40:32
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<LoginNavigatorProps>>}
 */
const {Navigator, Screen} = createStackNavigator();

const LoginNavigator: FC<PropsWithChildren<
  LoginNavigatorProps
>> = (): // props: PropsWithChildren<LoginNavigatorProps>,
ReactElement => {
  return (
    <Navigator
      headerMode="none"
      initialRouteName={'LoginScreen'}
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      <Screen name={'LoginScreen'} component={LoginScreen} initialParams={{}} />
      <Screen name={'HomeScreen'} component={HomeScreen} initialParams={{}} />
    </Navigator>
  );
};

export interface LoginNavigatorProps {
  //
}

LoginNavigator.defaultProps = {
  //
};

LoginNavigator.propTypes = {
  //
};

export default React.memo(LoginNavigator);
