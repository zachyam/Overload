import React, { useState } from "react";
import { List } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import Set from "../components/Set";

export default function StartExercise() {
  const [weightValue, setWeightValue] = useState({});
  const [repValue, setRepValue] = useState({});

  const numSets = 4;
  return (
    <View style={styles.container}>
      <List.Section title="Overload" titleStyle={styles.titleText}>
        <List.Accordion
          title="Weighted Dips"
          left={(props) => <List.Icon {...props} />}
        >
          <View style={styles.rowContainer}>
            <Text style={styles.columnHeaderSets}>Set</Text>
            <Text style={styles.columnHeader}>Weight</Text>
            <Text style={styles.columnHeader}>Rep</Text>
            <Text style={styles.columnHeader}>Prev Weight</Text>
            <Text style={styles.columnHeader}>Prev Set</Text>
          </View>
          {Array.from({ length: numSets }, (_, index) => (
            <Set
              key={index}
              setNumber={index}
              numSets={numSets}
              setWeightValue={setWeightValue}
              setRepValue={setRepValue}
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
