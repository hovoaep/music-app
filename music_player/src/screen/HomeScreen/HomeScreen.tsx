import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
// @ts-ignore
import styles from './HomeScreen.scss';
import Swiper from 'react-native-swiper';
import Search from '../../components/Search/Search';
import Avatar from '../../components/Avatar/Avatar';
import BackIcon from '../../icons/BackIcon';
import {Colors} from '../../../styles/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import {USER} from '../../config/async-storage';
import {StackScreenProps} from '@react-navigation/stack';
import AlbumListHorizontal from '../../components/AlbumListHorizontal/AlbumListHorizontal';

/**
 * File: HomeScreen.tsx
 * @created 2020-11-08 17:07:26
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HomeScreenProps>>}
 */
function HomeScreen({navigation, route}: HomeScreenProps) {
  const [profile, setProfile] = React.useState<boolean>(false);
  const handleShowProfile = React.useCallback(() => {
    setProfile(true);
  }, []);
  return (
    <View style={{backgroundColor: Colors.White}}>
      <ImageBackground
        source={require('../../../assets/back-ground.jpg')}
        style={styles.imageBackground}
        resizeMode={'contain'}
      />
      <View style={{position: 'absolute'}}>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Avatar height={30} width={30} onPress={handleShowProfile} />
              <Search />
            </View>
            <Swiper
              containerStyle={styles.wrapper}
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
            <AlbumListHorizontal navigation={navigation} />
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
              <TouchableOpacity
                onPress={() => {
                  AsyncStorage.removeItem(USER);
                  setProfile(false);
                  navigation.navigate('LoginScreen');
                }}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
}

export interface HomeScreenProps extends StackScreenProps<any> {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.propTypes = {
  //
};

export default React.memo(HomeScreen);
