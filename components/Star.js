import React from "react";
import { Path, Svg } from "react-native-svg";

export default function Star({
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
        d="M0.70172 0.600803c0.00181496,0.00594488 0.00391732,0.0119252 0.00552362,0.0171732 0.0068189,0.0222677 0.0140394,0.0444134 0.0212598,0.0665551 0.00704331,0.0216181 0.0141535,0.0432126 0.0210827,0.0648661 0.00483858,0.015126 0.0099685,0.030185 0.0136102,0.0456614l1.5748e-005 6.69291e-005c0.00155512,0.00660236 0.0019685,0.00962205 0.0019685,0.0165866 0,0.0398858 -0.0327953,0.0716496 -0.0724567,0.0716496 -0.015252,0 -0.0297913,-0.00408661 -0.0419961,-0.0134488l-0.150319 -0.115295 -0.149685 0.114811c-0.0466575,0.0357874 -0.115028,0.000409449 -0.115028,-0.0578701 0,-0.00674016 0.000437008,-0.00970472 0.0018622,-0.0160984l0.000496063 -0.00222441 0.0600787 -0.19315 -0.158252 -0.120413c-0.0543268,-0.0413346 -0.0200276,-0.126713 0.0463976,-0.126579l0.188055 0.000377953 0.0603425 -0.196571 0.00326772 -0.00549213c0.0279213,-0.0469646 0.0968937,-0.0469449 0.12489,-5.90551e-005l0.00329921 0.00551969 0.0603504 0.196602 0.190732 -0.000389764c0.0675315,-0.000137795 0.0949882,0.0875906 0.0418858,0.127988l-0.157382 0.119732z"
        fill={outerBorder}
      />
      <Path
        d="M0.671811 0.590055c0.00146063,0.0101339 0.00698819,0.0260945 0.00993701,0.0357283 0.00686614,0.0224134 0.0141378,0.0447244 0.0214016,0.0670118 0.0070315,0.0215709 0.014126,0.043122 0.0210394,0.0647283 0.00452362,0.0141378 0.00965748,0.0292165 0.0130512,0.0436417l1.5748e-005 6.69291e-005c0.00129528,0.0055 0.00125984,0.00323622 0.00125984,0.0104803 0,0.0251417 -0.0208228,0.0449843 -0.0457913,0.0449843 -0.00931102,0 -0.0182598,-0.0021811 -0.0257677,-0.00794094l-0.166547 -0.127744 -0.165913 0.12726c-0.029122,0.0223386 -0.0721339,-0.000366142 -0.0721339,-0.0367126 0,-0.00697244 -5.11811e-005,-0.00456299 0.00122441,-0.0103031l0.000255906 -0.00114961 0.0652992 -0.209933 -0.173114 -0.13172c-0.0337677,-0.0256929 -0.0110984,-0.0787756 0.0301969,-0.0786929l0.207803 0.000417323c7.87402e-006,-1.9685e-005 1.5748e-005,-3.93701e-005 1.9685e-005,-5.90551e-005l0.065185 -0.212335 0.00163386 -0.00274803c0.0176181,-0.0296102 0.061437,-0.0296181 0.0790748,-1.5748e-005l0.00164567 0.00275591 0.0652008 0.212402 0.210484 -0.000429134c0.0418504,-8.66142e-005 0.0587835,0.0549213 0.025685,0.0801024l-0.171146 0.130205z"
        fill={innerBorder}
      />
      <Path
        d="M0.355492 0.595236l0 0zm0.471319 -0.156606c0.0127756,-0.010189 0.00668898,-0.0299843 -0.00948425,-0.0322165l-0.212846 0.000433071c-0.0101102,-0.00106299 -0.0185984,-0.00757087 -0.0224764,-0.0165433l-0.0649685 -0.211634c-0.00730709,-0.0122638 -0.0259488,-0.0122756 -0.033252,0l-0.0642441 0.209276c-0.00333071,0.0101693 -0.0123937,0.017748 -0.0233661,0.0189016l-0.210004 -0.00042126c-0.0163898,0 -0.0254803,0.0190079 -0.0139961,0.0308071l0.174244 0.132579c0.00722835,0.00632677 0.0106457,0.0159055 0.00908661,0.0253583l-7.87402e-006 5.51181e-005 -0.0658622 0.211744 -1.5748e-005 7.08661e-005c-0.000385827,0.00144488 -0.000590551,0.00296063 -0.000590551,0.00451969 0,0.0148858 0.0170157,0.0228583 0.0292402,0.0155551l0.169311 -0.129866c0.00806299,-0.00420866 0.017874,-0.00414173 0.025878,0.000165354l0.169728 0.130185c0.00280709,0.00154724 0.00606693,0.00243307 0.00953937,0.00243307 0.010563,0 0.019126,-0.00820079 0.019126,-0.0183189 0,-0.00151181 -0.000192913,-0.00297244 -0.000551181,-0.00437402l-1.5748e-005 -6.69291e-005c-0.0096811,-0.0311142 -0.0661929,-0.199031 -0.0661929,-0.216665 0,-0.00878346 0.00409055,-0.0166142 0.0104803,-0.021685l0.17124 -0.130291z"
        fill={background}
      />
      <Path
        d="M0.702205 0.406646c-0.0647835,0.106319 -0.181811,0.177319 -0.315421,0.177319 -0.0108228,0 -0.0215315,-0.000492126 -0.0321181,-0.00140551 -0.00148425,-0.00485433 -0.00429528,-0.0092874 -0.00824803,-0.012748l-0.174244 -0.132579c-0.0114843,-0.0117992 -0.0023937,-0.0308071 0.0139961,-0.0308071l0.210004 0.00042126c0.0109724,-0.00115354 0.0200354,-0.00873228 0.0233661,-0.0189016l0.0642441 -0.209276c0.00730315,-0.0122756 0.0259449,-0.0122638 0.033252,0l0.0649685 0.211634c0.00387795,0.00897244 0.0123661,0.0154803 0.0224764,0.0165433l0.0977244 -0.000200787z"
        fill={color}
      />
    </Svg>
  );
}
