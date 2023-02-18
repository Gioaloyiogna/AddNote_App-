import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItems = ({ note }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textNote}>{note}</Text>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 4,
    borderColor: "purple",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff000",
    marginTop: 10,
  },
  textNote: {
    fontSize: 20,
    fontWeight: "400",
  },
});
