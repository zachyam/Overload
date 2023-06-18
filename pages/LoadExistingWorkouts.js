import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoadExistingWorkouts({ navigation }) {
  const loadWorkout = () => {
    navigation.navigate({
      name: "Load Workout",
      params: { workoutName: "OverLoad" },
    });
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: 1 }, (_, index) => (
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={loadWorkout}
          key={index}
        >
          <Text style={styles.rowText}>Overload</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="chevron-forward-outline" size={24} color="#999" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eaeaea",
    borderRadius: 5,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
