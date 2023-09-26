import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function Unlock({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  return (
    <Svg height={size} style={style} viewBox="0 0 1 1" width={size}>
      <G scale={1.23} translate={-0.115}>
        <Path
          d="M 0.285156 0.480469 L 0.285156 0.261719 C 0.285156 0.171875 0.359375 0.09375 0.453125 0.09375 L 0.546875 0.09375 C 0.640625 0.09375 0.714844 0.171875 0.714844 0.261719 L 0.714844 0.300781 C 0.714844 0.335938 0.683594 0.367188 0.644531 0.367188 C 0.609375 0.367188 0.578125 0.34375 0.574219 0.308594 L 0.574219 0.261719 C 0.574219 0.246094 0.5625 0.234375 0.546875 0.234375 L 0.453125 0.234375 C 0.4375 0.234375 0.425781 0.246094 0.425781 0.261719 C 0.425781 0.320312 0.425781 0.378906 0.425781 0.4375 L 0.425781 0.480469 Z M 0.285156 0.480469"
          fill={outerBorder}
        />
        <Path
          d="M 0.3125 0.453125 L 0.3125 0.261719 C 0.3125 0.183594 0.375 0.117188 0.453125 0.117188 L 0.546875 0.117188 C 0.625 0.117188 0.6875 0.183594 0.6875 0.261719 L 0.6875 0.300781 C 0.6875 0.324219 0.667969 0.34375 0.644531 0.34375 C 0.625 0.34375 0.605469 0.328125 0.601562 0.304688 L 0.601562 0.261719 C 0.601562 0.234375 0.578125 0.207031 0.546875 0.207031 L 0.453125 0.207031 C 0.421875 0.207031 0.398438 0.234375 0.398438 0.261719 C 0.398438 0.320312 0.398438 0.378906 0.398438 0.4375 L 0.398438 0.453125 Z M 0.3125 0.453125"
          fill={innerBorder}
        />
        <Path
          d="M 0.328125 0.4375 L 0.382812 0.4375 C 0.382812 0.378906 0.382812 0.320312 0.382812 0.261719 C 0.382812 0.222656 0.414062 0.191406 0.453125 0.191406 L 0.546875 0.191406 C 0.585938 0.191406 0.617188 0.222656 0.617188 0.261719 L 0.617188 0.304688 C 0.621094 0.316406 0.632812 0.324219 0.644531 0.324219 C 0.660156 0.324219 0.671875 0.3125 0.671875 0.296875 L 0.671875 0.261719 C 0.671875 0.191406 0.617188 0.136719 0.546875 0.136719 L 0.453125 0.136719 C 0.386719 0.136719 0.328125 0.191406 0.328125 0.261719 Z M 0.328125 0.4375"
          fill={background}
        />
        <Path
          d="M 0.382812 0.304688 C 0.382812 0.289062 0.382812 0.277344 0.382812 0.261719 C 0.382812 0.222656 0.414062 0.191406 0.453125 0.191406 L 0.546875 0.191406 C 0.585938 0.191406 0.617188 0.222656 0.617188 0.261719 L 0.617188 0.304688 C 0.621094 0.316406 0.632812 0.324219 0.644531 0.324219 C 0.660156 0.324219 0.671875 0.3125 0.671875 0.296875 L 0.671875 0.261719 C 0.671875 0.191406 0.617188 0.136719 0.546875 0.136719 L 0.453125 0.136719 C 0.386719 0.136719 0.328125 0.191406 0.328125 0.261719 L 0.328125 0.292969 C 0.347656 0.296875 0.363281 0.300781 0.382812 0.304688 Z M 0.382812 0.304688"
          fill={color}
        />
        <Path
          d="M 0.28125 0.4375 L 0.71875 0.4375 C 0.785156 0.4375 0.839844 0.492188 0.839844 0.558594 L 0.839844 0.785156 C 0.839844 0.851562 0.785156 0.90625 0.71875 0.90625 L 0.28125 0.90625 C 0.214844 0.90625 0.160156 0.851562 0.160156 0.785156 L 0.160156 0.558594 C 0.160156 0.492188 0.214844 0.4375 0.28125 0.4375 Z M 0.28125 0.4375"
          fill={outerBorder}
        />
        <Path
          d="M 0.28125 0.464844 L 0.71875 0.464844 C 0.773438 0.464844 0.816406 0.507812 0.816406 0.558594 L 0.816406 0.785156 C 0.816406 0.839844 0.773438 0.882812 0.71875 0.882812 L 0.28125 0.882812 C 0.226562 0.882812 0.183594 0.839844 0.183594 0.785156 L 0.183594 0.558594 C 0.183594 0.507812 0.226562 0.464844 0.28125 0.464844 Z M 0.28125 0.464844"
          fill={innerBorder}
        />
        <Path
          d="M 0.28125 0.480469 L 0.71875 0.480469 C 0.761719 0.480469 0.796875 0.515625 0.796875 0.558594 L 0.796875 0.785156 C 0.796875 0.828125 0.761719 0.863281 0.71875 0.863281 L 0.28125 0.863281 C 0.238281 0.863281 0.203125 0.828125 0.203125 0.785156 L 0.203125 0.558594 C 0.203125 0.515625 0.238281 0.480469 0.28125 0.480469 Z M 0.28125 0.480469"
          fill={background}
        />
        <Path
          d="M 0.28125 0.480469 L 0.71875 0.480469 C 0.761719 0.480469 0.796875 0.515625 0.796875 0.558594 L 0.796875 0.761719 C 0.710938 0.792969 0.609375 0.808594 0.5 0.808594 C 0.390625 0.808594 0.289062 0.792969 0.203125 0.761719 L 0.203125 0.558594 C 0.203125 0.515625 0.238281 0.480469 0.28125 0.480469 Z M 0.28125 0.480469"
          fill={color}
        />
        <Path
          d="M 0.5 0.566406 C 0.53125 0.566406 0.558594 0.59375 0.558594 0.625 C 0.558594 0.644531 0.546875 0.660156 0.535156 0.671875 L 0.535156 0.746094 C 0.535156 0.761719 0.519531 0.777344 0.5 0.777344 C 0.480469 0.777344 0.464844 0.761719 0.464844 0.746094 L 0.464844 0.671875 C 0.453125 0.660156 0.441406 0.644531 0.441406 0.625 C 0.441406 0.59375 0.46875 0.566406 0.5 0.566406 Z M 0.5 0.566406"
          fill={outerBorder}
        />
      </G>
    </Svg>
  );
}