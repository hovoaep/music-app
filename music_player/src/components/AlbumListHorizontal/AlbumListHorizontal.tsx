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
 * File: AlbumListHorizontal.tsx
 * @created 2020-11-16 22:38:33
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<AlbumListHorizontalProps>>}
 */
const list = [
  {
    id: 0,
    name: 'Bài 1',
    uri: '',
  },
  {
    id: 1,
    name: 'Bài 2',
    uri: '',
  },
  {
    id: 2,
    name: 'Bài 2',
    uri: '',
  },
  {
    id: 3,
    name: 'Bài 3',
    uri: '',
  },
  {
    id: 4,
    name: 'Bài 4',
    uri: '',
  },
  {
    id: 5,
    name: 'Bài 5 cxc zcxzc xzcz cx cxzc ',
    uri: '',
  },
  {
    id: 6,
    name: 'Bài 6',
    uri: '',
  },
  {
    id: 7,
    name: 'Bài 7',
    uri: '',
  },
  {
    id: 8,
    name: 'Bài 8',
    uri: '',
  },
  {
    id: 9,
    name: 'Bài 9',
    uri: '',
  },
];

function AlbumListHorizontal(props: AlbumListHorizontalProps) {
  const {navigation} = props;

  const handleGoToPlayer = React.useCallback(() => {
    navigation.navigate('MusicPlayerScreen');
  }, []);

  const renderItem: ListRenderItem<any> = React.useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return (
        <TouchableOpacity style={styles.item} onPress={handleGoToPlayer}>
          <Image
            source={{
              uri:
                'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/122599624_1068645043587753_6780295223739275286_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=PtoPx4YFDAgAX8WR_PG&_nc_ht=scontent.fhan3-3.fna&oh=f51738403d29a23813900250ed2703d3&oe=5FD4C8F5',
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{item?.name}</Text>
        </TouchableOpacity>
      );
    },
    [handleGoToPlayer],
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Nhạc Hot</Text>
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
}

AlbumListHorizontal.defaultProps = {
  //
};

AlbumListHorizontal.propTypes = {
  //
};

export default React.memo(AlbumListHorizontal);
