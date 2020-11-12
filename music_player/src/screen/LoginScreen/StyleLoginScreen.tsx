import {StyleSheet} from 'react-native';
import {backgroundPink} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: backgroundPink,
  },
  iconView: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 50,
  },
  inputView: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 32,
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    color: '#19d3da',
  },
  buttonView: {
    marginTop: 15,
    width: '100%',
  },
  lineNewAccount: {
    marginTop: 10,
  },
  account: {
    color: '#19d3da',
  },
});
