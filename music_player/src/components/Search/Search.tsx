import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {TextInput, View} from 'react-native';
// @ts-ignore
import styles from './Search.scss';
import SearchIcon from '../../icons/SearchIcon';
import {Colors} from '../../../styles/Colors';

/**
 * File: Search.tsx
 * @created 2020-11-12 00:19:55
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<SearchProps>>}
 */
const Search: FC<PropsWithChildren<SearchProps>> = (
  props: PropsWithChildren<SearchProps>,
): ReactElement => {
  return (
    <View style={styles.container}>
      <SearchIcon color={Colors.Dark} />
      <TextInput style={styles.input} placeholder={'Search'} />
    </View>
  );
};

export interface SearchProps {
  //
}

Search.defaultProps = {
  //
};

Search.propTypes = {
  //
};

export default React.memo(Search);
