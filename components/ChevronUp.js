import React from "react";
import { StyleSheet } from "react-native";

import ChevronLeft from "./ChevronLeft";

export default function ChevronUp({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  const props = { background, color, innerBorder, outerBorder, size };
  return <ChevronLeft style={[styles.container, style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    transform: [{ rotate: "90deg" }],
  },
});
