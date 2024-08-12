import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/**
 * OutlinedButton component.
 *
 * @component
 * @param onPress - Function to be called when the button is pressed.
 * @param title - The title of the button. Default value is "Save".
 * @param style - Additional styles to be applied to the button.
 * @param textStyle - Additional styles to be applied to the button's text.
 * @returns A React element representing the OutlinedButton.
 */
const OutlinedButton: React.FC<ButtonProps> = ({
  onPress,
  title = "Save",
  style,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress} testID="button">
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <Image source={require("../../assets/images/arrow.png")} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 30,
    borderRadius: 30,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#30C2E3",
  },
  text: {
    fontSize: 13,
  },
});

export default OutlinedButton;
