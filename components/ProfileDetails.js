import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'

export default (props)=> {
    return(
        <View style={styles.ProfileDetails}>
            <View style={styles.image}>
                <Image
                    source={props.source}
                />
                <Text 
                style={styles.DetailsText}>
                    {props.DetailsText}</Text>
            </View>
            <Text style={styles.Number}>
                {props.DetailsNumber}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ProfileDetails:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'90%',
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
        padding:10,
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
    image:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    DetailsText:{
        marginLeft: 10
    },
    Number:{
        fontWeight: 'bold',
        fontSize:18,
        textAlign: 'right', 
        alignSelf: 'stretch'
    }
})