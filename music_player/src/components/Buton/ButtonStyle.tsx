import {StyleSheet} from 'react-native';
import {backgroundWhite} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: backgroundWhite,
  },
});
