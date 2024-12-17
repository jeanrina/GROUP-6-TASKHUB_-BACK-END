import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const navigation = useNavigation();

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    Alert.alert('Date Selected', `You picked: ${day.dateString}`);
  };

  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time) {
      setSelectedTime(time);
      Alert.alert('Time Selected', `You picked: ${time.toLocaleTimeString()}`);
    }
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Text style={styles.title}>Select Date & Time</Text>

        {/* Calendar */}
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: '#0078D4' },
          }}
          theme={{
            selectedDayBackgroundColor: '#0078D4',
            todayTextColor: '#FF5722',
            arrowColor: '#FFF',
            textDayFontWeight: '600',
          }}
        />

        {/* Selected Date */}
        {selectedDate && (
          <View style={styles.card}>
            <Text style={styles.selectedText}>📅 Selected Date: {selectedDate}</Text>
          </View>
        )}

        {/* Selected Time */}
        <View style={styles.card}>
          <Text style={styles.selectedText}>
            ⏰ Selected Time: {selectedTime.toLocaleTimeString()}
          </Text>
        </View>

        {/* Time Picker */}
        <TouchableOpacity style={styles.timePickerButton} onPress={() => setShowTimePicker(true)}>
          <LinearGradient colors={['#0078D4', '#0056A1']} style={styles.gradientButton}>
            <Text style={styles.timePickerButtonText}>Pick Time</Text>
          </LinearGradient>
        </TouchableOpacity>

        {showTimePicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="spinner"
            onChange={handleTimeChange}
          />
        )}

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Home')}
        >
            <Ionicons name="home-outline" size={24} color="#FFF" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Settings')}
        >
            <Ionicons name="settings-outline" size={24} color="#FFF" />
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 1.2,
  },
  selectedText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  timePickerButton: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  timePickerButtonText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0096FF',
    paddingVertical: 15,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
  },
});

export default CalendarScreen;
