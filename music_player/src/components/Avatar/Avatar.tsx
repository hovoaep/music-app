import React, {FC, PropsWithChildren, ReactElement} from 'react';
import './Avatar.scss';
import {View} from 'react-native';

/**
 * File: Avatar.tsx
 * @created 2020-11-12 00:54:57
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<AvatarProps>>}
 */
const Avatar: FC<PropsWithChildren<AvatarProps>> = (
  props: PropsWithChildren<AvatarProps>,
): ReactElement => {
  const {profile} = props;
  return (
      <View>
        {profile ? <></> : <View></View>}
      </View>
  );
};

export interface AvatarProps {
  profile?: any;
}

Avatar.defaultProps = {
  //
};

Avatar.propTypes = {
  //
};

export default React.memo(Avatar);
