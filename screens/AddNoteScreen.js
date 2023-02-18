import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddNoteScreen = ({ onSave }) => {
  const [enteredText, setEnteredText] = useState("");
  const handleChangeText = (val) => {
    setEnteredText(val);
  };
  const handleClick = () => {
    // if (enteredText.length > 0) {
    onSave(enteredText);
    console.log(enteredText);
    // }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        <View>
          <TextInput style={styles.input} onChangeText={handleChangeText} />
        </View>
        <Button title="Add" onPress={handleClick} />
      </View>
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    fontSize: 16,
    marginVertical: 20,
    padding: 10,
    borderBottomWidth: 2,
  },
});
