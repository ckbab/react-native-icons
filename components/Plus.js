import React from "react";
import { Path, Svg } from "react-native-svg";

export default function Plus({
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
        d="M0.647031 0.352969l0.0763071 0c0.047748,0 0.0866614,0.0389134 0.0866614,0.0866614l0 0.12074c0,0.047748 -0.0389134,0.0866614 -0.0866614,0.0866614l-0.0763071 0 0 0.0763071c0,0.047748 -0.0389134,0.0866614 -0.0866614,0.0866614l-0.12074 0c-0.047748,0 -0.0866614,-0.0389134 -0.0866614,-0.0866614l0 -0.0763071 -0.0763071 0c-0.047748,0 -0.0866614,-0.0389134 -0.0866614,-0.0866614l0 -0.12074c0,-0.047748 0.0389134,-0.0866614 0.0866614,-0.0866614l0.0763071 0 0 -0.0763071c0,-0.047748 0.0389134,-0.0866614 0.0866614,-0.0866614l0.12074 0c0.047748,0 0.0866614,0.0389134 0.0866614,0.0866614l0 0.0763071z"
        fill={outerBorder}
      />
      <Path
        d="M0.620366 0.379634l0.102972 0c0.0330315,0 0.0599961,0.0269646 0.0599961,0.0599961l0 0.12074c0,0.0330315 -0.0269646,0.0599961 -0.0599961,0.0599961l-0.102972 0 0 0.102972c0,0.0330315 -0.0269646,0.0599961 -0.0599961,0.0599961l-0.12074 0c-0.0330315,0 -0.0599961,-0.0269646 -0.0599961,-0.0599961l0 -0.102972 -0.102972 0c-0.0330315,0 -0.0599961,-0.0269646 -0.0599961,-0.0599961l0 -0.12074c0,-0.0330315 0.0269646,-0.0599961 0.0599961,-0.0599961l0.102972 0 0 -0.102972c0,-0.0330315 0.0269646,-0.0599961 0.0599961,-0.0599961l0.12074 0c0.0330315,0 0.0599961,0.0269646 0.0599961,0.0599961l0 0.102972z"
        fill={innerBorder}
      />
      <Path
        d="M0.43963 0.233331l0.12074 0c0.0238346,0 0.0433307,0.0194961 0.0433307,0.0433307l0 0.119638 0.119638 0c0.0238346,0 0.0433307,0.0194961 0.0433307,0.0433307l0 0.12074c0,0.0238346 -0.0194961,0.0433307 -0.0433307,0.0433307l-0.119638 0 0 0.119638c0,0.0238346 -0.0194961,0.0433307 -0.0433307,0.0433307l-0.12074 0c-0.0238346,0 -0.0433307,-0.0194961 -0.0433307,-0.0433307l0 -0.119638 -0.119638 0c-0.0238346,0 -0.0433307,-0.0194961 -0.0433307,-0.0433307l0 -0.12074c0,-0.0238346 0.0194961,-0.0433307 0.0433307,-0.0433307l0.119638 0 0 -0.119638c0,-0.0238346 0.0194961,-0.0433307 0.0433307,-0.0433307z"
        fill={background}
      />
      <Path
        d="M0.43963 0.233331l0.12074 0c0.0238346,0 0.0433307,0.0194961 0.0433307,0.0433307l0 0.119638 0.119638 0c0.0238346,0 0.0433307,0.0194961 0.0433307,0.0433307l0 0.0517638c-0.0694488,0.0470157 -0.163327,0.0758701 -0.266669,0.0758701 -0.103343,0 -0.19722,-0.0288543 -0.266669,-0.0758701l0 -0.0517638c0,-0.0238346 0.0194961,-0.0433307 0.0433307,-0.0433307l0.119638 0 0 -0.119638c0,-0.0238346 0.0194961,-0.0433307 0.0433307,-0.0433307z"
        fill={color}
      />
    </Svg>
  );
}
