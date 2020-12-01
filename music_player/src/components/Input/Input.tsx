import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import styles from './Input.scss';

/**
 * File: Input.tsx
 * @created 2020-11-08 13:55:29
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<InputProps>>}
 */
const Input: FC<PropsWithChildren<InputProps>> = (
  props: PropsWithChildren<InputProps>,
): ReactElement => {
  const {
    placeholder,
    leftIcon,
    rightIcon,
    onChange,
    value,
    secureTextEntry,
    showPass,
  } = props;

  return (
    <View style={styles.containerView}>
      <View>{leftIcon}</View>
      <TextInput
        style={{flex: 1, marginLeft: 5}}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && (
        <TouchableOpacity onPress={showPass}>{rightIcon}</TouchableOpacity>
      )}
    </View>
  );
};

export interface InputProps {
  onChange?(text: string): void;

  placeholder?: string;

  leftIcon?: any;

  rightIcon?: any;

  value?: string;

  secureTextEntry?: boolean;

  showPass?(): void;
}

Input.defaultProps = {
  secureTextEntry: false,
};

Input.propTypes = {
  //
};

export default React.memo(Input);
