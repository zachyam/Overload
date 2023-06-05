import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Workout(input) {
  const { workoutName } = input.route.params;

  const startExercise = () => {
    input.navigation.navigate({
      name: "Start Exercise",
      params: {},
    });
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: 3 }, (_, index) => (
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={startExercise}
          key={index}
        >
          <Text style={styles.rowText}>{workoutName}</Text>
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
    marginBottom: 20,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
