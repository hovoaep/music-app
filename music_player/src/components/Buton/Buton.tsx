import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './ButtonStyle';

/**
 * File: Buton.tsx
 * @created 2020-11-08 15:55:09
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<ButonProps>>}
 */
const Buton: FC<PropsWithChildren<ButonProps>> = (
  props: PropsWithChildren<ButonProps>,
): ReactElement => {
  const {text, color, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[{backgroundColor: color}, styles.container]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export interface ButonProps {
  text: string;

  color?: string;

  onPress?(): void;
}

Buton.defaultProps = {
  color: 'red',
};

Buton.propTypes = {
  //
};

export default React.memo(Buton);
