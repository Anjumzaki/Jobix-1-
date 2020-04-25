import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import MessageList from '../components/MessageList' 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default ({navigation}) => {
    return(
        <View style={styles.Container}>
            <MessageList
                source={require('../assets/images/Photo1.png')}
                Name='Jane T'
                Time='11 min ago'
                Message= 'Je suis intéressé par votre entreprise'
                onPress={() => navigation.navigate('Chat')}
            />

            <MessageList
                source={require('../assets/images/compagnie.png')}
                Name='Compagnie C'
                Time='1 day ago'
                Message= 'Je suis intéressé par votre entreprise'
                onPress={() => navigation.navigate('Chat')}
            />

            <MessageList
                source={require('../assets/images/compagnie.png')}
                Name='Compagnie C'
                Time='2 days ago'
                Message= 'Je suis intéressé par votre entreprise'
                onPress={() => navigation.navigate('Chat')}
            />

            <MessageList
                source={require('../assets/images/mike.png')}
                Name='Mike W.'
                Time='2 days ago'
                Message= 'Je suis intéressé par votre entreprise'
                onPress={() => navigation.navigate('Chat')}
            />

            <MessageList
                source={require('../assets/images/abe.png')}
                Name='Abe T.'
                Time='2 days ago'
                Message= 'Je suis intéressé par votre entreprise'
                onPress={() => navigation.navigate('Chat')}
            />

            <MessageList
                source={require('../assets/images/compagnie.png')}
                Name='Compagnie A'
                Time='1 mon ago'
                Message= 'Je suis intéressé par votre entreprise'
                onPress={() => navigation.navigate('Chat')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  Container:{
      height: windowHeight,
      width: windowWidth,
      backgroundColor:'#fff',
  }
})