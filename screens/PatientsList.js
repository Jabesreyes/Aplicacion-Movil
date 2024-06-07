import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { List, Searchbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PatientsList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Searchbar placeholder="Buscar Paciente" style={styles.searchbar} />
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails')}>
        <View style={styles.item}>
          <List.Icon icon="account-circle-outline" size={24} />
          <View>
            <Text style={styles.patientName}>Juanita de Tal</Text>
            <Text style={styles.patient}>Paciente</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails')}>
        <View style={styles.item}>
          <List.Icon icon="account-circle-outline" size={24} />
          <View>
            <Text style={styles.patientName}>Juanita de Tal</Text>
            <Text style={styles.patient}>Paciente</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails')}>
        <View style={styles.item}>
          <List.Icon icon="account-circle-outline" size={24} />
          <View>
            <Text style={styles.patientName}>Juanita de Tal</Text>
            <Text style={styles.patient}>Paciente</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails')}>
        <View style={styles.item}>
          <List.Icon icon="account-circle-outline" size={24} />
          <View>
            <Text style={styles.patientName}>Juanita de Tal</Text>
            <Text style={styles.patient}>Paciente</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails')}>
        <View style={styles.item}>
          <List.Icon icon="account-circle-outline" size={24} />
          <View>
            <Text style={styles.patientName}>Juanita de Tal</Text>
            <Text style={styles.patient}>Paciente</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PatientDetails')}>
        <View style={styles.item}>
          <List.Icon icon="account-circle-outline" size={24} />
          <View>
            <Text style={styles.patientName}>Juanita de Tal</Text>
            <Text style={styles.patient}>Paciente</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('NewPatientForm')}>
        <Button
          icon="plus"
          mode="contained"
          color="#282c3c"
          style={styles.button}>
          Nuevo Paciente
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginVertical: 40,
    marginHorizontal: 50,
    height: 55,
    width: 240,
    backgroundColor: '#f1f6f5',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f9',
    padding: 3,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  patientName: {
    fontSize: 14,
  },
  patient: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    marginHorizontal: 60,
    marginVertical: 30,
  },
});

export default PatientsList;
