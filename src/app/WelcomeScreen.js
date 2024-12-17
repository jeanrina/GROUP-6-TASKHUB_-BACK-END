import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Image background with wave */}
      <ImageBackground
        source={require('../../assets/waveBackground.png')} // Path to your PNG wave image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.topContainer}>
          {/* Title */}
          <Text style={styles.title}>TASKHUB</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Personal and Collaborative{'\n'}Task Management
          </Text>
        </View>
      </ImageBackground>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignInSignUp')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end', // Keeps the wave at the bottom of the screen
  },
  topContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 122, // Adjust top to place text above the wave as in your design
    width: '100%',
    zIndex: 10, // Keeps the text on top of the background
    paddingHorizontal: 20, // Prevents the text from touching the edges
  },
  title: {
    fontSize: 38, // Increased size for the title to make it prominent
    fontWeight: 'bold',
    color: '#0066cc', // Title text color
    textAlign: 'center', // Centers the title
    marginBottom: 20, // Adds space between the title and subtitle
  },
  subtitle: {
    fontSize: 18, // Subtitle size adjusted for balance with the title
    color: '#0066cc', // Subtitle text color
    textAlign: 'center',
    marginHorizontal: 20, // Ensures it doesn’t touch the edges on small screens
    lineHeight: 26, // Slightly increases line height for readability
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#0088FF', // Blue color for the button text
    fontWeight: 'bold',
    fontSize: 18, // Button text size matches the other screens
  },
});