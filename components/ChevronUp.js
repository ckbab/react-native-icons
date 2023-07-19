import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function ChevronUp({
  background,
  color,
  innerBorder,
  outerBorder,
  size,
  style,
}) {
  return (
    <Svg height={size} style={style} viewBox="0 0 1 1" width={size}>
      <G scale={1.36} transform="translate(1, 0) rotate(90)" translate={-0.18}>
        <Path
          d="M0.499386 0.499996l0.18902 0.189024c0.029874,0.029874 0.0298819,0.0785394 3.93701e-006,0.108413l-0.0366693 0.0366693c-0.029878,0.029878 -0.0785394,0.029874 -0.108417,-3.93701e-006 -0.0895157,-0.0895315 -0.180528,-0.177579 -0.268571,-0.268575l-0.00140157 -0.00145276 -0.0016378 -0.00177953 -0.00146457 -0.00166929 -0.00159449 -0.00191732 -0.00146457 -0.00185827 -0.0014685 -0.00197638 -0.0012874 -0.00179921 -0.00133858 -0.00199213 -0.00129921 -0.00206299 -0.00112992 -0.00186614 -0.00120866 -0.00214961 -0.000996063 -0.00185433 -0.000996063 -0.00196457 -0.00106693 -0.00225984 -0.000944882 -0.00215354 -0.000818898 -0.00196063 -0.000889764 -0.00232283 -0.000708661 -0.00197638 -0.000740157 -0.00225591 -0.000614173 -0.00200394 -0.00065748 -0.00238189 -0.000503937 -0.00198819 -0.000566929 -0.00254724 -0.000405512 -0.00204331 -0.000338583 -0.0018937 -0.000374016 -0.00248819 -0.000279528 -0.00217717 -0.000220472 -0.00209055 -0.000188976 -0.00243307 -0.00011811 -0.00217717 -7.08661e-005 -0.00220866 -2.3622e-005 -0.0021063 4.72441e-005 -0.00241339 8.66142e-005 -0.00219291 0.000114173 -0.00192126 0.000208661 -0.00242126 0.000271654 -0.00235039 0.000295276 -0.00217717 0.000299213 -0.0019252 0.0005 -0.00267323 0.000417323 -0.00198031 0.000468504 -0.00203543 0.00061811 -0.00237795 0.000582677 -0.00204724 0.000779528 -0.00247244 0.000673228 -0.0019685 0.000665354 -0.00182677 0.000877953 -0.00223622 0.000893701 -0.00212598 0.00107874 -0.00237402 0.00080315 -0.00166929 0.00123228 -0.00238976 0.000964567 -0.0017874 0.00124803 -0.00214961 0.00110236 -0.00181496 0.00131496 -0.00203543 0.0013937 -0.00202756 0.00124409 -0.00174016 0.00143701 -0.00189764 0.00169291 -0.00210236 0.00120472 -0.00143701 0.00167717 -0.00189764 0.00179528 -0.00191732 0.000897638 -0.00092126c0.0883386,-0.0906614 0.179012,-0.178996 0.268504,-0.268508 0.029878,-0.029878 0.0785394,-0.0298819 0.108417,-3.93701e-006l0.0366693 0.0366693c0.029878,0.029874 0.0298701,0.0785394 -3.93701e-006,0.108413l-0.18902 0.18902z"
          fill={outerBorder}
        />
        <Path
          d="M0.461677 0.499996l0.207874 0.207878c0.0194685,0.0194685 0.0194724,0.0512362 3.93701e-006,0.0707047l-0.0366693 0.0366693c-0.0194685,0.0194724 -0.0512362,0.0194685 -0.0707047,-3.93701e-006 -0.0894173,-0.0894291 -0.180008,-0.177685 -0.268264,-0.268264l-0.00117323 -0.0012126 -0.00118898 -0.00129134 -0.00102362 -0.00116929 -0.00115354 -0.00138583 -0.00103937 -0.0013189 -0.000925197 -0.00123622 -0.00105512 -0.00147638 -0.000929134 -0.00138583 -0.000814961 -0.00128346 -0.000933071 -0.00154331 -0.000740157 -0.00130709 -0.000838583 -0.00155906 -0.000685039 -0.00135433 -0.000767717 -0.00162205 -0.000590551 -0.00133858 -0.000677165 -0.00162205 -0.000543307 -0.00140945 -0.000594488 -0.00165354 -0.00046063 -0.0013937 -0.000511811 -0.00166535 -0.000401575 -0.00144094 -0.000417323 -0.00164567 -0.000362205 -0.0016063 -0.000295276 -0.00146457 -0.000279528 -0.00156299 -0.000240157 -0.00157087 -0.000204724 -0.00157087 -0.000185039 -0.00172835 -0.00011811 -0.00148425 -9.05512e-005 -0.00157874 -5.51181e-005 -0.00158268 -1.9685e-005 -0.00174016 2.3622e-005 -0.00148425 5.90551e-005 -0.00158661 9.44882e-005 -0.0015748 0.000149606 -0.00173622 0.000165354 -0.00147638 0.000208661 -0.0015748 0.000244094 -0.00156693 0.000314961 -0.0017126 0.000295276 -0.00142126 0.000389764 -0.00169291 0.000374016 -0.00144882 0.000476378 -0.00168504 0.000480315 -0.0015315 0.000484252 -0.00142913 0.000547244 -0.00150787 0.000629921 -0.0016063 0.000633858 -0.00150394 0.000681102 -0.00150787 0.000653543 -0.0013622 0.000787402 -0.00153937 0.000799213 -0.00147638 0.000759843 -0.0013189 0.000905512 -0.00149213 0.000929134 -0.00143701 0.000862205 -0.00126378 0.0010315 -0.00144094 0.00101181 -0.00133465 0.00106693 -0.00133465 0.000992126 -0.0011811 0.00122047 -0.00138189 0.00114567 -0.00122835 0.000897638 -0.00092126c0.0882559,-0.0905787 0.178846,-0.178835 0.268264,-0.268264 0.0194685,-0.0194724 0.0512362,-0.0194764 0.0707047,-3.93701e-006l0.0366693 0.0366693c0.0194685,0.0194685 0.0194646,0.0512362 -3.93701e-006,0.0707047l-0.207874 0.207874z"
          fill={innerBorder}
        />
        <Path
          d="M0.573965 0.803461c0.0129646,0.0129685 0.0341732,0.0129685 0.0471378,3.93701e-006l0.0366693 -0.0366693c0.0129606,-0.0129646 0.0129606,-0.0341693 -3.93701e-006,-0.0471378l-0.219657 -0.219661 0.219657 -0.219657c0.0129646,-0.0129685 0.0129646,-0.0341732 3.93701e-006,-0.0471378l-0.0366693 -0.0366693c-0.0129646,-0.0129646 -0.0341732,-0.0129646 -0.0471378,3.93701e-006 -0.0893701,0.0893701 -0.178748,0.178732 -0.26811,0.26811l-0.000897638 0.00092126 -0.000870079 0.000937008 -0.000838583 0.000956693 -0.000811024 0.000968504 -0.000783465 0.000988189 -0.000755906 0.00100394 -0.000724409 0.00101575 -3.93701e-006 0 -0.00069685 0.0010315 -0.000669291 0.00104724 -0.000637795 0.00105512 -3.93701e-006 0 -0.000610236 0.00107087 -0.000582677 0.00108268 -3.93701e-006 0 -0.000551181 0.00109449 -3.93701e-006 0 -0.000523622 0.00110236 -3.93701e-006 0 -0.000496063 0.00111811 -0.000468504 0.00112205 -3.93701e-006 0 -0.000437008 0.00113386 -3.93701e-006 0 -0.000409449 0.00114173 -3.93701e-006 0 -0.00038189 0.00114961 -0.000358268 0.00115748 -0.000326772 0.00116535 -0.000299213 0.00116929 -0.000267717 0.00117717 -3.93701e-006 0 -0.000240157 0.0011811 -0.000212598 0.00118504 -0.000185039 0.00118898 -0.00015748 0.00119291 -0.000129921 0.00119291 -9.84252e-005 0.00120079 -7.08661e-005 0.00119685 -4.33071e-005 0.00120079 -1.5748e-005 0.00120079 1.5748e-005 0.00120472 4.33071e-005 0.00120079 7.08661e-005 0.00119685 9.84252e-005 0.00120079 0.000129921 0.00119291 0.00015748 0.00119291 0.000185039 0.00118898 0.000212598 0.00118504 0.000240157 0.0011811 3.93701e-006 0 0.000267717 0.00117717 0.000299213 0.00116929 0.000326772 0.00116535 0.000358268 0.00115748 0.00038189 0.00114961 3.93701e-006 0 0.000409449 0.00114173 3.93701e-006 0 0.000437008 0.00113386 3.93701e-006 0 0.000468504 0.00112205 0.000496063 0.00111811 3.93701e-006 0 0.000523622 0.00110236 3.93701e-006 0 0.000551181 0.00109449 3.93701e-006 0 0.000582677 0.00108268 0.000610236 0.00107087 3.93701e-006 0 0.000637795 0.00105512 0.000669291 0.00104724 0.00069685 0.0010315 3.93701e-006 0 0.000724409 0.00101575 0.000755906 0.00100394 0.000783465 0.000988189 0.000811024 0.000968504 0.000838583 0.000956693 0.000870079 0.000937008 0.000897638 0.00092126c0.0893622,0.089378 0.17874,0.17874 0.26811,0.26811z"
          fill={background}
        />
        <Path
          d="M0.569437 0.631327l-0.131327 -0.131331 0.219657 -0.219657c0.0129646,-0.0129685 0.0129646,-0.0341732 3.93701e-006,-0.0471378l-0.0366693 -0.0366693c-0.0129646,-0.0129646 -0.0341732,-0.0129646 -0.0471378,3.93701e-006 -0.0893701,0.0893701 -0.178748,0.178732 -0.26811,0.26811l-0.000897638 0.00092126 -0.000870079 0.000937008 -0.000838583 0.000956693 -0.000811024 0.000968504 -0.000783465 0.000988189 -0.000755906 0.00100394 -0.000724409 0.00101575 -3.93701e-006 0 -0.00069685 0.0010315 -0.000669291 0.00104724 -0.000637795 0.00105512 -3.93701e-006 0 -0.000610236 0.00107087 -0.000582677 0.00108268 -3.93701e-006 0 -0.000551181 0.00109449 -3.93701e-006 0 -0.000523622 0.00110236 -3.93701e-006 0 -0.000496063 0.00111811 -0.000468504 0.00112205 -3.93701e-006 0 -0.000437008 0.00113386 -3.93701e-006 0 -0.000409449 0.00114173 -3.93701e-006 0 -0.00038189 0.00114961 -0.000358268 0.00115748 -0.000326772 0.00116535 -0.000299213 0.00116929 -0.000267717 0.00117717 -3.93701e-006 0 -0.000240157 0.0011811 -0.000212598 0.00118504 -0.000185039 0.00118898 -0.00015748 0.00119291 -0.000129921 0.00119291 -9.84252e-005 0.00120079 -7.08661e-005 0.00119685 -4.33071e-005 0.00120079 -1.5748e-005 0.00120079 1.5748e-005 0.00120472 4.33071e-005 0.00120079 7.08661e-005 0.00119685 9.84252e-005 0.00120079 0.000129921 0.00119291 0.00015748 0.00119291 0.000185039 0.00118898 0.000212598 0.00118504 0.000240157 0.0011811 3.93701e-006 0 0.000267717 0.00117717 0.000299213 0.00116929 0.000326772 0.00116535 0.000358268 0.00115748 0.00038189 0.00114961 3.93701e-006 0 0.000409449 0.00114173 3.93701e-006 0 0.000437008 0.00113386 3.93701e-006 0 0.000468504 0.00112205 0.000496063 0.00111811 3.93701e-006 0 0.000523622 0.00110236 3.93701e-006 0 0.000551181 0.00109449 3.93701e-006 0 0.000582677 0.00108268 0.000610236 0.00107087 3.93701e-006 0 0.000637795 0.00105512 0.000669291 0.00104724 0.00069685 0.0010315 3.93701e-006 0 0.000724409 0.00101575 0.000755906 0.00100394 0.000783465 0.000988189 0.000811024 0.000968504 0.000838583 0.000956693 0.000870079 0.000937008 0.000897638 0.00092126 0.0998465 0.0998504c0.0238701,0.00508268 0.0484961,0.00777165 0.0736811,0.00777165 0.0309843,0 0.0611299,-0.00403543 0.0900551,-0.0116457z"
          fill={color}
        />
      </G>
    </Svg>
  );
}
