import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function Hotel({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  return (
    <Svg height={size} style={style} viewBox="0 0 1 1" width={size}>
      <G scale={1.14} translate={-0.07}>
        <Path
          d="M 0.308594 0.257812 L 0.308594 0.148438 C 0.308594 0.109375 0.339844 0.0742188 0.382812 0.0742188 L 0.617188 0.0742188 C 0.660156 0.0742188 0.691406 0.109375 0.691406 0.148438 L 0.691406 0.257812 Z M 0.308594 0.257812 "
          fill={outerBorder}
        />
        <Path
          d="M 0.332031 0.234375 L 0.332031 0.148438 C 0.332031 0.121094 0.355469 0.101562 0.382812 0.101562 L 0.617188 0.101562 C 0.644531 0.101562 0.667969 0.121094 0.667969 0.148438 L 0.667969 0.234375 Z M 0.332031 0.234375 "
          fill={innerBorder}
        />
        <Path
          d="M 0.351562 0.214844 L 0.648438 0.214844 L 0.648438 0.148438 C 0.648438 0.132812 0.636719 0.117188 0.617188 0.117188 L 0.382812 0.117188 C 0.363281 0.117188 0.351562 0.132812 0.351562 0.148438 Z M 0.351562 0.214844 "
          fill={color}
        />
        <Path
          d="M 0.332031 0.925781 C 0.292969 0.925781 0.257812 0.890625 0.257812 0.851562 L 0.257812 0.351562 C 0.257812 0.308594 0.292969 0.273438 0.332031 0.273438 L 0.667969 0.273438 C 0.707031 0.273438 0.742188 0.308594 0.742188 0.351562 L 0.742188 0.851562 C 0.742188 0.890625 0.707031 0.925781 0.667969 0.925781 Z M 0.332031 0.925781 "
          fill={outerBorder}
        />
        <Path
          d="M 0.332031 0.898438 C 0.304688 0.898438 0.285156 0.878906 0.285156 0.851562 L 0.285156 0.351562 C 0.285156 0.324219 0.304688 0.300781 0.332031 0.300781 L 0.667969 0.300781 C 0.695312 0.300781 0.714844 0.324219 0.714844 0.351562 L 0.714844 0.851562 C 0.714844 0.878906 0.695312 0.898438 0.667969 0.898438 Z M 0.332031 0.898438 "
          fill={innerBorder}
        />
        <Path
          d="M 0.332031 0.882812 L 0.667969 0.882812 C 0.683594 0.882812 0.699219 0.867188 0.699219 0.851562 L 0.699219 0.351562 C 0.699219 0.332031 0.683594 0.316406 0.667969 0.316406 L 0.332031 0.316406 C 0.316406 0.316406 0.300781 0.332031 0.300781 0.351562 L 0.300781 0.851562 C 0.300781 0.867188 0.316406 0.882812 0.332031 0.882812 Z M 0.332031 0.882812 "
          fill={color}
        />
        <Path
          d="M 0.300781 0.34375 C 0.265625 0.34375 0.238281 0.316406 0.238281 0.285156 L 0.238281 0.25 C 0.238281 0.214844 0.265625 0.191406 0.300781 0.191406 L 0.699219 0.191406 C 0.734375 0.191406 0.761719 0.214844 0.761719 0.25 L 0.761719 0.285156 C 0.761719 0.316406 0.734375 0.34375 0.699219 0.34375 Z M 0.300781 0.34375 "
          fill={outerBorder}
        />
        <Path
          d="M 0.300781 0.316406 C 0.28125 0.316406 0.265625 0.300781 0.265625 0.285156 L 0.265625 0.25 C 0.265625 0.230469 0.28125 0.214844 0.300781 0.214844 L 0.699219 0.214844 C 0.71875 0.214844 0.734375 0.230469 0.734375 0.25 L 0.734375 0.285156 C 0.734375 0.300781 0.71875 0.316406 0.699219 0.316406 Z M 0.300781 0.316406 "
          fill={innerBorder}
        />
        <Path
          d="M 0.300781 0.300781 L 0.699219 0.300781 C 0.710938 0.300781 0.714844 0.292969 0.714844 0.285156 L 0.714844 0.25 C 0.714844 0.242188 0.710938 0.234375 0.699219 0.234375 L 0.300781 0.234375 C 0.289062 0.234375 0.285156 0.242188 0.285156 0.25 L 0.285156 0.285156 C 0.285156 0.292969 0.289062 0.300781 0.300781 0.300781 Z M 0.300781 0.300781 "
          fill={color}
        />
        <Path
          d="M 0.550781 0.535156 L 0.617188 0.535156 C 0.636719 0.535156 0.648438 0.546875 0.648438 0.566406 L 0.648438 0.632812 C 0.648438 0.652344 0.636719 0.667969 0.617188 0.667969 L 0.550781 0.667969 C 0.53125 0.667969 0.515625 0.652344 0.515625 0.632812 L 0.515625 0.566406 C 0.515625 0.546875 0.53125 0.535156 0.550781 0.535156 Z M 0.417969 0.898438 L 0.417969 0.734375 C 0.417969 0.714844 0.429688 0.699219 0.449219 0.699219 L 0.550781 0.699219 C 0.570312 0.699219 0.582031 0.714844 0.582031 0.734375 L 0.582031 0.898438 Z M 0.550781 0.382812 L 0.617188 0.382812 C 0.636719 0.382812 0.648438 0.398438 0.648438 0.417969 L 0.648438 0.484375 C 0.648438 0.503906 0.636719 0.515625 0.617188 0.515625 L 0.550781 0.515625 C 0.53125 0.515625 0.515625 0.503906 0.515625 0.484375 L 0.515625 0.417969 C 0.515625 0.398438 0.53125 0.382812 0.550781 0.382812 Z M 0.382812 0.382812 L 0.449219 0.382812 C 0.46875 0.382812 0.484375 0.398438 0.484375 0.417969 L 0.484375 0.484375 C 0.484375 0.503906 0.46875 0.515625 0.449219 0.515625 L 0.382812 0.515625 C 0.363281 0.515625 0.351562 0.503906 0.351562 0.484375 L 0.351562 0.417969 C 0.351562 0.398438 0.363281 0.382812 0.382812 0.382812 Z M 0.382812 0.535156 L 0.449219 0.535156 C 0.46875 0.535156 0.484375 0.546875 0.484375 0.566406 L 0.484375 0.632812 C 0.484375 0.652344 0.46875 0.667969 0.449219 0.667969 L 0.382812 0.667969 C 0.363281 0.667969 0.351562 0.652344 0.351562 0.632812 L 0.351562 0.566406 C 0.351562 0.546875 0.363281 0.535156 0.382812 0.535156 Z M 0.382812 0.535156 "
          fill={innerBorder}
        />
        <Path
          d="M 0.550781 0.550781 L 0.617188 0.550781 C 0.625 0.550781 0.632812 0.558594 0.632812 0.566406 L 0.632812 0.632812 C 0.632812 0.644531 0.625 0.648438 0.617188 0.648438 L 0.550781 0.648438 C 0.539062 0.648438 0.535156 0.644531 0.535156 0.632812 L 0.535156 0.566406 C 0.535156 0.558594 0.539062 0.550781 0.550781 0.550781 Z M 0.433594 0.882812 L 0.566406 0.882812 L 0.566406 0.734375 C 0.566406 0.722656 0.558594 0.71875 0.550781 0.71875 L 0.449219 0.71875 C 0.441406 0.71875 0.433594 0.722656 0.433594 0.734375 Z M 0.550781 0.398438 L 0.617188 0.398438 C 0.625 0.398438 0.632812 0.40625 0.632812 0.417969 L 0.632812 0.484375 C 0.632812 0.492188 0.625 0.5 0.617188 0.5 L 0.550781 0.5 C 0.539062 0.5 0.535156 0.492188 0.535156 0.484375 L 0.535156 0.417969 C 0.535156 0.40625 0.539062 0.398438 0.550781 0.398438 Z M 0.382812 0.398438 L 0.449219 0.398438 C 0.460938 0.398438 0.464844 0.40625 0.464844 0.417969 L 0.464844 0.484375 C 0.464844 0.492188 0.460938 0.5 0.449219 0.5 L 0.382812 0.5 C 0.375 0.5 0.367188 0.492188 0.367188 0.484375 L 0.367188 0.417969 C 0.367188 0.40625 0.375 0.398438 0.382812 0.398438 Z M 0.382812 0.550781 L 0.449219 0.550781 C 0.460938 0.550781 0.464844 0.558594 0.464844 0.566406 L 0.464844 0.632812 C 0.464844 0.644531 0.460938 0.648438 0.449219 0.648438 L 0.382812 0.648438 C 0.375 0.648438 0.367188 0.644531 0.367188 0.632812 L 0.367188 0.566406 C 0.367188 0.558594 0.375 0.550781 0.382812 0.550781 Z M 0.382812 0.550781 "
          fill={background}
        />
      </G>
    </Svg>
  );
}
