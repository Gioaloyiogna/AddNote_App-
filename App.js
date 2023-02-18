import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BackButton from "./components/BackButton";
import Header from "./components/Header";
import { screenType } from "./constants/constants";
import AddNoteScreen from "./screens/AddNoteScreen";
import AllNoteScreen from "./screens/AllNoteScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [screen, setScreen] = useState(screenType.home);
  const [notes, setNotes] = useState([]);
  let content;
if (screen === screenType.addNote) {
    content = (
      <AddNoteScreen
        onSave={(data) => {
          setNotes([...notes, { id: Date.now(), note: data }]);
        }}
      />
    );
  } else if (screen === screenType.allNotes) {
    content = <AllNoteScreen notes={notes} />;
  } else if (screen === screenType.home) {
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <BackButton
        onButtonClick={(data) => {
          setScreen(data);
        }}
      />
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
