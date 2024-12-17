import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addNote = (note) => setNotes((prev) => [...prev, note]);
  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const editNote = (index, updatedNote) => {
    setNotes((prev) =>
      prev.map((note, idx) => (idx === index ? updatedNote : note))
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <AppContext.Provider
      value={{ notes, tasks, addNote, addTask, editNote, editTask }}
    >
      {children}
    </AppContext.Provider>
  );
};