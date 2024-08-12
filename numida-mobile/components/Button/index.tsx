import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import Spinner from "../Spinner";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title = "Save",
  style,
  textStyle,
  loading,
  disabled,
}) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      disabled={loading || disabled}
      testID="button"
    >
      {loading ? (
        <Spinner color="#fff" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "100%",
    height: 60,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Button;
