import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ProfileIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#C8C8C8"}
      d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
    />
  </Svg>
);
export default ProfileIcon;
