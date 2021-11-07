import React from 'react';
import {View, Text, Footer} from 'react-native';

const FooterScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#00aaff',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 20}}>Footer</Text>
    </View>
  );
};

export default FooterScreen;
