import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {View, Text} from 'react-native';
// @ts-ignore
import styles from './HomeScreen.scss';
import Header from '../../components/Header/Header';
import EyeIcon from '../../icons/EyeIcon';
import {Colors} from '../../../styles/Colors';
import Swiper from 'react-native-swiper';
import Search from '../../components/Search/Search';

/**
 * File: HomeScreen.tsx
 * @created 2020-11-08 17:07:26
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HomeScreenProps>>}
 */
const HomeScreen: FC<PropsWithChildren<HomeScreenProps>> = (
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement => {
  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.viewContent}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          loop={true}
          autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export interface HomeScreenProps {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.propTypes = {
  //
};

export default React.memo(HomeScreen);
