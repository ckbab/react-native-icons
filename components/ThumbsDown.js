import React from "react";
import { Path, Svg } from "react-native-svg";

export default function ThumbsDown({
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
        d="M 0.339844 0.65625 C 0.363281 0.675781 0.390625 0.691406 0.417969 0.695312 C 0.441406 0.722656 0.453125 0.753906 0.460938 0.789062 C 0.480469 0.839844 0.492188 0.898438 0.539062 0.933594 C 0.5625 0.953125 0.59375 0.964844 0.628906 0.964844 C 0.664062 0.964844 0.695312 0.957031 0.722656 0.9375 C 0.796875 0.882812 0.808594 0.785156 0.792969 0.699219 L 0.839844 0.699219 C 0.925781 0.699219 1 0.628906 1 0.539062 C 1 0.515625 0.992188 0.496094 0.984375 0.472656 C 0.992188 0.453125 1 0.433594 1 0.410156 C 1 0.375 0.984375 0.339844 0.964844 0.308594 C 0.96875 0.296875 0.96875 0.28125 0.96875 0.265625 C 0.96875 0.199219 0.925781 0.136719 0.863281 0.117188 C 0.828125 0.0664062 0.769531 0.0351562 0.707031 0.0351562 L 0.449219 0.0351562 C 0.410156 0.0351562 0.371094 0.0507812 0.339844 0.078125 C 0.320312 0.0664062 0.300781 0.0625 0.277344 0.0625 L 0.136719 0.0625 C 0.0625 0.0625 0.00390625 0.121094 0.00390625 0.195312 L 0.00390625 0.539062 C 0.00390625 0.613281 0.0625 0.671875 0.136719 0.671875 L 0.277344 0.671875 C 0.300781 0.671875 0.320312 0.664062 0.339844 0.65625 Z M 0.339844 0.65625 "
        fill={outerBorder}
      />
      <Path
        d="M 0.136719 0.625 L 0.277344 0.625 C 0.308594 0.625 0.332031 0.609375 0.347656 0.589844 C 0.367188 0.625 0.402344 0.648438 0.441406 0.652344 C 0.476562 0.6875 0.492188 0.730469 0.507812 0.773438 C 0.519531 0.816406 0.53125 0.867188 0.566406 0.898438 C 0.585938 0.910156 0.605469 0.917969 0.628906 0.917969 C 0.652344 0.917969 0.675781 0.914062 0.695312 0.898438 C 0.765625 0.847656 0.761719 0.734375 0.730469 0.652344 L 0.839844 0.652344 C 0.902344 0.652344 0.953125 0.601562 0.953125 0.539062 C 0.953125 0.515625 0.945312 0.492188 0.933594 0.472656 C 0.945312 0.457031 0.953125 0.433594 0.953125 0.410156 C 0.953125 0.375 0.9375 0.34375 0.910156 0.320312 C 0.917969 0.304688 0.925781 0.285156 0.925781 0.265625 C 0.925781 0.210938 0.886719 0.164062 0.835938 0.15625 C 0.808594 0.109375 0.761719 0.078125 0.710938 0.078125 L 0.449219 0.078125 C 0.40625 0.078125 0.367188 0.105469 0.347656 0.144531 C 0.332031 0.121094 0.308594 0.109375 0.277344 0.109375 L 0.136719 0.109375 C 0.0898438 0.109375 0.0507812 0.148438 0.0507812 0.195312 L 0.0507812 0.539062 C 0.0507812 0.585938 0.0898438 0.625 0.136719 0.625 Z M 0.136719 0.625 "
        fill={innerBorder}
      />
      <Path
        d="M 0.136719 0.597656 L 0.277344 0.597656 C 0.308594 0.597656 0.335938 0.570312 0.335938 0.539062 L 0.335938 0.195312 C 0.335938 0.164062 0.308594 0.136719 0.277344 0.136719 L 0.136719 0.136719 C 0.105469 0.136719 0.078125 0.164062 0.078125 0.195312 L 0.078125 0.539062 C 0.078125 0.570312 0.105469 0.597656 0.136719 0.597656 Z M 0.136719 0.597656 "
        fill={background}
      />
      <Path
        d="M 0.136719 0.597656 L 0.277344 0.597656 C 0.28125 0.597656 0.28125 0.597656 0.285156 0.597656 C 0.289062 0.578125 0.289062 0.558594 0.289062 0.539062 C 0.289062 0.40625 0.199219 0.292969 0.078125 0.261719 L 0.078125 0.539062 C 0.078125 0.570312 0.105469 0.597656 0.136719 0.597656 Z M 0.136719 0.597656 "
        fill={color}
      />
      <Path
        d="M 0.867188 0.328125 C 0.886719 0.3125 0.894531 0.289062 0.894531 0.265625 C 0.894531 0.222656 0.859375 0.183594 0.816406 0.179688 C 0.796875 0.136719 0.757812 0.109375 0.710938 0.109375 L 0.449219 0.109375 C 0.402344 0.109375 0.363281 0.148438 0.363281 0.195312 L 0.363281 0.539062 C 0.363281 0.585938 0.402344 0.625 0.449219 0.625 L 0.453125 0.625 C 0.5625 0.730469 0.523438 0.886719 0.628906 0.890625 C 0.742188 0.894531 0.746094 0.710938 0.679688 0.625 L 0.839844 0.625 C 0.886719 0.625 0.925781 0.585938 0.925781 0.539062 C 0.925781 0.511719 0.914062 0.488281 0.894531 0.472656 C 0.914062 0.457031 0.925781 0.433594 0.925781 0.410156 C 0.925781 0.371094 0.902344 0.339844 0.867188 0.328125 Z M 0.867188 0.328125 "
        fill={color}
      />
      <Path
        d="M 0.652344 0.886719 C 0.742188 0.867188 0.742188 0.703125 0.679688 0.625 L 0.59375 0.625 C 0.59375 0.625 0.75 0.792969 0.652344 0.886719 Z M 0.652344 0.886719 "
        fill={background}
      />
      <Path
        d="M 0.207031 0.3125 C 0.175781 0.3125 0.152344 0.285156 0.152344 0.253906 C 0.152344 0.222656 0.175781 0.195312 0.207031 0.195312 C 0.238281 0.195312 0.261719 0.222656 0.261719 0.253906 C 0.261719 0.285156 0.238281 0.3125 0.207031 0.3125 Z M 0.207031 0.3125 "
        fill={innerBorder}
      />
      <Path
        d="M 0.863281 0.605469 C 0.863281 0.410156 0.671875 0.246094 0.433594 0.246094 C 0.410156 0.246094 0.386719 0.25 0.363281 0.253906 L 0.363281 0.195312 C 0.363281 0.148438 0.402344 0.109375 0.449219 0.109375 L 0.710938 0.109375 C 0.757812 0.109375 0.796875 0.136719 0.816406 0.179688 C 0.859375 0.183594 0.894531 0.222656 0.894531 0.265625 C 0.894531 0.289062 0.886719 0.3125 0.867188 0.328125 C 0.902344 0.339844 0.925781 0.371094 0.925781 0.410156 C 0.925781 0.433594 0.914062 0.457031 0.894531 0.472656 C 0.914062 0.488281 0.925781 0.511719 0.925781 0.539062 C 0.925781 0.578125 0.898438 0.609375 0.863281 0.621094 C 0.863281 0.617188 0.863281 0.609375 0.863281 0.605469 Z M 0.863281 0.605469 "
        fill={background}
      />
    </Svg>
  );
}