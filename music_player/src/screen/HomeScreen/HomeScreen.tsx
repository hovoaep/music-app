import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
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
import {hotMusicService} from '../../service/hot-music-service';
import {appAsyncStorage} from '../../app/app-async-storage';
import MailIcon from '../../icons/MailIcon';
import FeMaleIcon from '../../icons/FemaleIcon';
import MaleIcon from '../../icons/MaleIcon';
import AlbumListVertical from '../../components/AlbumListVertical/AlbumListVertical';

/**
 * File: HomeScreen.tsx
 * @created 2020-11-08 17:07:26
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<HomeScreenProps>>}
 */
function HomeScreen({navigation, route}: HomeScreenProps) {
  const {userCurrent} = route.params ?? {};

  const [profile, setProfile] = React.useState<boolean>(false);

  const [user, setUser] = React.useState<any>(userCurrent);

  const handleGetUser = React.useCallback(async () => {
    const userNow = await appAsyncStorage.getUser();
    setUser(userNow);
  }, []);

  React.useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const [listHotMusic] = hotMusicService.useMusicHotList(navigation);

  const handleShowProfile = React.useCallback(() => {
    setProfile(true);
  }, []);

  return (
    <View style={{backgroundColor: Colors.White}}>
      <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/originals/91/f0/65/91f06584b00259cb14463c0bab5096d6.jpg',
        }}
        style={styles.imageBackground}
        resizeMode={'contain'}
      />
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Avatar
                profile={user}
                height={40}
                width={40}
                onPress={handleShowProfile}
              />
              <Search />
            </View>
            <Swiper
              containerStyle={styles.wrapper}
              showsButtons={false}
              loop={true}
              autoplay={true}>
              {listHotMusic.map((item) => (
                <View style={styles.viewBanner} key={item.id}>
                  <ImageBackground
                    source={{uri: item.artwork}}
                    style={styles.banner}
                  />
                </View>
              ))}
            </Swiper>
            <AlbumListHorizontal
              title={'Nhạc Hot'}
              list={listHotMusic}
              navigation={navigation}
            />
            <AlbumListHorizontal
              title={'Nhạc trữ tình'}
              list={listHotMusic}
              navigation={navigation}
            />
            <AlbumListVertical
              title={'Bảng xếp hạng'}
              list={listHotMusic}
              navigation={navigation}
            />
          </View>
          <Modal
            isVisible={profile}
            style={styles.modal}
            animationIn="slideInLeft"
            animationOut="slideOutLeft">
            <View style={styles.modalView}>
              <View style={[styles.line, {marginBottom: 20}]}>
                <Avatar width={30} height={30} profile={user} />
                <Text style={styles.name}>{user?.name}</Text>
                <TouchableOpacity
                  style={styles.backIcon}
                  onPress={() => {
                    setProfile(false);
                  }}>
                  <BackIcon color={Colors.Dark} />
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.line}>
                  {user?.sex?.id && user?.sex?.id === 1 ? (
                    <FeMaleIcon color={Colors.Dark} />
                  ) : (
                    <MaleIcon color={Colors.Pink} />
                  )}
                  <Text style={[styles.value]}>{user?.sex?.name}</Text>
                </View>
                <View style={styles.line}>
                  <MailIcon color={Colors.Dark} />
                  <Text
                    style={[
                      styles.value,
                      {textDecorationLine: 'underline', color: 'blue'},
                    ]}>
                    {user?.email}
                  </Text>
                </View>
              </View>
              <View style={styles.modalBottom}>
                <TouchableOpacity
                  onPress={() => {
                    AsyncStorage.removeItem(USER).then(() => {
                      setProfile(false);
                      navigation.navigate('LoginScreen', {user});
                    });
                  }}>
                  <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
              </View>
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
