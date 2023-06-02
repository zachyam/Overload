import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AddExercise from "../components/AddExercise";

export default function AddExercises(navigation) {
  const { workoutName, daysPerWeek } = navigation.route.params;
  const [exercises, setExercises] = useState({});

  const saveExercises = () => {
    console.log(exercises);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: daysPerWeek }, (_, index) => (
        <AddExercise
          key={index}
          day={index}
          exercises={exercises}
          setExercises={setExercises}
        />
      ))}
      <Pressable style={styles.saveExercises} onPress={saveExercises}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveExercises: {
    position: "absolute",
    bottom: 50,
    padding: 10,
    borderRadius: 50,
    width: "35%",
    borderWidth: 3,
    alignSelf: "center",
    borderStyle: "solid",
    borderColor: "#50C878",
  },
  text: {
    textAlign: "center",
  },
});
