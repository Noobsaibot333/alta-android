import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import styles from './Topic1.style';

const Topic1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.square}>
          <Image source={require('../assets/images/image1.png')} style={styles.image} />
        </View>
        <View style={styles.square}>
          <Image source={require('../assets/images/image2.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.square}>
          <Image source={require('../assets/images/image3.png')} style={styles.image} />
        </View>
        <View style={styles.square}>
          <Image source={require('../assets/images/image4.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.square}>
          <Image source={require('../assets/images/image5.png')} style={styles.image} />
        </View>
        <View style={styles.square}>
          <Image source={require('../assets/images/image6.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.square}>
          <Image source={require('../assets/images/image7.png')} style={styles.image} />
        </View>
        <View style={styles.square}>
          <Image source={require('../assets/images/image8.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.square}>
          <Image source={require('../assets/images/image9.png')} style={styles.image} />
        </View>
        <View style={styles.square}>
          <Image source={require('../assets/images/image1.png')} style={styles.image} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Topic1;
