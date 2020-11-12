import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {View, Text} from 'react-native';
import {styles} from './HeaderStyle';

/**
 * File: Header.tsx
 * @created 2020-11-09 07:20:47
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HeaderProps>>}
 */
const Header: FC<PropsWithChildren<HeaderProps>> = (
  props: PropsWithChildren<HeaderProps>,
): ReactElement => {
  const {leftIcon, rightIcon, title} = props;
  return (
    <View style={styles.container}>
      <View>{leftIcon}</View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{rightIcon}</View>
    </View>
  );
};

export interface HeaderProps {
  leftIcon?: any;

  rightIcon?: any;

  title?: string;
}

Header.defaultProps = {
  //
};

Header.propTypes = {
  //
};

export default React.memo(Header);
