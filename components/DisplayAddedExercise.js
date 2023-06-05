import { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-native-modal";

export default Exercise = ({ day, exercise, exercises, setExercises }) => {
  const { handleSubmit, control, reset } = useForm();

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const deleteExercise = () => {
    setExercises(() => {
      const newWorkoutState = { ...exercises };
      const newArray = newWorkoutState[day].filter(
        (value) => value !== exercise
      );
      newWorkoutState[day] = newArray;
      return newWorkoutState;
    });
  };

  const editExercise = (data) => {
    const { exerciseToEdit } = data;

    setExercises(() => {
      // TODO: if the user renames 2 different exercises to the same name,
      // that exercise will show up twice, and clicking delete on one of them will
      // delete them both
      const newWorkoutState = { ...exercises };
      const newArray = newWorkoutState[day].map((value) =>
        value === exercise ? exerciseToEdit : value
      );

      newWorkoutState[day] = newArray;
      return newWorkoutState;
    });
    console.log(exercises);

    closeModal();
  };

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}>{exercise}</Text>
      <Pressable style={styles.addExerciseButton} onPress={openModal}>
        <View>
          <Text>Edit exercise</Text>
        </View>
      </Pressable>
      <Pressable style={styles.deleteExerciseButton} onPress={deleteExercise}>
        <View>
          <Text>Delete exercise</Text>
        </View>
      </Pressable>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Controller
            name="exerciseToEdit"
            defaultValue={exercise}
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
              onPress={handleSubmit(editExercise)}
            >
              <Text>Save</Text>
            </Pressable>
            <Pressable style={styles.cancelEditExercise} onPress={closeModal}>
              <Text>Cancel</Text>
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
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingVertical: 10,
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
  exerciseText: {
    fontSize: 16,
    width: 50,
    textAlign: "center",
  },
  addExerciseButton: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: "#9ebdf0",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#5188E3",
    backgroundColor: "white",
    marginLeft: "auto",
  },
  deleteExerciseButton: {
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
    borderColor: "red",
    backgroundColor: "white",
    marginLeft: "auto",
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
  cancelEditExercise: {
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
});
