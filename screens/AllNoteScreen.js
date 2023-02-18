import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItems from "../components/ListItems";

const AllNoteScreen = ({ notes }) => {
  const renderItem = (itemData) => {
   
    return <ListItems note={itemData.item.note} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>All Notes</Text>
      <FlatList data={notes} renderItem={renderItem} />
    </View>
  );
};

export default AllNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  noteTitle:{
    fontSize:30,
    fontWeight:"700",
    borderWidth:4,
    borderRadius:10,
    borderColor:"#f5f5f5",
    padding:10
  }
});
