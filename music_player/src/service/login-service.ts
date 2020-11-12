import React from 'react';
// @ts-ignore
import listUser from '../SampleData/userList.json';
import {appAsyncStorage} from '../app/app-async-storage';
import {Alert} from 'react-native';
import {globalStateRepository} from '../repository/global-state-repository';

export class LoginService {
  public useLogin = (user: string, password: string): [() => void] => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleLogin = React.useCallback(() => {
      const userCurrent = listUser.find((u: {user: string}) => u.user === user);

      if (userCurrent) {
        if (userCurrent.password === password) {
          Alert.alert('Thành công');
          appAsyncStorage
            .saveUser(userCurrent)
            .then(() => Alert.alert('Thành công'));
          globalStateRepository.setUser(userCurrent);
        } else {
          Alert.alert('Sai mật khẩu');
        }
      } else {
        Alert.alert('User không tồn tại');
      }
    }, [password, user]);
    return [handleLogin];
  };
}

export const loginService: LoginService = new LoginService();
