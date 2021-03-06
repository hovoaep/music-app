import React from 'react';
// @ts-ignore
import styles from './AlbumListHorizontal.scss';
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

function AlbumListHorizontal(props: AlbumListHorizontalProps) {
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
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export interface AlbumListHorizontalProps {
  navigation?: any;

  list: any;

  title: string;
}

AlbumListHorizontal.defaultProps = {
  //
};

AlbumListHorizontal.propTypes = {
  //
};

export default React.memo(AlbumListHorizontal);
