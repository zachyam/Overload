import { StyleSheet, View } from "react-native";
import WorkoutButton from "./components/Button";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateNewWorkout from "./pages/CreateWorkout";
import LoadExistingWorkouts from "./pages/LoadExistingWorkouts";
import AddExercises from "./pages/AddExercises";
import Workout from "./pages/Workout";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.selectWorkoutButton}>
        <WorkoutButton
          label="Start workout"
          onPress={() => navigation.navigate("Start Workout")}
        />
      </View>
      <View style={styles.selectWorkoutButton}>
        <WorkoutButton
          label="Create new workout"
          onPress={() => navigation.navigate("Create New Workout")}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Start Workout" component={LoadExistingWorkouts} />
        <Stack.Screen name="Create New Workout" component={CreateNewWorkout} />
        <Stack.Screen name="Add Exercises" component={AddExercises} />
        <Stack.Screen name="Load Workout" component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  selectWorkoutButton: {
    flex: 1 / 8,
    alignItems: "center",
  },
});
