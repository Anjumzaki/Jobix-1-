import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';
import TransparentButton from '../components/TransparentButton'
import Input from '../components/Input'
import LogoHeader from '../components/LogoHeader'
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  return (
      <View style={styles.Container}>
          <LogoHeader />
          <Input 
            style={{backgroundColor:'#f6d8ed', borderLeftColor: '#df3bb0',}}
            source={require('../assets/images/UserName.png')}
            placeholder='User Name'
          />
          <Input 
            source={require('../assets/images/mail.png')}
            style={{backgroundColor:'#d9d0f4', borderLeftColor: '#5c2ae8',}}
            placeholder='E-mail'
          />
          <TouchableOpacity
            style={styles.Password}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text>Forgot password</Text>
          </TouchableOpacity>
          <TransparentButton 
            text= 'SIGN IN'
            onPress={() => navigation.navigate('Dashboard')}/>
          <TouchableOpacity style={styles.NewAccount}>
            <Text>Don’t have any account?</Text>
            <Text style={styles.Underline}> Sign Up</Text>
          </TouchableOpacity>
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
  Logo:
  {
    marginTop: '15%'
  },
  Password:
  {
    marginLeft: '50%',
    marginBottom: '5%',
    padding:5
  },
  NewAccount:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: '5%'
  },
  Underline:{
    textDecorationLine: 'underline'
  }
});