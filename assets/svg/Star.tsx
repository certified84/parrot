import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const Star = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect
      width={21.05}
      height={21.05}
      y={0.95}
      fill={props.fill ?? "#C8C8C8"}
      rx={4.895}
    />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m10.77 14.785-3.453 1.932.771-3.88-2.905-2.688 3.93-.465L10.77 6.09l1.658 3.594 3.929.466-2.905 2.686.771 3.881-3.453-1.932Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4.896 5.846h11.749v11.749H4.895z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Star;
