import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './StyleLoginScreen';
import MusicIcon from '../../icons/MusicICon';
import {Colors} from '../../../styles/Colors';
import Input from '../../components/Input/Input';
import UserIcon from '../../icons/UserIcon';
import LockIcon from '../../icons/LockIcon';
import Buton from '../../components/Buton/Buton';
import EyeIcon from '../../icons/EyeIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {loginService} from '../../service/login-service';
import EyeFlashIcon from '../../icons/EyeFlasIcon';

/**
 * File: LoginScreen.tsx
 * @created 2020-11-06 23:32:15
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<LoginScreenProps>>}
 */
function LoginScreen({navigation}: LoginScreenProps) {
  const [email, setEmail] = React.useState<string>('');

  const [password, setPassword] = React.useState<string>('');

  const handleChangeEmail = React.useCallback((email) => {
    setEmail(email);
  }, []);

  const [showPass, setShowPass] = React.useState<boolean>(false);

  const handleChangePassword = React.useCallback((pass) => {
    setPassword(pass);
  }, []);

  const [handleLogin] = loginService.useLogin(email, password, navigation);

  const handleShowPass = React.useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconView}>
          <MusicIcon color={Colors.Primary} />
          <Text style={styles.textIcon}>Music Player</Text>
        </View>
        <View style={styles.inputView}>
          <Input
            onChange={handleChangeEmail}
            placeholder={'user'}
            leftIcon={<UserIcon color={Colors.Dark} />}
          />
          <Input
            onChange={handleChangePassword}
            placeholder={'password'}
            leftIcon={<LockIcon color={Colors.Dark} />}
            rightIcon={
              showPass ? (
                <EyeFlashIcon color={Colors.Dark} />
              ) : (
                <EyeIcon color={Colors.Dark} />
              )
            }
            secureTextEntry={!showPass}
            showPass={handleShowPass}
          />

          <View style={styles.buttonView}>
            <Buton onPress={handleLogin} text={'Login'} color={'#12cad6'} />
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.lineNewAccount}>
                Create an <Text style={styles.account}>Account</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export interface LoginScreenProps extends StackScreenProps<any> {
  //
}

LoginScreen.defaultProps = {
  //
};

LoginScreen.propTypes = {
  //
};

export default React.memo(LoginScreen);
