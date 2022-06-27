import React, { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';
import List from './List';

function mapItems(items) {
    return items.map((value, i) => ({key:i.toString(), value}))
}

function generateRandomNumber(max, min){
    return Math.floor(Math.random()*(max-min) + min);

}


function GuessNumber(props) {

    const [message, setMessage] = useState('');
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);
    const [maxim, setMaxim] = useState(100);
    const [minim, setMinim] = useState(1);

    const random = generateRandomNumber(maxim, minim);

  const Alto = () => {
    const numRandom = parseInt(random);

    setMinim(random);

    setGuessList([
            numRandom,
            ...guessList
        ]);
        setCount(count + 1);
  }

  const Bajo = () => {
    const numRandom = parseInt(random);

    setMaxim(random);
    
        setGuessList([
            numRandom,
            ...guessList
        ]);
        setCount(count + 1);
  }

    const Adivinaste = () => {
      setWin(true);
    }

    return (
        <View style = {styles.game}>
            <Text
                style={styles.input}
            >
            Tu numero es: 
            {random}?
            </Text>

            <Button
                title="Mi numero es mas alto"
                onPress={Alto}
            />
            <Button
                title="Mi numero es mas bajo"
                onPress={Bajo}
            />
            <Button
                title="Adivinaste"
                onPress={Adivinaste}
            />

            {
                win ?
                <Text>
                    La maquina a tardado {count} intentos en adivinar tu numero.
                </Text>
                :
                <Text>{maxim}</Text>
            }

            <List data = {mapItems(guessList)}/>

        </View>
    );
}

export default GuessNumber;

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        width: 400,
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10,
    }
});