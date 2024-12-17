import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CustomizationScreen = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(''); // State to track the selected color

  const handleColorSelect = (color) => {
    setSelectedColor(color); // Update the selected color
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Customization</Text>
      </View>

      {/* Font Customization Option */}
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Font</Text>
        <Text style={styles.optionText}>Boogalo</Text>
      </TouchableOpacity>

      {/* Color Customization Options */}
      <Text style={styles.sectionLabel}>Colors</Text>
      <View style={styles.colorOptions}>
        <View style={styles.colorRow}>
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: 'white' },
              selectedColor === 'white' && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect('white')}
          />
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: 'pink' },
              selectedColor === 'pink' && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect('pink')}
          />
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: 'purple' },
              selectedColor === 'purple' && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect('purple')}
          />
        </View>
        <View style={styles.colorRow}>
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: 'yellow' },
              selectedColor === 'yellow' && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect('yellow')}
          />
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: 'green' },
              selectedColor === 'green' && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect('green')}
          />
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: 'red' },
              selectedColor === 'red' && styles.selectedColor,
            ]}
            onPress={() => handleColorSelect('red')}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

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
    </LinearGradient>
  );
};

// Styles for CustomizationScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 15,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  colorOptions: {
    marginTop: 10,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: '#000',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 20,
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
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 6,
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

export default CustomizationScreen;