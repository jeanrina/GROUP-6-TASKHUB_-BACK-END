import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function SignInSignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/waveBackground.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.topContainer}>
          <Text style={styles.title}>TASKHUB</Text>
          <Text style={styles.subtitle}>
            Personal and Collaborative{'\n'}Task Management
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 100,
  },
  topContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 120,
    width: '100%',
    zIndex: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#0066cc',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#0066cc',
    textAlign: 'center',
    marginHorizontal: 20,
    lineHeight: 26,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    width: '75%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 18,
    fontWeight: 'bold',
  },
});