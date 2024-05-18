import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CommentIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#555"
      d="M8.333 2.5h3.333a6.667 6.667 0 1 1 0 13.333v2.917c-4.166-1.667-10-4.167-10-9.583A6.667 6.667 0 0 1 8.333 2.5ZM10 14.167h1.666a5 5 0 0 0 0-10H8.333a5 5 0 0 0-5 5c0 3.008 2.052 4.971 6.667 7.066v-2.066Z"
    />
  </Svg>
);
export default CommentIcon;
