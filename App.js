
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./src/images/teste1.png')}>
        <TextInput label="Usuário" style={styles.textInput} underlineColor="black" selectionColor="gray" 
          left={   <TextInput.Icon name="account" />  }
        />
        <TextInput label="Senha" style={styles.textInput} underlineColor="black"  icon="lock"
          left={ <TextInput.Icon name="lock" /> }
        />
        <Button  color='#4bab8f' style={styles.botao} icon="login" mode="contained" onPress={() => console.log('Pressed')}>
          Acessar
      </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    marginLeft: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',

    resizeMode: "cover",
    justifyContent: "center"
  },
  textInput: {
    top: 50,
    color: "white",
    padding: 2,
    margin: 10,
    
    marginLeft: 70,
    height: 60,
    width: '70%',

    backgroundColor: 'transparent',

  },
  botao: {
    top: 80,
    marginLeft: 75,
    height: 40,
    width: '70%',
   
  }
});
