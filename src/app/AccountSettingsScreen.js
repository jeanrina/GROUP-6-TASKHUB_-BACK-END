import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AccountSettingsScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Account Settings</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          {/* Profile picture would go here */}
        </View>
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={styles.editProfileText}>
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          editable={isEditing}
          placeholder="Enter your name"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="#A0A0A0"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={showPassword ? password : 'Password'}
            onChangeText={setPassword}
            editable={isEditing}
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={[styles.saveButton, { opacity: isEditing ? 1 : 0.6 }]}
        disabled={!isEditing}
      >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 15,
    letterSpacing: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  editProfileButton: {
    backgroundColor: '#003EFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 10,
    elevation: 5,
  },
  editProfileText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formContainer: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
    elevation: 3,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  eyeText: {
    fontSize: 20,
  },
  saveButton: {
    backgroundColor: '#003EFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
    elevation: 5,
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
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

export default AccountSettingsScreen;