import React from "react";
import { StyleSheet } from "react-native";

import ArrowLeft from "./ArrowLeft";

export default function ArrowRight({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  const props = { background, color, innerBorder, outerBorder, size };
  return <ArrowLeft style={[styles.container, style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    transform: [{ scaleX: -1 }],
  },
});
