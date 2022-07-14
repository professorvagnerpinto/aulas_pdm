import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Estudantes = () => {
  //console.log(props);
  return (
    <View>
      <Text style={styles.text}>{Estudantes}</Text>
    </View>
  );
};
export default Estudantes;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
    alignSelf: 'center',
  },
});
