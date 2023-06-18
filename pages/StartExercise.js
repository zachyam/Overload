import React, { useState } from "react";
import { List } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import Set from "../components/Set";

export default function StartExercise(input) {
  const workoutName = input.route.params.workoutName;
  const [weightValues, setWeightValues] = useState({});
  const [repValues, setRepValues] = useState({});

  const numSets = 4;
  const exerciseName = "Weighted Dips";
  return (
    <View style={styles.container}>
      <List.Section title={workoutName} titleStyle={styles.titleText}>
        <List.Accordion
          title={exerciseName}
          left={(props) => <List.Icon {...props} />}
        >
          <View style={styles.rowContainer}>
            <Text style={styles.columnHeaderSets}>Set</Text>
            <Text style={styles.columnHeader}>Weight</Text>
            <Text style={styles.columnHeader}>Rep</Text>
            <Text style={styles.columnHeader}>Prev Weight</Text>
            <Text style={styles.columnHeader}>Prev Rep</Text>
          </View>
          {Array.from({ length: numSets }, (_, index) => (
            <Set
              key={index}
              exerciseName={exerciseName}
              setNumber={index}
              numSets={numSets}
              weightValues={weightValues}
              setWeightValues={setWeightValues}
              repValues={repValues}
              setRepValues={setRepValues}
            ></Set>
          ))}
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingLeft: 20,
    backgroundColor: "#eaeaea",
    borderRadius: 5,
  },
  columnHeaderSets: {
    fontSize: 14,
    marginRight: "15%",
    textAlign: "left",
  },
  columnHeader: {
    fontSize: 14,
    marginRight: 35,
    textAlign: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
