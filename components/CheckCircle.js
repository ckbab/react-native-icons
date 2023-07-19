import React from "react";
import { Path, Svg } from "react-native-svg";

export default function CheckCircle({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  return (
    <Svg height={size} style={style} viewBox="0 0 1 1" width={size}>
      <Path
        d="M 0.5 1 C 0.226562 1 0.00390625 0.777344 0.00390625 0.5 C 0.00390625 0.226562 0.226562 0.00390625 0.5 0.00390625 C 0.777344 0.00390625 1 0.226562 1 0.5 C 1 0.777344 0.777344 1 0.5 1 Z M 0.5 1 "
        fill={outerBorder}
      />
      <Path
        d="M 0.5 0.957031 C 0.25 0.957031 0.0429688 0.753906 0.0429688 0.5 C 0.0429688 0.25 0.25 0.0429688 0.5 0.0429688 C 0.753906 0.0429688 0.957031 0.25 0.957031 0.5 C 0.957031 0.753906 0.753906 0.957031 0.5 0.957031 Z M 0.5 0.957031 "
        fill={innerBorder}
      />
      <Path
        d="M 0.5 0.957031 C 0.25 0.957031 0.0429688 0.753906 0.0429688 0.5 C 0.0429688 0.25 0.25 0.0429688 0.5 0.0429688 C 0.753906 0.0429688 0.957031 0.25 0.957031 0.5 C 0.957031 0.753906 0.753906 0.957031 0.5 0.957031 Z M 0.5 0.957031 "
        fill={innerBorder}
      />
      <Path
        d="M 0.5 0.933594 C 0.261719 0.933594 0.0703125 0.738281 0.0703125 0.5 C 0.0703125 0.261719 0.261719 0.0703125 0.5 0.0703125 C 0.738281 0.0703125 0.933594 0.261719 0.933594 0.5 C 0.933594 0.738281 0.738281 0.933594 0.5 0.933594 Z M 0.5 0.933594 "
        fill={background}
      />
      <Path
        d="M 0.5 0.0703125 C 0.738281 0.0703125 0.933594 0.261719 0.933594 0.5 C 0.933594 0.570312 0.914062 0.636719 0.886719 0.695312 C 0.785156 0.777344 0.648438 0.828125 0.5 0.828125 C 0.351562 0.828125 0.21875 0.777344 0.117188 0.695312 C 0.0859375 0.636719 0.0703125 0.570312 0.0703125 0.5 C 0.0703125 0.261719 0.261719 0.0703125 0.5 0.0703125 Z M 0.5 0.0703125 "
        fill={color}
      />
      <Path
        d="M 0.425781 0.539062 L 0.707031 0.253906 C 0.726562 0.238281 0.753906 0.238281 0.773438 0.253906 L 0.828125 0.308594 C 0.847656 0.328125 0.847656 0.355469 0.828125 0.375 C 0.703125 0.5 0.582031 0.621094 0.457031 0.746094 C 0.449219 0.753906 0.4375 0.761719 0.425781 0.761719 C 0.410156 0.757812 0.402344 0.753906 0.390625 0.746094 C 0.320312 0.671875 0.246094 0.601562 0.171875 0.527344 C 0.15625 0.511719 0.15625 0.480469 0.171875 0.460938 L 0.226562 0.40625 C 0.246094 0.390625 0.277344 0.390625 0.292969 0.40625 Z M 0.425781 0.539062 "
        fill={innerBorder}
      />
    </Svg>
  );
}
