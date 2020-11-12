import {StyleSheet} from 'react-native';
import {backgroundWhite} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    padding: 16,
    backgroundColor: backgroundWhite,
    borderRadius: 10,
    width: '100%',
  },
  input: {
    marginLeft: 30,
  },
  leftIcon: {
    backgroundColor: 'red',
    flex: 1,
  },
  rightIconView: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
