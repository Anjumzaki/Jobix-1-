import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

export default (props)=> {
    return(
        <TouchableOpacity 
            activeOpacity={0.6}
            style={styles.Container}
            onPress={props.onPress}
        >
            <Image
                    style={styles.image}
                    source={props.source}
            />
            <View style={styles.MessageContainer}>
                    <View style={styles.Message}>
                        <Text 
                            style={styles.Name}>
                            {props.Name}
                        </Text>
                        <Text 
                            style={styles.Time}>
                            {props.Time}
                        </Text>
                    </View>
                    <View style={styles.Message}>
                        <Text 
                            style={styles.MessageText}>
                            {props.Message}
                        </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  Container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop:2,
    paddingTop: 10,
    paddingLeft:5,
    paddingBottom:10,
    paddingRight:10,
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  MessageContainer:{
      flexDirection: 'column',
  },
  MessageList:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
  },
  image:{
      height:55,
      width:55,
      borderColor: '#fff',
      borderWidth:0.5,
      borderRadius: 100
  },
  Message:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    padding:5,
    marginLeft: '-25%',
  },
  Name:{
      fontWeight: 'bold',
      marginLeft: '20%'
  },
  Time:{
      fontSize: 10,
      fontWeight: '100'
  },
  MessageText:{
    marginLeft: '20%'
  }  
})