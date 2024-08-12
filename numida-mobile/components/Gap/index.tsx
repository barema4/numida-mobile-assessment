import React from "react";
import { View, StyleSheet } from "react-native";

interface GapProps {
  width?: number;
  height?: number;
}

/**
 * Gap component.
 *
 * @component
 * @param {number} props.width - The width of the gap. Defaults to 100.
 * @param {number} props.height - The height of the gap. Defaults to 20.
 * @returns {ReactNode} The rendered Gap component.
 */
const Gap: React.FC<GapProps> = ({ width, height }) => {
  return (
    <View
      style={[styles.gap, { width: width || 100, height: height || 20 }]}
      testID="gap"
    />
  );
};

const styles = StyleSheet.create({
  gap: {
    backgroundColor: "transparent",
  },
});

export default Gap;
