import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
//import LinearGradient Componet to make Linear Gradient
import LinearTextGradient from 'react-native-text-gradient'

export default (props) => {
    return(
        <View style={styles.Button}>
            <LinearGradient
                colors={['#df3bb0', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.Gradient}
            >
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={props.onPress}>
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        marginTop:20,
        marginBottom:20
    },
    Gradient:{
        height: 48, 
        width: 300, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 300, 
        borderRadius: 25,
    },
    buttonContainer: {
        width: 300,
        alignItems: 'center',
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        color: '#8000FF',
        backgroundColor:'#ffffff',
        padding: 10,
        width: 296,
        borderRadius: 25,
        height: 44,
        fontSize: 16
  }
})