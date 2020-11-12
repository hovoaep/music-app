import {StyleSheet} from 'react-native';
import {backgroundWhite} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#ff6f8f',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    color: backgroundWhite,
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 30,
  },
});
