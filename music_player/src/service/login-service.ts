import React from 'react';
// @ts-ignore
import listUser from '../SampleData/userList.json';
import {appAsyncStorage} from '../app/app-async-storage';
import {Alert} from 'react-native';
import {globalStateRepository} from '../repository/global-state-repository';

export class LoginService {
  public useLogin = (
    user: string,
    password: string,
    navigation: any,
  ): [() => void] => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleLogin = React.useCallback(() => {
      const userCurrent = listUser.find((u: {user: string}) => u.user === user);

      if (userCurrent) {
        if (userCurrent.password === password) {
          appAsyncStorage.saveUser(userCurrent).then(() => {
            navigation.navigate('HomeScreen', {
              userCurrent,
            });
          });
          globalStateRepository.setUser(userCurrent).then();
        } else {
          Alert.alert('Sai mật khẩu');
        }
      } else {
        Alert.alert('User không tồn tại');
      }
    }, [navigation, password, user]);
    return [handleLogin];
  };
}

export const loginService: LoginService = new LoginService();
