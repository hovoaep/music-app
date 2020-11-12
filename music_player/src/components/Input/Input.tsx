import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './InputStyle';

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
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>{leftIcon}</View>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={leftIcon && styles.input}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && <View style={styles.rightIconView}>{rightIcon}</View>}
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
}

Input.defaultProps = {
  secureTextEntry: false,
};

Input.propTypes = {
  //
};

export default React.memo(Input);
