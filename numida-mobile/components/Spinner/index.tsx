import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

const Spinner: React.FC<ActivityIndicatorProps> = (props) => {
  return (
    <ActivityIndicator
      size={props?.size || "large"}
      color="#30C2E3"
      {...props}
      testID="spinner"
    />
  );
};

export default Spinner;
