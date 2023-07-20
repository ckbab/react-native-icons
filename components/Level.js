import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function Level({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  return (
    <Svg height={size} style={style} viewBox="0 0 1 1" width={size}>
      <G scale={1.3} translate={-0.15}>
        <Path
          d="M0.254839 0.365264l0.490323 0c0.074185,0 0.134732,0.0605472 0.134732,0.134732 0,0.074189 -0.0605433,0.13474 -0.134732,0.13474l-0.490323 0c-0.074185,0 -0.134732,-0.0605472 -0.134732,-0.134732 0,-0.074189 0.0605433,-0.13474 0.134732,-0.13474z"
          fill={outerBorder}
        />
        <Path
          d="M0.254839 0.391929l0.490323 0c0.0594685,0 0.108067,0.0485984 0.108067,0.108067 0,0.0594724 -0.0485945,0.108075 -0.108067,0.108075l-0.490323 0c-0.0594685,0 -0.108067,-0.0485984 -0.108067,-0.108067 0,-0.0594724 0.0485945,-0.108075 0.108067,-0.108075z"
          fill={innerBorder}
        />
        <Path
          d="M0.254839 0.408594l0.490323 0c0.0502717,0 0.0914016,0.0411299 0.0914016,0.0914016l0 7.87402e-006c0,0.0502717 -0.0411299,0.0914016 -0.0914016,0.0914016l-0.490323 0c-0.0502717,0 -0.0914016,-0.0411299 -0.0914016,-0.0914016l0 -7.87402e-006c0,-0.0502717 0.0411299,-0.0914016 0.0914016,-0.0914016z"
          fill={changeColor(color, "#fff", 0.4)}
        />
        <Path
          d="M0.652551 0.591406l0 -0.182811 -0.397713 0c-0.0502717,0 -0.0914016,0.0411299 -0.0914016,0.0914094 0,0.0502717 0.0411299,0.0914016 0.0914016,0.0914016l0.397713 0z"
          fill={color}
        />
        <Path
          d="M0.652551 0.535598l-0.417024 0c-0.0274646,0 -0.0526102,-0.0103661 -0.0717205,-0.0273819 0.00418504,0.0464606 0.0435276,0.083189 0.0910315,0.083189l0.397713 0 0 -0.0558071z"
          fill={background}
        />
      </G>
    </Svg>
  );
}
