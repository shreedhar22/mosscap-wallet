/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {Header} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from 'react-native-material-color';

const AppHeader = (props:any) => {
  const {title, item, routeLink, navigation} = props;

  return (
    <Header
      backgroundColor="#3F00FF"
      containerStyle={{
        height: 120,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      leftComponent={() => {
        return <Feather name="align-left" size={35} color={Color.BLACK[500]} />;
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      centerComponent={() => {
        return (
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: Color.WHITE,
            }}>
            {title}
          </Text>
        );
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      rightComponent={() => {
        return <Ionicons name="wallet" size={33} color={Color.BLACK[500]} />;
      }}
    />
  );
};

export default AppHeader;