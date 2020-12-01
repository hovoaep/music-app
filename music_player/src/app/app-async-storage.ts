import AsyncStorage from '@react-native-community/async-storage';
import {USER} from '../config/async-storage';

export class AppAsyncStorage {
  public saveUser = (user: any) => {
    return AsyncStorage.setItem(USER, JSON.stringify(user));
  };

  public getUser = async () => {
    return await JSON.parse(<string>await AsyncStorage.getItem(USER));
  };
}

export const appAsyncStorage: AppAsyncStorage = new AppAsyncStorage();
