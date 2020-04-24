import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import TransparentButton from '../components/TransparentButton'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  return (
      <View style={styles.Container}>
        <Image style={styles.Logo}
            source = {require('../assets/images/Logo.png')} 
        />
        <View style={styles.EmployeeContainer}>
          <Image style={styles.Employer}
              source = {require('../assets/images/unemployeur.png')} 
          />
          <TransparentButton 
              text= 'Je cherche un employeur'
              source={require('../assets/images/arrow.png')}
              onPress={() => navigation.navigate('LoginWorker')}/>
        </View>
      
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      height: windowHeight,
      width: windowWidth,
      alignItems: 'center',
      backgroundColor:'#fff',
  },
  Logo:{
        marginTop: '15%'
  },
  EmployeeContainer:{
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Employer:{
      marginTop: '10%'
  }
});