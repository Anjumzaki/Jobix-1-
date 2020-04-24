import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  return (
      <View style={styles.Container}>
        <Image style={styles.Logo}
            source = {require('../assets/images/LogoText.png')} 
        />
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      alignItems: 'center',
      height:'40%',
      justifyContent: 'center'
  },
  Logo:{
        marginTop: '10%'
  },
  Jobix:{
      fontSize: 32,
      padding:5,
      color:'#8000FF'
  },
  Employee:{
    fontSize: 24,
    padding:2
  }
});