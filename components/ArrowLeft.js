import React from "react";
import { Path, Svg } from "react-native-svg";

export default function ArrowLeft({
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
        d="M 0.515625 0.261719 L 0.867188 0.261719 C 0.929688 0.261719 0.980469 0.3125 0.980469 0.375 L 0.980469 0.625 C 0.980469 0.6875 0.929688 0.738281 0.867188 0.738281 L 0.515625 0.738281 L 0.515625 0.84375 L 0.5 0.863281 C 0.453125 0.910156 0.378906 0.910156 0.335938 0.863281 L 0.0546875 0.582031 C 0.0078125 0.535156 0.0078125 0.464844 0.0546875 0.417969 L 0.335938 0.136719 C 0.378906 0.0898438 0.453125 0.0898438 0.5 0.136719 L 0.515625 0.15625 Z M 0.515625 0.261719 "
        fill={outerBorder}
      />
      <Path
        d="M 0.476562 0.300781 L 0.867188 0.300781 C 0.90625 0.300781 0.941406 0.335938 0.941406 0.375 L 0.941406 0.625 C 0.941406 0.667969 0.90625 0.699219 0.867188 0.699219 L 0.476562 0.699219 L 0.476562 0.828125 L 0.46875 0.835938 C 0.441406 0.863281 0.394531 0.863281 0.363281 0.835938 L 0.0820312 0.554688 C 0.0507812 0.523438 0.0507812 0.476562 0.0820312 0.449219 L 0.363281 0.164062 C 0.394531 0.136719 0.441406 0.136719 0.46875 0.164062 L 0.476562 0.171875 Z M 0.476562 0.300781 "
        fill={innerBorder}
      />
      <Path
        d="M 0.0976562 0.464844 L 0.382812 0.183594 C 0.402344 0.164062 0.433594 0.164062 0.453125 0.183594 L 0.453125 0.324219 L 0.867188 0.324219 C 0.894531 0.324219 0.914062 0.347656 0.914062 0.375 L 0.914062 0.625 C 0.914062 0.652344 0.894531 0.675781 0.867188 0.675781 L 0.453125 0.675781 L 0.453125 0.816406 C 0.433594 0.835938 0.402344 0.835938 0.382812 0.816406 L 0.0976562 0.535156 C 0.078125 0.515625 0.078125 0.484375 0.0976562 0.464844 Z M 0.0976562 0.464844 "
        fill={background}
      />
      <Path
        d="M 0.265625 0.296875 L 0.382812 0.183594 C 0.402344 0.164062 0.433594 0.164062 0.453125 0.183594 L 0.453125 0.324219 L 0.867188 0.324219 C 0.894531 0.324219 0.914062 0.347656 0.914062 0.375 L 0.914062 0.601562 C 0.863281 0.617188 0.808594 0.625 0.75 0.625 C 0.515625 0.625 0.320312 0.484375 0.265625 0.296875 Z M 0.265625 0.296875 "
        fill={color}
      />
    </Svg>
  );
}
