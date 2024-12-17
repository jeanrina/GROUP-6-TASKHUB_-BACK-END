import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("signIn");

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
      <Ionicons name="person-circle" size={100} color="#0094FF" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password and Sign Up Links */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.noAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
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
  icon: {
    marginBottom: 20,
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
  link: {
    marginTop: 15,
  },
  linkText: {
    fontSize: 16,
    color: '#0094FF',
    textDecorationLine: 'underline',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  noAccountText: {
    fontSize: 16,
    color: '#555',
  },
  signUpText: {
    fontSize: 16,
    color: '#0094FF',
    fontWeight: 'bold',
  },
});
