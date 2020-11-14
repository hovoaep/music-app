import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
// @ts-ignore
import styles from './HomeScreen.scss';
import Swiper from 'react-native-swiper';
import Search from '../../components/Search/Search';
import Avatar from '../../components/Avatar/Avatar';
import BackIcon from '../../icons/BackIcon';
import {Colors} from '../../../styles/Colors';

/**
 * File: HomeScreen.tsx
 * @created 2020-11-08 17:07:26
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HomeScreenProps>>}
 */
const HomeScreen: FC<PropsWithChildren<HomeScreenProps>> = (
  props: PropsWithChildren<HomeScreenProps>,
): ReactElement => {
  const [profile, setProfile] = React.useState<boolean>(false);
  const handleShowProfile = React.useCallback(() => {
    setProfile(true);
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <Avatar height={30} width={30} onPress={handleShowProfile} />
          <Search />
        </View>
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
              <Text style={styles.text}>Trần Tiến</Text>
            </View>
          </Swiper>
        </View>
      </View>
      <Modal
        isVisible={profile}
        style={styles.modal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft">
        <View style={styles.modalView}>
          <View style={styles.line}>
            <Avatar width={30} height={30} />
            <Text style={styles.name}>Trần Văn Tiến</Text>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => {
                setProfile(false);
              }}>
              <BackIcon color={Colors.Dark} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
