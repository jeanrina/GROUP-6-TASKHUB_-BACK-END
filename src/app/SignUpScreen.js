import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from './supabaseClient'; // Import Supabase client

export default function SignUpScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("signUp");

  // Form state variables
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return passwordPattern.test(password);
  };

  // Handle form submission for sign up
  const handleSubmit = async () => {
    // Validate Email
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    // Validate Password
    if (!validatePassword(password)) {
      Alert.alert("Invalid Password", "Password must be at least 8 characters long, include 1 uppercase letter, and 1 number.");
      return;
    }

    // Check if passwords match
    if (password !== verifyPassword) {
      Alert.alert("Password Mismatch", "The passwords do not match.");
      return;
    }

    // Sign up the user with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert("Sign Up Error", error.message);
    } else {
      // If sign-up is successful, navigate to SignIn Screen or log the user in directly
      Alert.alert("Success", "Account created successfully! Please sign in.");
      navigation.navigate('SignIn'); // Navigate to the SignIn screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TASKHUB</Text>

      {/* Sign In and Sign Up Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={styles.tab} 
          onPress={() => {
            setActiveTab("signIn");
            navigation.navigate('SignIn');
          }}
        >
          <Text style={[styles.tabText, activeTab === "signIn" && styles.activeTabText]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tab} 
          onPress={() => {
            setActiveTab("signUp");
            navigation.navigate('SignUp');
          }}
        >
          <Text style={[styles.tabText, activeTab === "signUp" && styles.activeTabText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>Create an Account</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Verify password"
          placeholderTextColor="#aaa"
          secureTextEntry={!confirmPasswordVisible}
          value={verifyPassword}
          onChangeText={setVerifyPassword}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Ionicons
            name={confirmPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have an account link */}
      <View style={styles.alreadyHaveAccountContainer}>
        <Text style={styles.alreadyHaveAccountText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => {
          setActiveTab("signIn");
          navigation.navigate('SignIn');
        }}>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0094FF',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  tab: {
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 22,
    color: '#0094FF',
    fontWeight: '600',
  },
  activeTabText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    color: '#0094FF',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  button: {
    backgroundColor: '#0094FF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  alreadyHaveAccountContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  alreadyHaveAccountText: {
    fontSize: 16,
    color: '#777',
  },
  signInLink: {
    fontSize: 16,
    color: '#0094FF',
    fontWeight: 'bold',
  },
});