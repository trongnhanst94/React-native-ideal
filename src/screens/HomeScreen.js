import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text
} from 'react-native';

import { Fonts, Colors } from '../constants';
// import {
//   Text,
// } from '../compoments/StyledText';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.section}>
            <Text size={20} white>Home</Text>
          </View>
          <View style={styles.section}>
            <Text color="#19e7f7" size={15}>The smartest Way to build your mobile app</Text>
            <Text size={30} bold white style={styles.title}>React Native Starter</Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text color="#19e7f7" hCenter size={15} style={styles.description}> A powerful starter project that bootstraps development of your mobile application and saves you $20 000*</Text>
            <View style={styles.priceContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text white bold size={50} style={styles.price}>{'$199.95'}</Text>
              </View>
              <TouchableOpacity style={styles.priceLink}>
                <Text white size={14}>{'Multiple Applications License'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});
