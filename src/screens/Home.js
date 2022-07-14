import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MeuButtom from '../componentes/MeuButtom';

const Home = ({navigation}) => {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    console.log('Atualizou o componente.');
  }, [cont]);

  useEffect(() => {
    return () => {
      console.log('o componente foi destruído');
    };
  }, []);

  const incrementar = () => {
    setCont(cont + 1);
  };

  const decrementar = () => {
    setCont(cont - 1);
  };

  return (
    <View>
      <Text style={styles.text}>{cont}</Text>
      <MeuButtom texto="Incrementar" aoClicar={incrementar} />
      <MeuButtom texto="Decrementar" aoClicar={decrementar} />
      <MeuButtom
        texto="Ir para Estudantes"
        aoClicar={() => {
          navigation.navigate('Estudantes');
        }}
      />
      <MeuButtom
        texto="Ir para Empresas"
        aoClicar={() => {
          navigation.navigate('Empresas');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
  },
});
