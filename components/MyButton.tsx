import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      <Text style={styles.word}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal:30,
    alignItems:"center",
    borderRadius: 10,
  },
  word: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
