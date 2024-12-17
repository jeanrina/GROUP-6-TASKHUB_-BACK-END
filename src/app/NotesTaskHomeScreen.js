import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const NotesTaskHomeScreen = ({ navigation }) => {
  // States for dropdown visibility
  const [showNotes, setShowNotes] = useState(false);
  const [showTasks, setShowTasks] = useState(false);

  // Empty arrays for tasks and notes initially
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, text, completed: false },
    ]);
  };

  // Function to add a new note
  const addNote = (text) => {
    setNotes((prevNotes) => [...prevNotes, text]);
  };

  // Function to edit a task
  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  // Function to edit a note
  const editNote = (index, newText) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newText;
    setNotes(updatedNotes);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to delete a note
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  // Toggle task completion status
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to prompt user for adding tasks or notes
  const promptAddItem = (type) => {
    const inputPrompt = type === 'task' ? 'Enter task' : 'Enter note';
    Alert.prompt(inputPrompt, '', (text) => {
      if (text) {
        type === 'task' ? addTask(text) : addNote(text);
      }
    });
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Notes and Tasks</Text>
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
            {notes.length === 0 ? (
              <Text style={styles.noItemsText}>No notes added yet.</Text>
            ) : (
              notes.map((note, index) => (
                <View key={index} style={styles.listItem}>
                  <TextInput
                    value={note}
                    style={styles.listText}
                    onChangeText={(newText) => editNote(index, newText)}
                  />
                  <View style={styles.icons}>
                    <TouchableOpacity
                      onPress={() => promptAddItem('note')}
                    >
                      <Ionicons name="create-outline" size={20} color="#0096FF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteNote(index)}>
                      <Ionicons name="trash-outline" size={20} color="#D81B60" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
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
            {tasks.length === 0 ? (
              <Text style={styles.noItemsText}>No tasks added yet.</Text>
            ) : (
              tasks.map((task) => (
                <View key={task.id} style={styles.listItem}>
                  <TouchableOpacity
                    onPress={() => toggleTaskCompletion(task.id)}
                    style={styles.checkbox}
                  >
                    <Ionicons
                      name={task.completed ? 'checkbox' : 'checkbox-outline'}
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
                    <TouchableOpacity
                      onPress={() => promptAddItem('task')}
                    >
                      <Ionicons name="create-outline" size={20} color="#0096FF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTask(task.id)}>
                      <Ionicons name="trash-outline" size={20} color="#D81B60" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
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
  noItemsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default NotesTaskHomeScreen;