import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const TeamScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#0096FF", "#A0D9FF"]} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Team</Text>
      </View>


      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Teams"
          placeholderTextColor="#FFF"
        />
        <Ionicons name="search" size={24} color="#FFF" />
      </View>


      {/* Team List */}
      <View style={styles.teamList}>
        <TouchableOpacity
          style={styles.teamButton}
          onPress={() => navigation.navigate("SoftEng")}
        >
          <View style={styles.teamContent}>
            <Ionicons name="people-outline" size={30} color="#FF4081" />
            <Text style={styles.teamText}>Soft Eng</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamButton}>
          <View style={styles.teamContent}>
            <Ionicons name="people-outline" size={30} color="#FF4081" />
            <Text style={styles.teamText}>Mob Prog</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamButton}>
          <View style={styles.teamContent}>
            <Ionicons name="people-outline" size={30} color="#FF4081" />
            <Text style={styles.teamText}>Group 8 IAS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamButton}>
          <View style={styles.teamContent}>
            <Ionicons name="people-outline" size={30} color="#FF4081" />
            <Text style={styles.teamText}>Group 3 Techno</Text>
          </View>
        </TouchableOpacity>
      </View>


      {/* Create Team Button */}
      <TouchableOpacity
        style={styles.createTeamButton}
        onPress={() => navigation.navigate("CreateTeam")}>


        <Text style={styles.createTeamText}>Create a team</Text>
      </TouchableOpacity>


      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home-outline" size={24} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Settings")}>
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
  },
  teamList: {
    marginBottom: 50,
  },
  teamButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  teamContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  createTeamButton: {
    backgroundColor: "#0D0070",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  createTeamText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0096FF",
    paddingVertical: 15,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 5,
  },
});


export default TeamScreen;