import React from "react";
import { Path, Svg } from "react-native-svg";

export default function Chat({
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
        d="M0.70789 0.339252l0.0217283 0.00896457c0.0786969,0.0324606 0.147614,0.0997126 0.147614,0.189906 0,0.0491339 -0.0210039,0.0928307 -0.0539173,0.127378 0.00515354,0.00583071 0.010748,0.0112913 0.0163386,0.0159685l0.0136811 0.0114488 0.00165748 0.0177559c0.00322441,0.0345512 -0.0241811,0.0620984 -0.0560433,0.0697756 -0.0235276,0.00567323 -0.0645118,-0.00562992 -0.0877008,-0.0133543 -0.0152441,-0.00507874 -0.0315276,-0.0114764 -0.0458071,-0.019874 -0.0235827,0.00462598 -0.0476339,0.00688189 -0.0716654,0.00688189 -0.0624882,0 -0.12665,-0.0154134 -0.179976,-0.0486024l-0.0332559 -0.0206969c-0.00787402,-0.00106299 -0.0157165,-0.0023622 -0.0235118,-0.0038937 -0.0202953,0.0137362 -0.0452362,0.023185 -0.0679606,0.0300276 -0.0273268,0.00823228 -0.0799567,0.020748 -0.107496,0.0173622 -0.0372244,-0.00457087 -0.0645827,-0.0361772 -0.0577638,-0.0742244l0.00277559 -0.0154803 0.012063 -0.0100984c0.0148346,-0.0124173 0.0300039,-0.0250512 0.0440984,-0.0386024 -0.0348701,-0.0372598 -0.0570748,-0.0840669 -0.0570748,-0.136634 0,-0.0150276 0.00185433,-0.0300039 0.00548819,-0.0445866 0.0149843,-0.0600472 0.058126,-0.107531 0.110087,-0.139098 0.0579567,-0.0352126 0.127193,-0.051563 0.194685,-0.051563 0.0674921,0 0.136728,0.0163504 0.194689,0.051563 0.0297244,0.0180591 0.0567795,0.0414488 0.0772677,0.0696772z"
        fill={outerBorder}
      />
      <Path
        d="M0.6905 0.360925l0.0289488 0.0119409c0.0685,0.0282559 0.131118,0.0863976 0.131118,0.165256 0,0.0499921 -0.025815,0.0929331 -0.0628898,0.12437 0.00931102,0.014685 0.0225354,0.0291102 0.0348622,0.0394252l0.00526378 0.00440551 0.000637795 0.00683071c0.002,0.0214488 -0.0166142,0.0367638 -0.0357402,0.041374 -0.0169173,0.00407874 -0.056563,-0.00724803 -0.0730236,-0.0127323 -0.0152008,-0.00506299 -0.034874,-0.0127283 -0.0490079,-0.0229488 -0.025185,0.0057874 -0.051063,0.00859055 -0.0768937,0.00859055 -0.0574606,0 -0.116815,-0.0140394 -0.165886,-0.0445748l-0.0381969 -0.0237717c-0.0130906,-0.00157087 -0.0260984,-0.00382677 -0.0389409,-0.00678346 -0.0188701,0.0158819 -0.0472283,0.0264331 -0.0693701,0.0330984 -0.0216417,0.00651969 -0.0741929,0.0191772 -0.0965551,0.0164291 -0.0221496,-0.00272047 -0.0388583,-0.0202717 -0.0347677,-0.0430551l0.00106693 -0.00595276 0.00464173 -0.00388583c0.0219449,-0.0183583 0.0453937,-0.0380079 0.0647441,-0.0597717 -0.0402126,-0.0345079 -0.0681732,-0.0813858 -0.0681732,-0.135909 0,-0.0128622 0.00158268,-0.0256535 0.00469685,-0.0381299 0.0132441,-0.0531063 0.0522362,-0.0949291 0.0980591,-0.122768 0.0537559,-0.0326614 0.11828,-0.047685 0.180839,-0.047685 0.0625591,0 0.127083,0.0150236 0.180843,0.047685 0.0288583,0.0175315 0.0550079,0.0406102 0.0737244,0.068563z"
        fill={innerBorder}
      />
      <Path
        d="M0.436697 0.668713c0.0421024,0.0262008 0.0970157,0.0420591 0.157079,0.0420591 0.0284331,0 0.0557087,-0.00356299 0.0810157,-0.0100827 0.0230551,0.0221654 0.0993898,0.0411614 0.114004,0.0376378 0.0247008,-0.00594882 0.0230512,-0.023626 0.0230512,-0.023626 -0.0181457,-0.0151811 -0.0362874,-0.0369764 -0.0455945,-0.0564724 0.0418661,-0.0310709 0.0676496,-0.0734213 0.0676496,-0.120106 0,-0.0641181 -0.048626,-0.120075 -0.120807,-0.14985 0.00341339,0.00809843 0.00624803,0.0165 0.00840945,0.025189 0.00325591,0.0130236 0.00490945,0.026374 0.00490945,0.0397953 0,0.0134213 -0.00165354,0.0267756 -0.00490945,0.0397992 -0.013685,0.0549016 -0.053748,0.0981772 -0.101161,0.126976 -0.054622,0.033189 -0.120059,0.0485591 -0.183646,0.0486811z"
        fill={background}
      />
      <Path
        d="M0.436697 0.668713c0.0111811,0.00695669 0.0232638,0.013185 0.0361102,0.0185827 0.0170787,0.00269291 0.0346811,0.00411417 0.0526772,0.00411417 0.151551,0 0.275634,-0.0997717 0.286051,-0.226138 -0.021,-0.0323858 -0.055563,-0.059311 -0.0984409,-0.077 0.00341339,0.00809843 0.00624803,0.0165 0.00840945,0.025189 0.00325591,0.0130236 0.00490945,0.026374 0.00490945,0.0397953 0,0.0134213 -0.00165354,0.0267756 -0.00490945,0.0397992 -0.013685,0.0549016 -0.053748,0.0981772 -0.101161,0.126976 -0.054622,0.033189 -0.120059,0.0485591 -0.183646,0.0486811z"
        fill={color}
      />
      <Path
        d="M0.435933 0.261343c0.147425,0 0.266933,0.0859252 0.266933,0.191917 0,0.105992 -0.119508,0.191909 -0.266933,0.191909 -0.0316063,0 -0.0619291,-0.00395276 -0.0900591,-0.0112047 -0.0325276,0.035815 -0.141539,0.0534724 -0.159016,0.0513307 -0.0240945,-0.0029685 -0.0203976,-0.0235709 -0.0203976,-0.0235709 0.0201654,-0.0168701 0.0549291,-0.0456457 0.0777441,-0.0749567 -0.0465433,-0.0345472 -0.0752008,-0.081622 -0.0752008,-0.133508 0,-0.105992 0.119508,-0.191917 0.266929,-0.191917z"
        fill={background}
      />
      <Path
        d="M0.435933 0.261343c0.113409,0 0.210287,0.0508543 0.248961,0.122571 -0.0181969,0.119539 -0.138583,0.211886 -0.284394,0.211886 -0.0886102,0 -0.167819,-0.0341142 -0.220425,-0.0877008 -0.00719685,-0.017378 -0.0110709,-0.0357795 -0.0110709,-0.0548386 0,-0.105992 0.119508,-0.191917 0.266929,-0.191917z"
        fill={color}
      />
    </Svg>
  );
}
