import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ReviewIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#C8C8C8"}
      d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1ZM8 7v2h8V7H8Zm0 4v2h8v-2H8Zm0 4v2h5v-2H8Z"
    />
  </Svg>
);
export default ReviewIcon;
