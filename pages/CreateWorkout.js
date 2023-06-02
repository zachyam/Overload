import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wrgxdnmphneaeveqfvdm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ3hkbm1waG5lYWV2ZXFmdmRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNjk3NzAsImV4cCI6MTk5Njk0NTc3MH0.LpX88gnoXYVI-eZniokKQ7Z5Jo1_1N6u9AxE3VPQekA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CreateNewWorkout({ navigation }) {
  const [workoutName, setWorkoutName] = useState("");
  const [daysPerWeekOpen, setDaysPerWeekOpen] = useState(false);
  const [daysPerWeekValue, setDaysPerWeekValue] = useState(null);
  const [daysPerWeek, setDaysPerWeek] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
  ]);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    navigation.navigate({
      name: "Add Exercises",
      params: { workoutName: data.workoutName, daysPerWeek: data.daysPerWeek },
    });
  };

  async function getData() {
    const { data } = await supabase.from("workout_info").select();
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Workout Name</Text>
      <Controller
        name="workoutName"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            selectionColor={"#5188E3"}
            onChangeText={onChange}
            value={value}
            setValue={setWorkoutName}
          />
        )}
      />
      <Text style={styles.label}>Workout Days Per Week</Text>
      <Controller
        name="daysPerWeek"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownDaysPerWeek}>
            <DropDownPicker
              style={styles.dropdown}
              open={daysPerWeekOpen}
              value={daysPerWeekValue}
              items={daysPerWeek}
              setOpen={setDaysPerWeekOpen}
              setValue={setDaysPerWeekValue}
              setItems={setDaysPerWeek}
              placeholder="Select No. Of Days"
              placeholderStyle={styles.placeholderStyles}
              onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.createNewWorkout}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  label: {
    marginTop: 15,
    marginBottom: 7,
    marginStart: 10,
    fontSize: 18,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  dropdownDaysPerWeek: {
    marginHorizontal: 10,
    width: "80%",
    marginBottom: 15,
  },
  placeholderStyles: {
    color: "grey",
  },
  createNewWorkout: {
    borderStyle: "solid",
    borderColor: "#5188E3",
    padding: 40,
    borderWidth: 1,
    borderWidth: 2,
    marginHorizontal: 100,
    borderRadius: 50,
    padding: 10,
    marginTop: 350,
  },
  text: {
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
});
