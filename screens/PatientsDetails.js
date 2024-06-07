// PatientDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

const PatientDetails = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Juanita de Tal" />
        <Card.Content>
          <Text style={styles.detail}>Número de Teléfono: 0000-0000</Text>
          <Text style={styles.detail}>DUI: 00000000-0</Text>
          <Text style={styles.detail}>Edad: 100 años</Text>
          <Text style={styles.detail}>Peso: 100 libras</Text>
          <Text style={styles.detail}>Emergencia: 0000-0000</Text>
          <Text style={styles.detail}>
            Detalles: Juanita de tal, edad 100 años, no puede vivir sola,
            necesita de medicamento a las 5 pm todos los días.
          </Text>
        </Card.Content>
      </Card>
      <Button
        icon="pencil"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('NewPatientForm')}>
        Editar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 200,
    marginHorizontal: 15,
    backgroundColor: '#f3f3f9',
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default PatientDetails;
