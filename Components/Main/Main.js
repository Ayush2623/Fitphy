import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Activities from '../Activities/Activities';
import Footer from '../Footer/Footer';
import Suggestion from '../Suggestion/Suggestion';
import Header from '../Header/Header';

export default function Main({ navigation }) {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <Activities navigation={navigation}/>
        <Suggestion />
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: -20,
  },
  screen: {
    flex: 1,
    margin: '3%',
  }
});
