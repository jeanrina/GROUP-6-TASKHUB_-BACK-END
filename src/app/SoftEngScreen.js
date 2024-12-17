import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SoftEngScreen = ({ navigation }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showTasks, setShowTasks] = useState(false); // Initialize showTasks state
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete the presentation', completed: false },
    { id: 2, text: 'Submit the report', completed: false },
  ]); // Example tasks data

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const notes = ['Script', 'Presentation Outline'];

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Soft Eng</Text>
      </View>

      {/* Add Notes and Task Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNotesTasks')}
      >
        <Text style={styles.addButtonText}>Add Notes and Task</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {/* Notes Dropdown */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setShowNotes((prev) => !prev)}
        >
          <Ionicons name="document-text-outline" size={24} color="#0096FF" />
          <Text style={styles.optionText}>Notes</Text>
          <Ionicons
            name={showNotes ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="#0096FF"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
        {showNotes && (
          <View style={styles.dropdown}>
            {notes.map((note, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.listText}>{note}</Text>
                <View style={styles.icons}>
                  <TouchableOpacity>
                    <Ionicons name="create-outline" size={20} color="#0096FF" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={20} color="#D81B60" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Tasks Dropdown */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setShowTasks((prev) => !prev)}
        >
          <Ionicons name="checkmark-circle-outline" size={24} color="#D81B60" />
          <Text style={styles.optionText}>Tasks</Text>
          <Ionicons
            name={showTasks ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="#D81B60"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
        {showTasks && (
          <View style={styles.dropdown}>
            {tasks.map((task) => (
              <View key={task.id} style={styles.listItem}>
                <TouchableOpacity
                  onPress={() => toggleTaskCompletion(task.id)}
                  style={styles.checkbox}
                >
                  <Ionicons
                    name={
                      task.completed ? 'checkbox' : 'checkbox-outline'
                    }
                    size={24}
                    color={task.completed ? '#4CAF50' : '#D81B60'}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.listText,
                    task.completed && {
                      textDecorationLine: 'line-through',
                      color: '#666',
                    },
                  ]}
                >
                  {task.text}
                </Text>
                <View style={styles.icons}>
                  <TouchableOpacity>
                    <Ionicons name="create-outline" size={20} color="#0096FF" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={20} color="#D81B60" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  addButton: {
    marginBottom: 20,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#0D0070',
    overflow: 'hidden',
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  dropdown: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  listText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  scrollView: {
    marginBottom: 80,
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

export default SoftEngScreen;
