import React from "react";
import { Path, Svg } from "react-native-svg";

export default function Stadium({
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
        d="M 0.0820312 0.523438 L 0.917969 0.523438 L 0.921875 0.5625 C 0.925781 0.671875 0.828125 0.773438 0.734375 0.839844 L 0.722656 0.847656 L 0.277344 0.847656 L 0.265625 0.839844 C 0.171875 0.773438 0.0742188 0.671875 0.078125 0.5625 Z M 0.0820312 0.523438 "
        fill={outerBorder}
      />
      <Path
        d="M 0.105469 0.546875 L 0.894531 0.546875 L 0.894531 0.5625 C 0.898438 0.664062 0.804688 0.761719 0.71875 0.824219 L 0.714844 0.828125 L 0.285156 0.828125 L 0.28125 0.824219 C 0.195312 0.761719 0.101562 0.664062 0.105469 0.5625 Z M 0.105469 0.546875 "
        fill={innerBorder}
      />
      <Path
        d="M 0.125 0.5625 L 0.875 0.5625 C 0.878906 0.644531 0.8125 0.734375 0.707031 0.8125 L 0.292969 0.8125 C 0.1875 0.734375 0.121094 0.644531 0.125 0.5625 Z M 0.125 0.5625 "
        fill={color}
      />
      <Path
        d="M 0.125 0.5625 L 0.875 0.5625 C 0.878906 0.597656 0.867188 0.632812 0.847656 0.667969 C 0.824219 0.691406 0.792969 0.710938 0.765625 0.726562 C 0.683594 0.765625 0.585938 0.78125 0.5 0.78125 C 0.414062 0.78125 0.316406 0.765625 0.234375 0.726562 C 0.207031 0.710938 0.175781 0.691406 0.152344 0.667969 C 0.132812 0.632812 0.121094 0.597656 0.125 0.5625 Z M 0.125 0.5625 "
        fill={background}
      />
      <Path
        d="M 0.171875 0.5625 L 0.207031 0.5625 L 0.378906 0.8125 L 0.347656 0.8125 Z M 0.488281 0.5625 L 0.511719 0.5625 L 0.511719 0.8125 L 0.488281 0.8125 Z M 0.792969 0.5625 L 0.828125 0.5625 L 0.652344 0.8125 L 0.621094 0.8125 Z M 0.792969 0.5625 "
        fill={outerBorder}
      />
      <Path
        d="M 0.921875 0.539062 C 0.921875 0.617188 0.847656 0.667969 0.785156 0.695312 C 0.699219 0.734375 0.59375 0.746094 0.5 0.746094 C 0.40625 0.746094 0.300781 0.734375 0.214844 0.695312 C 0.152344 0.667969 0.078125 0.617188 0.078125 0.539062 C 0.078125 0.460938 0.152344 0.410156 0.214844 0.382812 C 0.300781 0.34375 0.40625 0.328125 0.5 0.328125 C 0.59375 0.328125 0.699219 0.34375 0.785156 0.382812 C 0.847656 0.410156 0.921875 0.460938 0.921875 0.539062 Z M 0.921875 0.539062 "
        fill={outerBorder}
      />
      <Path
        d="M 0.894531 0.539062 C 0.894531 0.605469 0.828125 0.648438 0.773438 0.671875 C 0.691406 0.707031 0.589844 0.71875 0.5 0.71875 C 0.410156 0.71875 0.308594 0.707031 0.226562 0.671875 C 0.171875 0.648438 0.105469 0.605469 0.105469 0.539062 C 0.105469 0.472656 0.171875 0.429688 0.226562 0.40625 C 0.308594 0.371094 0.410156 0.355469 0.5 0.355469 C 0.589844 0.355469 0.691406 0.371094 0.773438 0.40625 C 0.828125 0.429688 0.894531 0.472656 0.894531 0.539062 Z M 0.894531 0.539062 "
        fill={innerBorder}
      />
      <Path
        d="M 0.5 0.375 C 0.707031 0.375 0.878906 0.445312 0.878906 0.539062 C 0.878906 0.628906 0.707031 0.703125 0.5 0.703125 C 0.292969 0.703125 0.121094 0.628906 0.121094 0.539062 C 0.121094 0.445312 0.292969 0.375 0.5 0.375 Z M 0.5 0.375 "
        fill={color}
      />
      <Path
        d="M 0.5 0.402344 C 0.683594 0.402344 0.835938 0.457031 0.871094 0.523438 C 0.875 0.53125 0.875 0.539062 0.875 0.546875 C 0.878906 0.542969 0.878906 0.542969 0.878906 0.539062 C 0.878906 0.535156 0.875 0.53125 0.875 0.523438 C 0.859375 0.441406 0.699219 0.375 0.5 0.375 C 0.300781 0.375 0.140625 0.441406 0.125 0.523438 C 0.125 0.53125 0.121094 0.535156 0.121094 0.539062 C 0.121094 0.542969 0.121094 0.542969 0.125 0.546875 C 0.125 0.539062 0.125 0.53125 0.128906 0.523438 C 0.164062 0.457031 0.316406 0.402344 0.5 0.402344 Z M 0.5 0.402344 "
        fill={background}
      />
      <Path
        d="M 0.5 0.441406 C 0.558594 0.441406 0.625 0.449219 0.679688 0.472656 C 0.71875 0.488281 0.769531 0.515625 0.769531 0.566406 C 0.769531 0.617188 0.71875 0.648438 0.679688 0.664062 C 0.625 0.683594 0.558594 0.695312 0.5 0.695312 C 0.441406 0.695312 0.375 0.683594 0.320312 0.664062 C 0.28125 0.648438 0.230469 0.617188 0.230469 0.566406 C 0.230469 0.515625 0.28125 0.488281 0.320312 0.472656 C 0.375 0.449219 0.441406 0.441406 0.5 0.441406 Z M 0.5 0.441406 "
        fill={background}
      />
      <Path
        d="M 0.652344 0.386719 C 0.664062 0.390625 0.675781 0.390625 0.683594 0.394531 L 0.542969 0.535156 L 0.828125 0.457031 C 0.835938 0.464844 0.84375 0.472656 0.851562 0.480469 L 0.550781 0.558594 L 0.8125 0.628906 C 0.804688 0.636719 0.792969 0.644531 0.78125 0.648438 L 0.542969 0.585938 L 0.648438 0.691406 C 0.640625 0.691406 0.628906 0.695312 0.617188 0.695312 L 0.511719 0.589844 L 0.511719 0.703125 C 0.507812 0.703125 0.503906 0.703125 0.5 0.703125 C 0.496094 0.703125 0.492188 0.703125 0.488281 0.703125 L 0.488281 0.589844 L 0.382812 0.695312 C 0.371094 0.695312 0.359375 0.691406 0.351562 0.691406 L 0.457031 0.585938 L 0.21875 0.648438 C 0.207031 0.644531 0.195312 0.636719 0.1875 0.628906 L 0.449219 0.558594 L 0.148438 0.480469 C 0.15625 0.472656 0.164062 0.464844 0.171875 0.457031 L 0.457031 0.535156 L 0.316406 0.394531 C 0.324219 0.390625 0.335938 0.390625 0.347656 0.386719 L 0.488281 0.527344 L 0.488281 0.375 C 0.492188 0.375 0.496094 0.375 0.5 0.375 C 0.503906 0.375 0.507812 0.375 0.511719 0.375 L 0.511719 0.527344 Z M 0.652344 0.386719 "
        fill={outerBorder}
      />
      <Path
        d="M 0.5 0.441406 C 0.558594 0.441406 0.625 0.449219 0.679688 0.46875 C 0.71875 0.484375 0.769531 0.511719 0.769531 0.558594 C 0.769531 0.605469 0.71875 0.632812 0.679688 0.648438 C 0.625 0.667969 0.558594 0.675781 0.5 0.675781 C 0.441406 0.675781 0.375 0.667969 0.320312 0.648438 C 0.28125 0.632812 0.230469 0.605469 0.230469 0.558594 C 0.230469 0.511719 0.28125 0.484375 0.320312 0.46875 C 0.375 0.449219 0.441406 0.441406 0.5 0.441406 Z M 0.5 0.441406 "
        fill={outerBorder}
      />
      <Path
        d="M 0.5 0.46875 C 0.632812 0.46875 0.742188 0.507812 0.742188 0.558594 C 0.742188 0.609375 0.632812 0.648438 0.5 0.648438 C 0.367188 0.648438 0.257812 0.609375 0.257812 0.558594 C 0.257812 0.507812 0.367188 0.46875 0.5 0.46875 Z M 0.5 0.46875 "
        fill={innerBorder}
      />
      <Path
        d="M 0.5 0.484375 C 0.445312 0.484375 0.382812 0.492188 0.332031 0.511719 C 0.316406 0.515625 0.273438 0.535156 0.273438 0.558594 C 0.273438 0.582031 0.316406 0.601562 0.332031 0.609375 C 0.382812 0.628906 0.445312 0.632812 0.5 0.632812 C 0.554688 0.632812 0.617188 0.628906 0.667969 0.609375 C 0.683594 0.601562 0.726562 0.582031 0.726562 0.558594 C 0.726562 0.535156 0.683594 0.515625 0.667969 0.511719 C 0.617188 0.492188 0.554688 0.484375 0.5 0.484375 Z M 0.5 0.484375 "
        fill={color}
      />
      <Path
        d="M 0.769531 0.546875 C 0.769531 0.550781 0.769531 0.554688 0.769531 0.558594 C 0.769531 0.5625 0.769531 0.570312 0.769531 0.574219 L 0.230469 0.574219 C 0.230469 0.570312 0.230469 0.5625 0.230469 0.558594 C 0.230469 0.554688 0.230469 0.550781 0.230469 0.546875 Z M 0.769531 0.546875 "
        fill={outerBorder}
      />
      <Path
        d="M 0.5 0.492188 C 0.527344 0.492188 0.550781 0.5 0.570312 0.511719 C 0.589844 0.523438 0.605469 0.539062 0.605469 0.558594 C 0.605469 0.578125 0.589844 0.597656 0.570312 0.609375 C 0.550781 0.617188 0.527344 0.625 0.5 0.625 C 0.472656 0.625 0.449219 0.617188 0.429688 0.609375 C 0.410156 0.597656 0.394531 0.578125 0.394531 0.558594 C 0.394531 0.539062 0.410156 0.523438 0.429688 0.511719 C 0.449219 0.5 0.472656 0.492188 0.5 0.492188 Z M 0.554688 0.539062 C 0.539062 0.53125 0.523438 0.523438 0.5 0.523438 C 0.476562 0.523438 0.460938 0.53125 0.445312 0.539062 C 0.433594 0.542969 0.425781 0.550781 0.425781 0.558594 C 0.425781 0.566406 0.433594 0.574219 0.445312 0.582031 C 0.460938 0.589844 0.476562 0.59375 0.5 0.59375 C 0.523438 0.59375 0.539062 0.589844 0.554688 0.582031 C 0.566406 0.574219 0.574219 0.566406 0.574219 0.558594 C 0.574219 0.550781 0.566406 0.542969 0.554688 0.539062 Z M 0.554688 0.539062 "
        fill={outerBorder}
      />
      <Path
        d="M 0.410156 0.152344 L 0.589844 0.152344 C 0.617188 0.152344 0.636719 0.171875 0.636719 0.195312 L 0.636719 0.261719 C 0.636719 0.285156 0.617188 0.304688 0.589844 0.304688 L 0.410156 0.304688 C 0.382812 0.304688 0.363281 0.285156 0.363281 0.261719 L 0.363281 0.195312 C 0.363281 0.171875 0.382812 0.152344 0.410156 0.152344 Z M 0.410156 0.152344 "
        fill={outerBorder}
      />
      <Path
        d="M 0.410156 0.175781 L 0.589844 0.175781 C 0.601562 0.175781 0.609375 0.183594 0.609375 0.195312 L 0.609375 0.261719 C 0.609375 0.269531 0.601562 0.277344 0.589844 0.277344 L 0.410156 0.277344 C 0.398438 0.277344 0.390625 0.269531 0.390625 0.261719 L 0.390625 0.195312 C 0.390625 0.183594 0.398438 0.175781 0.410156 0.175781 Z M 0.410156 0.175781 "
        fill={innerBorder}
      />
      <Path
        d="M 0.488281 0.277344 L 0.511719 0.277344 L 0.511719 0.355469 L 0.488281 0.355469 Z M 0.488281 0.277344 "
        fill={outerBorder}
      />
      <Path
        d="M 0.417969 0.195312 L 0.582031 0.195312 C 0.585938 0.195312 0.589844 0.199219 0.589844 0.203125 L 0.589844 0.25 C 0.589844 0.257812 0.585938 0.261719 0.582031 0.261719 L 0.417969 0.261719 C 0.414062 0.261719 0.410156 0.257812 0.410156 0.25 L 0.410156 0.203125 C 0.410156 0.199219 0.414062 0.195312 0.417969 0.195312 Z M 0.417969 0.195312 "
        fill={color}
      />
      <Path
        d="M 0.296875 0.222656 L 0.324219 0.222656 L 0.324219 0.371094 L 0.296875 0.371094 Z M 0.296875 0.222656 "
        fill={outerBorder}
      />
      <Path
        d="M 0.296875 0.222656 L 0.160156 0.222656 L 0.296875 0.304688 Z M 0.296875 0.222656 "
        fill={color}
      />
      <Path
        d="M 0.675781 0.222656 L 0.703125 0.222656 L 0.703125 0.371094 L 0.675781 0.371094 Z M 0.675781 0.222656 "
        fill={outerBorder}
      />
      <Path
        d="M 0.703125 0.222656 L 0.839844 0.222656 L 0.703125 0.304688 Z M 0.703125 0.222656 "
        fill={color}
      />
      <Path
        d="M 0.582031 0.242188 L 0.417969 0.242188 C 0.414062 0.242188 0.410156 0.238281 0.410156 0.234375 L 0.410156 0.25 C 0.410156 0.257812 0.414062 0.261719 0.417969 0.261719 L 0.582031 0.261719 C 0.585938 0.261719 0.589844 0.257812 0.589844 0.25 L 0.589844 0.234375 C 0.589844 0.238281 0.585938 0.242188 0.582031 0.242188 Z M 0.582031 0.242188 "
        fill={background}
      />
      <Path
        d="M 0.246094 0.273438 L 0.296875 0.222656 L 0.296875 0.304688 Z M 0.246094 0.273438 "
        fill={background}
      />
      <Path
        d="M 0.753906 0.273438 L 0.703125 0.222656 L 0.703125 0.304688 Z M 0.753906 0.273438 "
        fill={background}
      />
    </Svg>
  );
}