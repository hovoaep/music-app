import React from 'react';
// @ts-ignore
import styles from './MusicPlayerScreen.scss';
import {
  View,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
import PlayIcon from '../../icons/PlayIcon';
import {Colors} from '../../../styles/Colors';
import UnPlayIcon from '../../icons/UnPlayIcon';
import Slider from '@react-native-community/slider';

/**
 * File: MusicPlayerScreen.tsx
 * @created 2020-11-19 00:53:49
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<MusicPlayerScreenProps>>}
 */

const track1 = {
  id: 0,
  name: 'Tìm lại bầu trời',
  image:
    'https://media.baodautu.vn/Images/chicuong/2019/06/24/tuan-hung-2-4511-1561286660.jpg',
  link:
    'https://appmusictrantien.000webhostapp.com/Mp3/TimLaiBauTroi-TuanHung-2504559.mp3',
};

const windowWidth = Dimensions.get('window').width;

function MusicPlayerScreen(props: MusicPlayerScreenProps) {
  let spinValue = new Animated.Value(0);

  const [value, setValue] = React.useState<number>(0);

  const spinAction = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  // React.useMemo(() => {
  //   handleStart();
  // }, [handleStart]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const [play, setPlay] = React.useState<boolean>(false);

  const [trackCurrent] = React.useState<any>(
    new Sound(track1.link, '', (error) => {
      if (!error && play) {
        trackCurrent.play((success: any) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }
    }),
  );

  const handleReload = React.useCallback(() => {
    if (play) {
      spinAction.start();
      trackCurrent.play((success: any) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    } else {
      spinAction.stop();
      trackCurrent.pause();
    }
  }, [play, spinAction, trackCurrent]);

  React.useEffect(() => {
    if (trackCurrent) {
      handleReload();
    }
  }, [handleReload, play, spinAction, trackCurrent]);

  const playMusic = React.useCallback(() => {
    setPlay(!play);
  }, [play]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <View style={styles.center} />
      <View style={styles.viewImage}>
        <Animated.Image
          style={[
            styles.spin,
            {width: windowWidth - 80, height: windowWidth - 80},
            {transform: [{rotate: spin}]},
          ]}
          source={{
            uri: track1.image,
          }}
        />
        <TouchableOpacity style={styles.viewBtn} onPress={playMusic}>
          <Slider
            // maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
            // onSlidingStart={onSlidingStart}
            // onSlidingComplete={onSeek}
            // value={currentPosition}
            style={styles.slider}
            minimumTrackTintColor={Colors.Primary}
            maximumTrackTintColor={Colors.Green}
            trackImage={styles.track}
          />
          {!play ? (
            <UnPlayIcon color={Colors.Dark} />
          ) : (
            <PlayIcon color={Colors.Primary} />
          )}
        </TouchableOpacity>
      </View>
      {/*<Button title="play me" onPress={playMusic} />*/}
    </View>
  );
}

export interface MusicPlayerScreenProps {
  //
}

MusicPlayerScreen.defaultProps = {
  //
};

MusicPlayerScreen.propTypes = {
  //
};

export default React.memo(MusicPlayerScreen);
