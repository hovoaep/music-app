import React, {FC, PropsWithChildren, ReactElement} from 'react';
// @ts-ignore
import styles from './Avatar.scss';
import {Image, TouchableOpacity} from 'react-native';

/**
 * File: Avatar.tsx
 * @created 2020-11-12 00:54:57
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<AvatarProps>>}
 */
const Avatar: FC<PropsWithChildren<AvatarProps>> = (
  props: PropsWithChildren<AvatarProps>,
): ReactElement => {
  const {profile, width, height, onPress, style} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{
          uri: profile?.avatar,
        }}
        style={[styles.image, styles.style, {width: width, height: height}]}
      />
    </TouchableOpacity>
  );
};

export interface AvatarProps {
  profile?: any;

  width?: number;

  height?: number;

  onPress?(): void;

  style?: any;
}

Avatar.defaultProps = {
  //
};

Avatar.propTypes = {
  //
};

export default React.memo(Avatar);
