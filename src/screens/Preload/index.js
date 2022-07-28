/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Container, Image} from './styles';
import EncryptedStorage from 'react-native-encrypted-storage';
import auth from '@react-native-firebase/auth';

const Preload = ({navigation}) => {
  useEffect(() => {
    buscarDadosNaCache();
  }, []);

  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      if (session !== undefined) {
        return JSON.parse(session);
      }
    } catch (error) {
      console.error('SignIn, storeUserSession: ' + error);
    }
  }

  const entrar = async (email, password) => {
    if (email !== '' && password !== '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };

  const buscarDadosNaCache = async () => {
    let login = await retrieveUserSession();
    if (login) {
      entrar(login.email, login.password);
    } else {
      navigation.navigate('SignIn');
    }
  };

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo_white.png')}
        accessibilityLabel="logo do app"
      />
    </Container>
  );
};

export default Preload;
