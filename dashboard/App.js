import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [appointments, setAppointments] = useState(generateRandomAppointments());

  const selectMonth = (month) => {
    setSelectedMonth(month);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  function generateRandomAppointments() {
    const appointments = [];
    for (let i = 0; i < 5; i++) {
      const dayAppointments = [];
      for (let j = 0; j < 5; j++) {
        const appointmentsCount = Math.floor(Math.random() * 3); // Genera hasta 2 citas adicionales
        const appointmentsArray = new Array(appointmentsCount).fill(Math.random() < 0.5 ? 'C' : 'I');
        dayAppointments.push(['-'].concat(appointmentsArray)); // Agrega '-' para espaciar los días y las citas
      }
      appointments.push(dayAppointments);
    }
    return appointments;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola Usuario!</Text>
        <Text style={styles.title}>Registro de citas</Text>
      </View>
      <View style={styles.monthsContainer}>
        <TouchableOpacity onPress={() => selectMonth('Nov')}>
          <Text style={[styles.month, selectedMonth === 'Nov' && styles.selectedMonth]}>Nov</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectMonth('Dec')}>
          <Text style={[styles.month, selectedMonth === 'Dec' && styles.selectedMonth]}>Dec</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectMonth('Ene')}>
          <Text style={[styles.month, selectedMonth === 'Ene' && styles.selectedMonth]}>Ene</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectMonth('Feb')}>
          <Text style={[styles.month, selectedMonth === 'Feb' && styles.selectedMonth]}>Feb</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectMonth('Mar')}>
          <Text style={[styles.month, selectedMonth === 'Mar' && styles.selectedMonth]}>Mar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectMonth('Abr')}>
          <Text style={[styles.month, selectedMonth === 'Abr' && styles.selectedMonth]}>Abr</Text>
        </TouchableOpacity>
      </View>
      {selectedMonth !== '' && (
        <Animated.View style={[styles.appointmentsContainer, { opacity: fadeAnim }]}>
          <View style={styles.verticalContainer}>
            {[0, 2, 4, 6, 8].map((day, index) => (
              <View key={index} style={styles.verticalItem}>
                <Text style={styles.dayText}>{day}</Text>
              </View>
            ))}
          </View>
          <View style={styles.horizontalContainer}>
            {appointments.map((dayAppointments, index) => (
              <View key={index} style={styles.barContainer}>
                <View style={styles.barRow}>
                  {dayAppointments.map((appointmentsArray, index) => (
                    <View key={index} style={styles.dayAppointments}>
                      {appointmentsArray.map((appointment, index) => (
                        <View key={index} style={[styles.bar, appointment === 'C' ? styles.completedColor : styles.incompleteColor]} />
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      )}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, styles.completedColor]} />
          <Text style={styles.legendText}>Citas completas</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, styles.incompleteColor]} />
          <Text style={styles.legendText}>Citas incompletas</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="calendar" size={20} color="white" />
          <Text style={styles.buttonText}> Citas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="user-md" size={20} color="white" />
          <Text style={styles.buttonText}> Médico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="user" size={20} color="white" />
          <Text style={styles.buttonText}> Paciente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="home" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="clock-o" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="user" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 50,
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  monthsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  month: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  selectedMonth: {
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
  appointmentsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  verticalContainer: {
    flexDirection: 'column',
    marginRight: 20,
    alignItems: 'flex-end',
  },
  verticalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 16,
    marginRight: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  barContainer: {
    flexDirection: 'column',
    marginRight: 20,
  },
  barRow: {
    flexDirection: 'row',
  },
  bar: {
    width: 20,
    height: 20,
    backgroundColor: 'yellow',
    marginRight: 2,
    marginBottom: 4,
  },
  completedColor: {
    backgroundColor: 'yellow',
  },
  incompleteColor: {
    backgroundColor: 'blue',
  },
  legend: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  legendText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 'auto',
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default Dashboard;