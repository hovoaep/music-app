import React, {useEffect, useState} from 'react';
// @ts-ignore
import styles from './MusicPlayerScreen.scss';
import {
  View,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import PlayIcon from '../../icons/PlayIcon';
import {Colors} from '../../../styles/Colors';
import UnPlayIcon from '../../icons/UnPlayIcon';
import Slider from '@react-native-community/slider';
import NextIcon from '../../icons/NextIcon';
import {StackScreenProps} from '@react-navigation/stack';
import BackIcon from '../../icons/BackIcon';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
  // @ts-ignore
} from 'react-native-track-player/lib/hooks';
import TrackPlayer, {
  // @ts-ignore
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';

/**
 * File: MusicPlayerScreen.tsx
 * @created 2020-11-19 00:53:49
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<MusicPlayerScreenProps>>}
 */

const windowWidth = Dimensions.get('window').width;

function MusicPlayerScreen(props: MusicPlayerScreenProps) {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  const {navigation, route} = props;

  const {item, list} = route.params ?? {};

  const [itemCurrent, setItemCurrent] = React.useState<any>(item);

  let trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      ],
    });
    // @ts-ignore
    await TrackPlayer.add({
      id: itemCurrent.id,
      url: itemCurrent.url,
      artwork: itemCurrent.artwork,
    });
    return true;
  };

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event: any) => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  const handleNextTrack = React.useCallback(async () => {
    if (list && itemCurrent) {
      if (itemCurrent.id <= list.length) {
        const itemNow = await list.find(
          (element: any) => element.id === itemCurrent.id + 1,
        );
        await setItemCurrent(itemNow);
        await TrackPlayer.stop();
        // await TrackPlayer.add({
        //   // @ts-ignore
        //   ...new TrackPlayer(),
        //   id: itemNow.id,
        //   url: itemNow.url,
        //   artwork: itemNow.artwork,
        // });
        // await TrackPlayer.play();
        // onButtonPressed();
      } else {
        const itemNow = await list.find((element: any) => element.id === 1);
        setItemCurrent(itemNow);
      }
    }
  }, [itemCurrent, list]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [sliderValue, setSliderValue] = useState(0);

  const [isSeeking, setIsSeeking] = useState(false);

  const {position, duration} = useTrackPlayerProgress(250);

  let spinValue = new Animated.Value(0);

  const spinAction = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration, isSeeking]);

  // const startImage = () => {
  //   spinAction.start();
  // };

  const onButtonPressed = React.useCallback(() => {
    if (!isPlaying) {
      TrackPlayer.play()
        .then(() => {})
        .catch(() => {});
      setIsPlaying(true);
    } else {
      TrackPlayer.pause()
        .then(() => {})
        .catch(() => {});
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async (value: React.SetStateAction<number>) => {
    // @ts-ignore
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  const handleGoBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      {/*<ImageBackground*/}
      {/*  source={{uri: itemCurrent.artwork}}*/}
      {/*  style={styles.imageBackground}*/}
      {/*/>*/}
      <TouchableOpacity onPress={handleGoBack} style={styles.backIcon}>
        <BackIcon color={Colors.Primary} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: '30%',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <View style={styles.viewImage}>
          <Animated.Image
            style={[
              styles.spin,
              {width: windowWidth - 50, height: windowWidth - 50},
              {transform: [{rotate: spin}]},
            ]}
            source={{
              uri: itemCurrent.artwork,
            }}
          />
          <Text style={styles.name}>{itemCurrent?.title}</Text>
          <Text>{itemCurrent?.artist}</Text>
          <View style={styles.viewBtn}>
            <Slider
              style={{width: 400, height: 40}}
              minimumValue={0}
              maximumValue={1}
              value={sliderValue}
              minimumTrackTintColor="#03c4a1"
              maximumTrackTintColor="#ff414d"
              onSlidingStart={slidingStarted}
              onSlidingComplete={slidingCompleted}
            />
            <View style={styles.control}>
              <View style={{transform: [{rotate: '180deg'}]}}>
                <NextIcon color={Colors.Dark} />
              </View>
              <TouchableOpacity onPress={onButtonPressed} style={styles.play}>
                {!isPlaying ? (
                  <UnPlayIcon color={Colors.Dark} />
                ) : (
                  <PlayIcon color={Colors.Primary} />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNextTrack}>
                <NextIcon color={Colors.Dark} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export interface MusicPlayerScreenProps extends StackScreenProps<any> {
  //
}

MusicPlayerScreen.defaultProps = {
  //
};

MusicPlayerScreen.propTypes = {
  //
};

export default React.memo(MusicPlayerScreen);
