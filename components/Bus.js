import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function Bus({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  return (
    <Svg height={size} style={style} viewBox="0 0 1 1" width={size}>
      <G scale={1.1} translate={-0.05}>
        <Path
          d="M 0.175781 0.730469 C 0.113281 0.730469 0.0664062 0.683594 0.0664062 0.621094 L 0.0664062 0.335938 C 0.0664062 0.277344 0.113281 0.226562 0.175781 0.226562 L 0.757812 0.226562 L 0.933594 0.449219 L 0.933594 0.65625 C 0.933594 0.695312 0.902344 0.730469 0.859375 0.730469 Z M 0.175781 0.730469 "
          fill={outerBorder}
        />
        <Path
          d="M 0.175781 0.703125 C 0.128906 0.703125 0.0898438 0.667969 0.0898438 0.621094 L 0.0898438 0.335938 C 0.0898438 0.292969 0.128906 0.253906 0.175781 0.253906 L 0.746094 0.253906 L 0.910156 0.457031 L 0.910156 0.65625 C 0.910156 0.683594 0.886719 0.703125 0.859375 0.703125 Z M 0.175781 0.703125 "
          fill={innerBorder}
        />
        <Path
          d="M 0.175781 0.6875 L 0.859375 0.6875 C 0.875 0.6875 0.890625 0.671875 0.890625 0.65625 L 0.890625 0.464844 C 0.839844 0.398438 0.789062 0.335938 0.738281 0.269531 L 0.175781 0.269531 C 0.136719 0.269531 0.109375 0.300781 0.109375 0.335938 L 0.109375 0.621094 C 0.109375 0.65625 0.136719 0.6875 0.175781 0.6875 Z M 0.175781 0.6875 "
          fill={background}
        />
        <Path
          d="M 0.890625 0.464844 L 0.738281 0.269531 L 0.175781 0.269531 C 0.136719 0.269531 0.109375 0.300781 0.109375 0.335938 L 0.109375 0.464844 C 0.207031 0.503906 0.347656 0.527344 0.5 0.527344 C 0.652344 0.527344 0.792969 0.503906 0.890625 0.464844 Z M 0.890625 0.464844 "
          fill={color}
        />
        <Path
          d="M 0.261719 0.304688 L 0.328125 0.304688 C 0.351562 0.304688 0.371094 0.324219 0.371094 0.347656 L 0.371094 0.417969 C 0.371094 0.441406 0.351562 0.460938 0.328125 0.460938 L 0.261719 0.460938 C 0.234375 0.460938 0.214844 0.441406 0.214844 0.417969 L 0.214844 0.347656 C 0.214844 0.324219 0.234375 0.304688 0.261719 0.304688 Z M 0.261719 0.304688 "
          fill={outerBorder}
        />
        <Path
          d="M 0.261719 0.332031 L 0.328125 0.332031 C 0.335938 0.332031 0.34375 0.339844 0.34375 0.347656 L 0.34375 0.417969 C 0.34375 0.425781 0.335938 0.433594 0.328125 0.433594 L 0.261719 0.433594 C 0.25 0.433594 0.242188 0.425781 0.242188 0.417969 L 0.242188 0.347656 C 0.242188 0.339844 0.25 0.332031 0.261719 0.332031 Z M 0.261719 0.332031 "
          fill={innerBorder}
        />
        <Path
          d="M 0.464844 0.304688 L 0.535156 0.304688 C 0.558594 0.304688 0.578125 0.324219 0.578125 0.347656 L 0.578125 0.417969 C 0.578125 0.441406 0.558594 0.460938 0.535156 0.460938 L 0.464844 0.460938 C 0.441406 0.460938 0.421875 0.441406 0.421875 0.417969 L 0.421875 0.347656 C 0.421875 0.324219 0.441406 0.304688 0.464844 0.304688 Z M 0.464844 0.304688 "
          fill={outerBorder}
        />
        <Path
          d="M 0.464844 0.332031 L 0.535156 0.332031 C 0.542969 0.332031 0.550781 0.339844 0.550781 0.347656 L 0.550781 0.417969 C 0.550781 0.425781 0.542969 0.433594 0.535156 0.433594 L 0.464844 0.433594 C 0.457031 0.433594 0.449219 0.425781 0.449219 0.417969 L 0.449219 0.347656 C 0.449219 0.339844 0.457031 0.332031 0.464844 0.332031 Z M 0.464844 0.332031 "
          fill={innerBorder}
        />
        <Path
          d="M 0.671875 0.304688 C 0.734375 0.304688 0.785156 0.355469 0.785156 0.417969 C 0.785156 0.441406 0.765625 0.460938 0.738281 0.460938 L 0.671875 0.460938 C 0.648438 0.460938 0.628906 0.441406 0.628906 0.417969 L 0.628906 0.347656 C 0.628906 0.324219 0.648438 0.304688 0.671875 0.304688 Z M 0.671875 0.304688 "
          fill={outerBorder}
        />
        <Path
          d="M 0.671875 0.332031 C 0.71875 0.332031 0.757812 0.371094 0.757812 0.417969 C 0.757812 0.425781 0.75 0.433594 0.738281 0.433594 L 0.671875 0.433594 C 0.664062 0.433594 0.65625 0.425781 0.65625 0.417969 L 0.65625 0.347656 C 0.65625 0.339844 0.664062 0.332031 0.671875 0.332031 Z M 0.671875 0.332031 "
          fill={innerBorder}
        />
        <Path
          d="M 0.125 0.5625 L 0.875 0.5625 C 0.917969 0.5625 0.953125 0.59375 0.953125 0.636719 L 0.953125 0.65625 C 0.953125 0.695312 0.917969 0.730469 0.875 0.730469 L 0.125 0.730469 C 0.0820312 0.730469 0.046875 0.695312 0.046875 0.65625 L 0.046875 0.636719 C 0.046875 0.59375 0.0820312 0.5625 0.125 0.5625 Z M 0.125 0.5625 "
          fill={outerBorder}
        />
        <Path
          d="M 0.125 0.585938 L 0.875 0.585938 C 0.902344 0.585938 0.925781 0.609375 0.925781 0.636719 L 0.925781 0.65625 C 0.925781 0.683594 0.902344 0.703125 0.875 0.703125 L 0.125 0.703125 C 0.0976562 0.703125 0.0742188 0.683594 0.0742188 0.65625 L 0.0742188 0.636719 C 0.0742188 0.609375 0.0976562 0.585938 0.125 0.585938 Z M 0.125 0.585938 "
          fill={innerBorder}
        />
        <Path
          d="M 0.125 0.605469 L 0.875 0.605469 C 0.894531 0.605469 0.910156 0.621094 0.910156 0.636719 L 0.910156 0.65625 C 0.910156 0.671875 0.894531 0.6875 0.875 0.6875 L 0.125 0.6875 C 0.105469 0.6875 0.0898438 0.671875 0.0898438 0.65625 L 0.0898438 0.636719 C 0.0898438 0.621094 0.105469 0.605469 0.125 0.605469 Z M 0.125 0.605469 "
          fill={background}
        />
        <Path
          d="M 0.125 0.605469 L 0.875 0.605469 C 0.894531 0.605469 0.910156 0.621094 0.910156 0.636719 L 0.910156 0.65625 L 0.0898438 0.65625 L 0.0898438 0.636719 C 0.0898438 0.621094 0.105469 0.605469 0.125 0.605469 Z M 0.125 0.605469 "
          fill={color}
        />
        <Path
          d="M 0.230469 0.535156 C 0.296875 0.535156 0.347656 0.589844 0.347656 0.652344 C 0.347656 0.71875 0.296875 0.773438 0.230469 0.773438 C 0.164062 0.773438 0.113281 0.71875 0.113281 0.652344 C 0.113281 0.589844 0.164062 0.535156 0.230469 0.535156 Z M 0.230469 0.535156 "
          fill={outerBorder}
        />
        <Path
          d="M 0.230469 0.5625 C 0.28125 0.5625 0.320312 0.601562 0.320312 0.652344 C 0.320312 0.703125 0.28125 0.746094 0.230469 0.746094 C 0.179688 0.746094 0.140625 0.703125 0.140625 0.652344 C 0.140625 0.601562 0.179688 0.5625 0.230469 0.5625 Z M 0.230469 0.5625 "
          fill={innerBorder}
        />
        <Path
          d="M 0.230469 0.578125 C 0.273438 0.578125 0.304688 0.613281 0.304688 0.652344 C 0.304688 0.695312 0.273438 0.730469 0.230469 0.730469 C 0.1875 0.730469 0.15625 0.695312 0.15625 0.652344 C 0.15625 0.613281 0.1875 0.578125 0.230469 0.578125 Z M 0.230469 0.578125 "
          fill={background}
        />
        <Path
          d="M 0.230469 0.59375 C 0.261719 0.59375 0.289062 0.621094 0.289062 0.652344 C 0.289062 0.6875 0.261719 0.714844 0.230469 0.714844 C 0.199219 0.714844 0.171875 0.6875 0.171875 0.652344 C 0.171875 0.621094 0.199219 0.59375 0.230469 0.59375 Z M 0.230469 0.59375 "
          fill={color}
        />
        <Path
          d="M 0.230469 0.625 C 0.246094 0.625 0.257812 0.636719 0.257812 0.652344 C 0.257812 0.667969 0.246094 0.679688 0.230469 0.679688 C 0.214844 0.679688 0.203125 0.667969 0.203125 0.652344 C 0.203125 0.636719 0.214844 0.625 0.230469 0.625 Z M 0.230469 0.625 "
          fill={outerBorder}
        />
        <Path
          d="M 0.769531 0.535156 C 0.835938 0.535156 0.886719 0.589844 0.886719 0.652344 C 0.886719 0.71875 0.835938 0.773438 0.769531 0.773438 C 0.703125 0.773438 0.652344 0.71875 0.652344 0.652344 C 0.652344 0.589844 0.703125 0.535156 0.769531 0.535156 Z M 0.769531 0.535156 "
          fill={outerBorder}
        />
        <Path
          d="M 0.769531 0.5625 C 0.820312 0.5625 0.859375 0.601562 0.859375 0.652344 C 0.859375 0.703125 0.820312 0.746094 0.769531 0.746094 C 0.71875 0.746094 0.679688 0.703125 0.679688 0.652344 C 0.679688 0.601562 0.71875 0.5625 0.769531 0.5625 Z M 0.769531 0.5625 "
          fill={innerBorder}
        />
        <Path
          d="M 0.769531 0.578125 C 0.8125 0.578125 0.84375 0.613281 0.84375 0.652344 C 0.84375 0.695312 0.8125 0.730469 0.769531 0.730469 C 0.726562 0.730469 0.695312 0.695312 0.695312 0.652344 C 0.695312 0.613281 0.726562 0.578125 0.769531 0.578125 Z M 0.769531 0.578125 "
          fill={background}
        />
        <Path
          d="M 0.769531 0.59375 C 0.800781 0.59375 0.828125 0.621094 0.828125 0.652344 C 0.828125 0.6875 0.800781 0.714844 0.769531 0.714844 C 0.738281 0.714844 0.710938 0.6875 0.710938 0.652344 C 0.710938 0.621094 0.738281 0.59375 0.769531 0.59375 Z M 0.769531 0.59375 "
          fill={color}
        />
        <Path
          d="M 0.769531 0.625 C 0.785156 0.625 0.796875 0.636719 0.796875 0.652344 C 0.796875 0.667969 0.785156 0.679688 0.769531 0.679688 C 0.753906 0.679688 0.742188 0.667969 0.742188 0.652344 C 0.742188 0.636719 0.753906 0.625 0.769531 0.625 Z M 0.769531 0.625 "
          fill={outerBorder}
        />
      </G>
    </Svg>
  );
}
