import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function Box({ id, description, url, stock, nombre}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image
                style={styles.tinyLogo}
                source={{uri:url,}}
            />
            <Text> {description}</Text>
            <Text>{nombre}</Text>
            <Button
                color="#455a64"
                title="Jugar"
                onPress={
                    () => navigation.navigate('GuessNumber', {
                        id: id,
                        description: description,
                        url: url,
                        stock: stock,
                        nombre: nombre
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '40%',
        height: 200,
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
    },
    tinyLogo: {
        width: '100%',
        height: '50%',
        borderRadius: 20,
      },
})

export default Box;