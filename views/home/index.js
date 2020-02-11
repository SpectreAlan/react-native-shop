import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const Home: () => React$Node = () => {
  return (
    <>
      <View>
        <Text>主页</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'red',
  },
});

export default Home;
