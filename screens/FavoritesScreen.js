import { View, Text, StyleSheet } from "react-native";

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The favorites screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f2f25",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default FavoritesScreen;
