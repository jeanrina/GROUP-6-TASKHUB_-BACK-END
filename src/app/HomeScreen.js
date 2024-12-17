import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ route, navigation }) => {
  const { username } = route.params || { username: 'Guest' }; // Default username if not passed

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.userProfile}>
          <Ionicons name="person-circle" size={50} color="#FFF" />
          <Text style={styles.userName}>{username}</Text> {/* Display username */}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
          <Ionicons name="notifications-outline" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#FFF"
        />
        <Ionicons name="search" size={24} color="#FFF" />
      </View>

      {/* Task Sections */}
      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate('NotesTask')}
      >
        <View style={styles.sectionContent}>
          <MaterialIcons name="assignment" size={30} color="#FF4081" />
          <Text style={styles.sectionText}>Personal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate('TeamTasks')}
      >
        <View style={styles.sectionContent}>
          <Ionicons name="people-outline" size={30} color="#673AB7" />
          <Text style={styles.sectionText}>Team</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate('Calendar')}
      >
        <View style={styles.sectionContent}>
          <FontAwesome name="calendar" size={30} color="#D81B60" />
          <Text style={styles.sectionText}>Calendar</Text>
        </View>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('HomeScreen')}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
  },
  sectionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
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

export default HomeScreen;
