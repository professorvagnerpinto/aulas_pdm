import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {COLORS} from '../assets/colors';
const MeuButtom = ({texto, aoClicar}) => {
  return (
    <TouchableHighlight style={styles.buttom} onPress={() => aoClicar()}>
      <Text style={styles.text}>{texto}</Text>
    </TouchableHighlight>
  );
};
export default MeuButtom;

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
  buttom: {
    width: '95%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 10,
  },
});
