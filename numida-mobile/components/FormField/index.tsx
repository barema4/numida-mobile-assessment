import Gap from "../Gap";
import { KeyboardTypeOptions, TextInput, Text, StyleSheet } from "react-native";

/**
 * Represents a form field component.
 *
 * @component
 * @param label - The label for the form field.
 * @param value - The current value of the form field.
 * @param placeholder - The placeholder text for the form field.
 * @param onChangeText - A callback function to handle text changes in the form field.
 * @param keyboardType - The type of keyboard to be displayed for the form field. Defaults to "default".
 */
const FormField = ({
  label,
  value,
  placeholder,
  onChangeText,
  keyboardType = "default",
}: {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      keyboardType={keyboardType}
    />
    <Gap />
  </>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 38,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#B1B1B1",
    borderRadius: 10,
    paddingHorizontal: 12,
    color: "#B1B1B1",
  },
});

export default FormField;
