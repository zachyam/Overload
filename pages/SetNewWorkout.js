import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import WorkoutsDay from "../components/WorkoutsDay";

export default function SetNewWorkout(navigation) {
  const { workoutName, daysPerWeek } = navigation.route.params;
  const [workouts, setWorkouts] = useState({});

  const saveWorkout = () => {
    console.log(workouts);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: daysPerWeek }, (_, index) => (
        <WorkoutsDay
          key={index}
          day={index}
          workouts={workouts}
          setWorkouts={setWorkouts}
        />
      ))}
      <Pressable style={styles.saveWorkout} onPress={saveWorkout}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveWorkout: {
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
