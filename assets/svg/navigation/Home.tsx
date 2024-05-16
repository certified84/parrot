import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#C8C8C8"}
      d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.489a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79v10.51Zm-10-7v6h2v-6h-2Z"
    />
  </Svg>
);
export default HomeIcon;
