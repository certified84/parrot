import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BusinessIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#555"
      d="M17.5 11.034v5.632h.833v1.667H1.666v-1.667H2.5v-5.632A3.746 3.746 0 0 1 .833 7.916c0-.69.187-1.353.528-1.919l2.26-3.914a.833.833 0 0 1 .721-.417h11.315c.298 0 .573.159.722.417l2.252 3.901c.348.579.535 1.243.535 1.932 0 1.3-.661 2.446-1.666 3.118Zm-1.667.61a3.747 3.747 0 0 1-3.125-1.133A3.747 3.747 0 0 1 10 11.665 3.747 3.747 0 0 1 7.29 10.51a3.747 3.747 0 0 1-3.125 1.133v5.023h11.667v-5.023ZM4.823 3.332l-2.027 3.51A2.083 2.083 0 1 0 6.518 8.69c.28-.697 1.267-.697 1.547 0a2.084 2.084 0 0 0 3.87 0c.28-.697 1.267-.697 1.546 0a2.084 2.084 0 1 0 3.714-1.86l-2.02-3.497H4.825Z"
    />
  </Svg>
);
export default BusinessIcon;
