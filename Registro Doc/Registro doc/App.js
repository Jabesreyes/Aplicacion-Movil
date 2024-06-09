import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';  // Usa esto en Snack

const doctors = [
  { id: '1', name: 'Dra. Fatima Abarca', dui: '12345678-9', edad: '40', especialidad: 'Cardiología', horario: '8am-5pm', correo: 'fatima@example.com' },
  { id: '2', name: 'Dra. Nicole Miranda', dui: '98765432-1', edad: '35', especialidad: 'Dermatología', horario: '9am-4pm', correo: 'nicole@example.com' },
];

function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = doctors.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDoctors(newData);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  const handleDetails = (doctor) => {
    navigation.navigate('Details', { doctor });
  };

  const handleAddDoctor = () => {
    navigation.navigate('AddDoctor');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#007BFF" />
      </TouchableOpacity>
      <Text style={styles.title}>Registro de Doctores</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        value={search}
        onChangeText={(text) => handleSearch(text)}
      />
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.doctorContainer}>
            <Text style={styles.doctorName}>{item.name}</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => handleDetails(item)}>
              <Text style={styles.detailsButtonText}>Detalles</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddDoctor}>
        <Ionicons name="add" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Agregar Doctor</Text>
      </TouchableOpacity>
    </View>
  );
}

function AddDoctorScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dui, setDui] = useState('');
  const [edad, setEdad] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [horario, setHorario] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar el nuevo doctor
    alert('Doctor guardado');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Nuevo Doctor</Text>
      <TextInput
        style={[styles.input, { opacity: 0.6 }]}
        placeholder="Nombre del doctor"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { opacity: 0.6 }]}
        placeholder="DUI"
        value={dui}
        onChangeText={setDui}
      />
      <TextInput
        style={[styles.input, { opacity: 0.6 }]}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
      />
      <TextInput
        style={[styles.input, { opacity: 0.6 }]}
        placeholder="Especialidad"
        value={especialidad}
        onChangeText={setEspecialidad}
      />
      <TextInput
        style={[styles.input, { opacity: 0.6 }]}
        placeholder="Horario de consultas"
        value={horario}
        onChangeText={setHorario}
      />
      <TextInput
        style={[styles.input, { opacity: 0.6 }]}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={[styles.buttonText, { color: '#00aced' }]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen({ route }) {
  const { doctor } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person" size={50} color="#00aced" />
        <Text style={styles.headerText}>{doctor.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailText}>DUI: {doctor.dui}</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailText}>Edad: {doctor.edad}</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailText}>Especialidad: {doctor.especialidad}</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailText}>Horario: {doctor.horario}</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailText}>Correo: {doctor.correo}</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddDoctor" component={AddDoctorScreen} options={{ title: 'Agregar Doctor' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalles del Doctor' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  doctorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  doctorName: {
    fontSize: 18,
  },
  detailsButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00aced',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00aced',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#00aced',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#00aced',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    marginTop: 10,
  },
  detailContainer: {
    flex: 1,
  },
  detailItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  detailText: {
    fontSize: 16,
  },
});


 


