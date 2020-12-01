import React from 'react';
// @ts-ignore
import styles from './AlbumListVertical.scss';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  Image,
  TouchableOpacity,
} from 'react-native';

/**
 * File: AlbumListVertical.tsx
 * @created 2020-11-16 22:38:33
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<AlbumListHorizontalProps>>}
 */

function AlbumListVertical(props: AlbumListHorizontalProps) {
  const {navigation, list, title} = props;

  const handleGoToPlayer = React.useCallback(
    (item: any) => () => {
      navigation.navigate('MusicPlayerScreen', {
        item,
        list,
      });
    },
    [list, navigation],
  );

  const renderItem: ListRenderItem<any> = React.useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={handleGoToPlayer(item)}
          key={item.id}>
          <Image
            source={{
              uri: item.artwork,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{item?.title}</Text>
        </TouchableOpacity>
      );
    },
    [handleGoToPlayer],
  );
  return (
    <>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={renderItem}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

export interface AlbumListHorizontalProps {
  navigation?: any;

  list: any;

  title: string;
}

AlbumListVertical.defaultProps = {
  //
};

AlbumListVertical.propTypes = {
  //
};

export default React.memo(AlbumListVertical);
