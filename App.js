/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App () {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello world</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#7159c1', 
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20
  }
})


