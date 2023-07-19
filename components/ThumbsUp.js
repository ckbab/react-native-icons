import React from "react";
import { Path, Svg } from "react-native-svg";

export default function ThumbsUp({
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
        d="M 0.339844 0.34375 C 0.363281 0.324219 0.390625 0.308594 0.417969 0.304688 C 0.441406 0.277344 0.453125 0.246094 0.460938 0.210938 C 0.480469 0.160156 0.492188 0.101562 0.539062 0.0664062 C 0.5625 0.046875 0.59375 0.0351562 0.628906 0.0351562 C 0.664062 0.0351562 0.695312 0.0429688 0.722656 0.0625 C 0.796875 0.117188 0.808594 0.214844 0.792969 0.300781 L 0.839844 0.300781 C 0.925781 0.300781 1 0.371094 1 0.460938 C 1 0.484375 0.992188 0.503906 0.984375 0.527344 C 0.992188 0.546875 1 0.566406 1 0.589844 C 1 0.625 0.984375 0.660156 0.964844 0.691406 C 0.96875 0.703125 0.96875 0.71875 0.96875 0.734375 C 0.96875 0.800781 0.925781 0.863281 0.863281 0.882812 C 0.828125 0.933594 0.769531 0.964844 0.707031 0.964844 L 0.449219 0.964844 C 0.410156 0.964844 0.371094 0.949219 0.339844 0.921875 C 0.320312 0.933594 0.300781 0.9375 0.277344 0.9375 L 0.136719 0.9375 C 0.0625 0.9375 0.00390625 0.878906 0.00390625 0.804688 L 0.00390625 0.460938 C 0.00390625 0.386719 0.0625 0.328125 0.136719 0.328125 L 0.277344 0.328125 C 0.300781 0.328125 0.320312 0.335938 0.339844 0.34375 Z M 0.339844 0.34375 "
        fill={outerBorder}
      />
      <Path
        d="M 0.136719 0.375 L 0.277344 0.375 C 0.308594 0.375 0.332031 0.390625 0.347656 0.410156 C 0.367188 0.375 0.402344 0.351562 0.441406 0.347656 C 0.476562 0.3125 0.492188 0.269531 0.507812 0.226562 C 0.519531 0.183594 0.53125 0.132812 0.566406 0.101562 C 0.585938 0.0898438 0.605469 0.0820312 0.628906 0.0820312 C 0.652344 0.0820312 0.675781 0.0859375 0.695312 0.101562 C 0.765625 0.152344 0.761719 0.265625 0.730469 0.347656 L 0.839844 0.347656 C 0.902344 0.347656 0.953125 0.398438 0.953125 0.460938 C 0.953125 0.484375 0.945312 0.507812 0.933594 0.527344 C 0.945312 0.542969 0.953125 0.566406 0.953125 0.589844 C 0.953125 0.625 0.9375 0.65625 0.910156 0.679688 C 0.917969 0.695312 0.925781 0.714844 0.925781 0.734375 C 0.925781 0.789062 0.886719 0.835938 0.835938 0.84375 C 0.808594 0.890625 0.761719 0.921875 0.710938 0.921875 L 0.449219 0.921875 C 0.40625 0.921875 0.367188 0.894531 0.347656 0.855469 C 0.332031 0.878906 0.308594 0.890625 0.277344 0.890625 L 0.136719 0.890625 C 0.0898438 0.890625 0.0507812 0.851562 0.0507812 0.804688 L 0.0507812 0.460938 C 0.0507812 0.414062 0.0898438 0.375 0.136719 0.375 Z M 0.136719 0.375 "
        fill={innerBorder}
      />
      <Path
        d="M 0.136719 0.402344 L 0.277344 0.402344 C 0.308594 0.402344 0.335938 0.429688 0.335938 0.460938 L 0.335938 0.804688 C 0.335938 0.835938 0.308594 0.863281 0.277344 0.863281 L 0.136719 0.863281 C 0.105469 0.863281 0.078125 0.835938 0.078125 0.804688 L 0.078125 0.460938 C 0.078125 0.429688 0.105469 0.402344 0.136719 0.402344 Z M 0.136719 0.402344 "
        fill={background}
      />
      <Path
        d="M 0.136719 0.402344 L 0.277344 0.402344 C 0.28125 0.402344 0.28125 0.402344 0.285156 0.402344 C 0.289062 0.421875 0.289062 0.441406 0.289062 0.460938 C 0.289062 0.59375 0.199219 0.707031 0.078125 0.738281 L 0.078125 0.460938 C 0.078125 0.429688 0.105469 0.402344 0.136719 0.402344 Z M 0.136719 0.402344 "
        fill={color}
      />
      <Path
        d="M 0.867188 0.671875 C 0.886719 0.6875 0.894531 0.710938 0.894531 0.734375 C 0.894531 0.777344 0.859375 0.816406 0.816406 0.820312 C 0.796875 0.863281 0.757812 0.890625 0.710938 0.890625 L 0.449219 0.890625 C 0.402344 0.890625 0.363281 0.851562 0.363281 0.804688 L 0.363281 0.460938 C 0.363281 0.414062 0.402344 0.375 0.449219 0.375 L 0.453125 0.375 C 0.5625 0.269531 0.523438 0.113281 0.628906 0.109375 C 0.742188 0.105469 0.746094 0.289062 0.679688 0.375 L 0.839844 0.375 C 0.886719 0.375 0.925781 0.414062 0.925781 0.460938 C 0.925781 0.488281 0.914062 0.511719 0.894531 0.527344 C 0.914062 0.542969 0.925781 0.566406 0.925781 0.589844 C 0.925781 0.628906 0.902344 0.660156 0.867188 0.671875 Z M 0.867188 0.671875 "
        fill={color}
      />
      <Path
        d="M 0.652344 0.113281 C 0.742188 0.132812 0.742188 0.296875 0.679688 0.375 L 0.59375 0.375 C 0.59375 0.375 0.75 0.207031 0.652344 0.113281 Z M 0.652344 0.113281 "
        fill={background}
      />
      <Path
        d="M 0.207031 0.6875 C 0.238281 0.6875 0.261719 0.714844 0.261719 0.746094 C 0.261719 0.777344 0.238281 0.804688 0.207031 0.804688 C 0.175781 0.804688 0.152344 0.777344 0.152344 0.746094 C 0.152344 0.714844 0.175781 0.6875 0.207031 0.6875 Z M 0.207031 0.6875 "
        fill={innerBorder}
      />
      <Path
        d="M 0.863281 0.394531 C 0.863281 0.589844 0.671875 0.753906 0.433594 0.753906 C 0.410156 0.753906 0.386719 0.75 0.363281 0.746094 L 0.363281 0.804688 C 0.363281 0.851562 0.402344 0.890625 0.449219 0.890625 L 0.710938 0.890625 C 0.757812 0.890625 0.796875 0.863281 0.816406 0.820312 C 0.859375 0.816406 0.894531 0.777344 0.894531 0.734375 C 0.894531 0.710938 0.886719 0.6875 0.867188 0.671875 C 0.902344 0.660156 0.925781 0.628906 0.925781 0.589844 C 0.925781 0.566406 0.914062 0.542969 0.894531 0.527344 C 0.914062 0.511719 0.925781 0.488281 0.925781 0.460938 C 0.925781 0.421875 0.898438 0.390625 0.863281 0.378906 C 0.863281 0.382812 0.863281 0.390625 0.863281 0.394531 Z M 0.863281 0.394531 "
        fill={background}
      />
    </Svg>
  );
}