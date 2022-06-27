import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Game = (props) => {
  return(
    <View style={styles.opcion} onClick = {props.elegir}>
      {props.valor.eleccion}
    </View>
  )
} 

export default Game;