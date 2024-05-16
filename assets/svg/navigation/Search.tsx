import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#C8C8C8"}
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm8.485 16.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"
    />
  </Svg>
);
export default SearchIcon;
