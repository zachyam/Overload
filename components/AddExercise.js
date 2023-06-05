import { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-native-modal";
import DisplayAddedExercise from "./DisplayAddedExercise";

export default AddExercise = ({ day, exercises, setExercises }) => {
  const { handleSubmit, control, reset } = useForm();

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSave = (data) => {
    const { exerciseToAdd } = data;
    if (day in exercises) {
      // Key already exists, append the value to its array
      setExercises((exercises) => ({
        ...exercises,
        [day]: [...exercises[day], exerciseToAdd],
      }));
    } else {
      // Key doesn't exist, add a new array with the value
      setExercises((exercises) => ({
        ...exercises,
        [day]: [exerciseToAdd],
      }));
    }

    console.log(exercises);

    reset();
    setModalVisible(false);
  };

  const renderExercisesForDay = (day) => {
    if (exercises[day]) {
      return exercises[day].map((exercise, index) => (
        <DisplayAddedExercise
          day={day}
          exercise={exercise}
          exercises={exercises}
          setExercises={setExercises}
          key={index}
        />
      ));
    }
    return null;
  };

  return (
    <View>
      <View style={styles.exerciseDayContainer}>
        <Text style={styles.text}> Day {day}</Text>
        <Pressable style={styles.addExerciseButton} onPress={openModal}>
          <View style={styles.modalText}>
            <Text>Add exercise</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.exercises}>{renderExercisesForDay(day)}</View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(closeModal)}>
            <Text style={styles.modalX}>X</Text>
          </TouchableOpacity>
          <Controller
            name="exerciseToAdd"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <View style={styles.buttons}>
            <Pressable
              style={styles.saveExercise}
              onPress={handleSubmit(handleSave)}
            >
              <Text style={styles.text}>Save</Text>
            </Pressable>
            <Pressable style={styles.cancelSaveExercise}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    height: "50%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  exerciseDayContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ccc",
    height: 40,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  modalText: {
    flex: 1,
  },
  addExerciseButton: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#9ebdf0",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "green",
    backgroundColor: "white",
    marginLeft: "auto",
  },
  modalX: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 10,
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
    marginTop: 15,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  saveExercise: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 52,
    borderRadius: 4,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#50C878",
  },
  cancelSaveExercise: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 52,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#A52A2A",
  },
  exercises: {
    marginBottom: 20,
  },
  text: {
    width: 50,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
