import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

function DetailScreen({route, navigation}) {

    const {stock, id, description, url, nombre} = route.params;

    navigation.setOptions({
        title: description,
    });
    
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66bb6a'}}>
            <Image
                style={styles.tinyLogo}
                source={{uri:url,}}
            />
            <Text>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 300,
        height: 300,
      }
})

export default DetailScreen;
