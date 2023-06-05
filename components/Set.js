import React, { useState } from "react";
import { List } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Set(key, numSets) {
  const [weightValue, setWeightValue] = useState(0);
  const [repValue, setRepValue] = useState(0);

  const { handleSubmit, control } = useForm();

  const title = "Set " + key.setNumber;
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <List.Item title={title} titleStyle={styles.titleText} />
      </View>

      <View style={styles.column}>
        <Controller
          name="Weight"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              selectionColor={"#5188E3"}
              onChangeText={onChange}
              value={value}
              setValue={setWeightValue}
            />
          )}
        />
      </View>
      <View style={styles.column}>
        <Controller
          name="Rep"
          keyboardType="number-pad"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              selectionColor={"#5188E3"}
              onChangeText={onChange}
              value={value}
              setValue={setRepValue}
            />
          )}
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
