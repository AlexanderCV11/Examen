import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import styles from './styles';


function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Game center</Text>
            <Image
                    style={styles.tinyLogo}
                      source={{uri:'https://www.biworldwide.com/globalassets/es-co/solutions-es/juegos-virtuales/biw-game-arcade_hero.png?width=720&height=630&mode=crop&scale=both',}}
                    />
            <Text style={styles.text}>Bienbenido a <strong>Game center</strong>, donde encontaras juegos como, Guess Number y Rock Paper Scissors. Espero que te diviertas.</Text>
            <Button 
                title="Juegos"
                onPress={() => navigation.navigate('Tasks', {
                    id: 1, 
                    description: 'Aquí va la descripción',
                } )}
            />
            
        </View>
    );
}

export default HomeScreen;