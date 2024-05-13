import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SignInScreen = () => {

  return (
    SplashScreen.hide(),
    <View style={styles.container}>
      <Text style={styles.title}>Asilo Esperanza de Santa Ana</Text>
      <Image source={require('../assets/abuelos.png')} style={styles.illustration} />
      <Text style={styles.prompt}>Ingresa a la aplicación con tu correo o Google</Text>
      
      <TextInput style={styles.input} placeholder="email@domain.com" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="password" secureTextEntry />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login con Correo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar con Google</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>By clicking continue, you agree to our Terms of Service and Privacy Policy</Text>
      <Text style={styles.version}>Version 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  terms: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  version: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignInScreen;
