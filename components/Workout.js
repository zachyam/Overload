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

export default Workout = ({ day, workout, workouts, setWorkouts }) => {
  const { handleSubmit, control, reset } = useForm();

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const deleteWorkout = () => {
    setWorkouts(() => {
      const newWorkoutState = { ...workouts };
      const newArray = newWorkoutState[day].filter(
        (value) => value !== workout
      );
      newWorkoutState[day] = newArray;
      return newWorkoutState;
    });
  };

  const editWorkout = (data) => {
    const { workoutToEdit } = data;

    setWorkouts(() => {
      // TODO: if the user renames 2 different workouts to the same workout name,
      // that workout will show up twice, and clicking delete on one of them will
      // delete them both
      const newWorkoutState = { ...workouts };
      const newArray = newWorkoutState[day].map((value) =>
        value === workout ? workoutToEdit : value
      );

      newWorkoutState[day] = newArray;
      return newWorkoutState;
    });
    console.log(workouts);

    closeModal();
  };

  return (
    <View style={styles.workoutContainer}>
      <Text style={styles.workoutText}>{workout}</Text>
      <Pressable style={styles.addWorkoutButton} onPress={openModal}>
        <View>
          <Text>Edit workout</Text>
        </View>
      </Pressable>
      <Pressable style={styles.deleteWorkoutButton} onPress={deleteWorkout}>
        <View>
          <Text>Delete workout</Text>
        </View>
      </Pressable>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Controller
            name="workoutToEdit"
            defaultValue={workout}
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
              style={styles.saveWorkout}
              onPress={handleSubmit(editWorkout)}
            >
              <Text>Save</Text>
            </Pressable>
            <Pressable style={styles.cancelWorkout} onPress={closeModal}>
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
  workoutContainer: {
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
  workoutText: {
    fontSize: 16,
    width: 50,
    textAlign: "center",
  },
  addWorkoutButton: {
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
  deleteWorkoutButton: {
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
  saveWorkout: {
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
  cancelWorkout: {
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
