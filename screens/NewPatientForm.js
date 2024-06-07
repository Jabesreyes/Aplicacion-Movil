// NewPatientForm.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const NewPatientForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del paciente</Text>
      <TextInput style={styles.input} placeholder="Ej. John Doe" />

      <Text style={styles.label}>DUI</Text>
      <TextInput style={styles.input} placeholder="Ej. 12345678-9" />

      <Text style={styles.label}>Edad</Text>
      <TextInput style={styles.input} placeholder="Ej. 30" />

      <Text style={styles.label}>Peso</Text>
      <TextInput style={styles.input} placeholder="Ej. 100 libras" />

      <Text style={styles.label}>Telefono Emergencia</Text>
      <TextInput style={styles.input} placeholder="Ej. 0000-0000" />

      <Text style={styles.label}>Detalles</Text>
      <TextInput style={[styles.input, styles.multilineInput]} multiline placeholder="Especifique su motivo de consulta" />

      <Button icon="cancel" mode="contained" style={[styles.button, styles.cancelButton]} onPress={() => navigation.goBack()}>
        Cancelar
      </Button>
      <Button icon="check" mode="contained" style={[styles.button, styles.saveButton]} onPress={() => {        
        navigation.goBack();
      }}>
        Guardar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f3f3f9',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  multilineInput: {
    height: 80,
  },
  button: {
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#007AFF', 
  },
  saveButton: {
    backgroundColor: '#007AFF', 
  },
});

export default NewPatientForm;
