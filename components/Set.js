import React, { useState } from "react";
import { List } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Set({
  exerciseName,
  setNumber,
  numSets,
  weightValues,
  setWeightValues,
  repValues,
  setRepValues,
}) {
  const title = "Set " + setNumber;
  const handleSaveWeightValue = (data) => {
    // console.log(weightValues);
    setWeightValues((weightValues) => ({
      ...weightValues,
      [exerciseName]: {
        ...(weightValues[exerciseName] || {}),
        [setNumber]: data,
      },
    }));
  };

  const handleSaveRepValue = (data) => {
    console.log(repValues);
    setRepValues((repValues) => ({
      ...repValues,
      [exerciseName]: {
        ...(repValues[exerciseName] || {}),
        [setNumber]: data,
      },
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <List.Item title={title} titleStyle={styles.titleText} />
      </View>

      <View style={styles.column}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={handleSaveWeightValue}
          value={weightValues[exerciseName]?.[setNumber] || ""}
        />
      </View>
      <View style={styles.column}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={handleSaveRepValue}
          value={repValues[exerciseName]?.[setNumber] || ""}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.text}> hello</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}> hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingLeft: 3,
    paddingBottom: 10,
  },
  column: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 15,
    height: 30,
    paddingLeft: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
  },
  titleText: {
    fontSize: 14,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
  },
});
