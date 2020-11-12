/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'reactn';
import {KeyboardAvoidingView, KeyboardAvoidingViewProps} from 'react-native';
import {PLATFORM_IS_IOS} from './src/config/platform';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './src/navigators/LoginNavigator/LoginNavigator';
import AppNavigator from './src/navigators/AppNavigator/AppNavigator';
import {DMSGlobalState} from './src/config/global';
import {appAsyncStorage} from './src/app/app-async-storage';
import {USER} from './src/config/async-storage';
import {globalStateRepository} from './src/repository/global-state-repository';

const KEYBOARD_AVOIDING_VIEW_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] = PLATFORM_IS_IOS
  ? 'padding'
  : 'height';

const App = () => {
  const handleGetUser = React.useCallback(async () => {
    const useBase = await appAsyncStorage.getUser(USER);
    if (typeof useBase === 'string') {
      const user = JSON.parse(useBase);
      globalStateRepository.setUser(user);
    }
  }, []);
  React.useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const [user] = React.useGlobal<DMSGlobalState, 'user'>('user');

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={KEYBOARD_AVOIDING_VIEW_BEHAVIOR}
        style={{width: '100%', height: '100%'}}>
        {user ? <AppNavigator /> : <LoginNavigator />}
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default React.memo(App);
