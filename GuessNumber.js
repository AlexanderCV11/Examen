import React from 'react';
import {StyleSheet, View, ScrollView, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Box from './Box';
import tasks from './data/tasks';


function MenuScreen() {

  const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scroll}>
            <View style={styles.root}>
            
                <View style={styles.roots}>
                    <Image
                      style={styles.tinyLogo}
                      source={{uri:'https://play-lh.googleusercontent.com/q5lSxwHjIThHOMU3V7k28vSunN9qBSX-XY53tBtEJON3vdBvByBLC46iyLwzvM8cImxs=w240-h480-rw',}}
                    />
                    <Text> Guess My Number</Text>
                  <Button
                    color="#455a64"
                    title="Jugar"
                    onPress={
                      () => navigation.navigate('GuessMyNumber', {})
                    }
                  />
                </View>

                <View style={styles.roots}>
                    <Image
                    style={styles.tinyLogo}
                      source={{uri:'https://wl-brightside.cf.tsp.li/resize/728x/jpg/5a2/f8d/cabd005c59ae132189a9447dea.jpg',}}
                    />
                    <Text> Guess Your Number</Text>
                  <Button
                    color="#455a64"
                    title="Jugar"
                    onPress={
                      () => navigation.navigate('GuessYourNumber', {})
                    }
                  />
                </View>
                
              </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        //backgroundColor: '#ccff90',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    mainContainer: {
      flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66bb6a'
    },

    scroll: {
        marginBottom: 50,
    },
    tinyLogo: {
        width: '100%',
        height: '50%',
        borderRadius: 20,
      },
      roots: {
        width: '80%',
        height: 200,
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
    },
})

export default MenuScreen;