import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { screenType } from "../constants/constants";
const HomeScreen = ({onExit}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>onExit(screenType.addNote)}>
        <View style={styles.buttonItem}>
          <Text style={styles.title}>Add New Note</Text>
          <Icon style={styles.icon} name="arrow-forward-outline" />
        </View>
      </Pressable>
      <Pressable onPress={()=>onExit(screenType.allNotes)}>
        <View style={styles.buttonItem}>
          <Text style={styles.title}>View All Notes</Text>
          <Icon style={styles.icon} name="arrow-forward-outline" />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
  },
  buttonItem: {
    width: Dimensions.get("window").width - 100,
    height: "50%",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation:10,
    shadowOffset:{width:2,height:10},
    shadowColor:"black",
    shadowOpacity:0.3,
    shadowRadius:2

  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon:{
    fontSize:20,
    paddingTop:10
  }
});
