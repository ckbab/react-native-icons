import React from "react";
import { Path, Svg } from "react-native-svg";

export default function Menu({
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
        d="M0.786039 0.391669c0.0338504,0.0163583 0.0572913,0.0510512 0.0572913,0.0910551l0 0.0345551c0,0.0400039 -0.0234409,0.0746969 -0.0572913,0.0910551 0.0338504,0.0163583 0.0572913,0.0510512 0.0572913,0.0910551l0 0.0345551c0,0.0556654 -0.0453898,0.101051 -0.101055,0.101051l-0.484555 0c-0.0556654,0 -0.101051,-0.0453858 -0.101051,-0.101051l0 -0.0345551c0,-0.0400039 0.023437,-0.0746969 0.0572874,-0.0910551 -0.0338504,-0.0163583 -0.0572874,-0.0510512 -0.0572874,-0.0910551l0 -0.0345551c0,-0.0400039 0.023437,-0.0746969 0.0572874,-0.0910551 -0.0338504,-0.0163583 -0.0572874,-0.0510512 -0.0572874,-0.0910551l0 -0.0345551c0,-0.0556654 0.0453858,-0.101055 0.101051,-0.101055l0.484555 0c0.0556654,0 0.101055,0.0453898 0.101055,0.101055l0 0.0345551c0,0.0400039 -0.0234409,0.0746969 -0.0572913,0.0910551z"
        fill={outerBorder}
      />
      <Path
        d="M0.25772 0.191669l0.484555 0c0.0409488,0 0.0743898,0.0334409 0.0743898,0.0743898l0 0.0345551c0,0.0409488 -0.0334409,0.0743858 -0.0743898,0.0743858l-0.484555 0c-0.0409488,0 -0.0743858,-0.033437 -0.0743858,-0.0743858l0 -0.0345551c0,-0.0409488 0.033437,-0.0743898 0.0743858,-0.0743898zm0 0.433331l0.484555 0c0.0409488,0 0.0743898,0.0334409 0.0743898,0.0743898l0 0.0345551c0,0.0409488 -0.0334409,0.0743858 -0.0743898,0.0743858l-0.484555 0c-0.0409488,0 -0.0743858,-0.033437 -0.0743858,-0.0743858l0 -0.0345551c0,-0.0409488 0.033437,-0.0743898 0.0743858,-0.0743898zm0 -0.216665l0.484555 0c0.0409488,0 0.0743898,0.0334409 0.0743898,0.0743898l0 0.0345551c0,0.0409488 -0.0334409,0.0743858 -0.0743898,0.0743858l-0.484555 0c-0.0409488,0 -0.0743858,-0.033437 -0.0743858,-0.0743858l0 -0.0345551c0,-0.0409488 0.033437,-0.0743898 0.0743858,-0.0743898z"
        fill={innerBorder}
      />
      <Path
        d="M0.25772 0.425l0.484555 0c0.031752,0 0.0577244,0.0259724 0.0577244,0.0577244l0 0.0345551c0,0.031752 -0.0259724,0.0577205 -0.0577244,0.0577205l-0.484555 0c-0.031752,0 -0.0577205,-0.0259685 -0.0577205,-0.0577205l0 -0.0345551c0,-0.031752 0.0259685,-0.0577244 0.0577205,-0.0577244z"
        fill={background}
      />
      <Path
        d="M0.25772 0.641665l0.484555 0c0.031752,0 0.0577244,0.0259724 0.0577244,0.0577244l0 0.0345551c0,0.031752 -0.0259724,0.0577205 -0.0577244,0.0577205l-0.484555 0c-0.031752,0 -0.0577205,-0.0259685 -0.0577205,-0.0577205l0 -0.0345551c0,-0.031752 0.0259685,-0.0577244 0.0577205,-0.0577244z"
        fill={background}
      />
      <Path
        d="M0.25772 0.208335l0.484555 0c0.031752,0 0.0577244,0.0259724 0.0577244,0.0577244l0 0.0345551c0,0.031752 -0.0259724,0.0577205 -0.0577244,0.0577205l-0.484555 0c-0.031752,0 -0.0577205,-0.0259685 -0.0577205,-0.0577205l0 -0.0345551c0,-0.031752 0.0259685,-0.0577244 0.0577205,-0.0577244z"
        fill={background}
      />
      <Path
        d="M0.25772 0.208335l0.484555 0c0.031752,0 0.0577244,0.0259724 0.0577244,0.0577244l0 0.0158386c-0.0778386,0.0235 -0.183547,0.0379488 -0.3,0.0379488 -0.116453,0 -0.222161,-0.0144488 -0.3,-0.0379488l0 -0.0158386c0,-0.031752 0.0259685,-0.0577244 0.0577205,-0.0577244z"
        fill={color}
      />
      <Path
        d="M0.25772 0.425l0.484555 0c0.031752,0 0.0577244,0.0259724 0.0577244,0.0577244l0 0.0158386c-0.0778386,0.0235 -0.183547,0.0379488 -0.3,0.0379488 -0.116453,0 -0.222161,-0.0144488 -0.3,-0.0379488l0 -0.0158386c0,-0.031752 0.0259685,-0.0577244 0.0577205,-0.0577244z"
        fill={color}
      />
      <Path
        d="M0.25772 0.641665l0.484555 0c0.031752,0 0.0577244,0.0259724 0.0577244,0.0577244l0 0.0158386c-0.0778386,0.0235 -0.183547,0.0379488 -0.3,0.0379488 -0.116453,0 -0.222161,-0.0144488 -0.3,-0.0379488l0 -0.0158386c0,-0.031752 0.0259685,-0.0577244 0.0577205,-0.0577244z"
        fill={color}
      />
    </Svg>
  );
}