import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import Clipboard from "expo-clipboard";

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789 '

export default function App() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10);


  //Gerador de senha
  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!')
  }
  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/logo.png')} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
        </View>
      )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 10
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,

  }

});
