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
  const {profile, width, height, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{
          uri:
            'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/122599624_1068645043587753_6780295223739275286_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=PtoPx4YFDAgAX8WR_PG&_nc_ht=scontent.fhan3-3.fna&oh=f51738403d29a23813900250ed2703d3&oe=5FD4C8F5',
        }}
        style={[styles.image, {width: width, height: height}]}
      />
    </TouchableOpacity>
  );
};

export interface AvatarProps {
  profile?: any;

  width?: number;

  height?: number;

  onPress?(): void;
}

Avatar.defaultProps = {
  //
};

Avatar.propTypes = {
  //
};

export default React.memo(Avatar);
