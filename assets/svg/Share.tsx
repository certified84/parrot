import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ShareIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#555"
      d="M10.833 11.667H9.167a7.5 7.5 0 0 0-6.64 4.01 8.333 8.333 0 0 1 8.306-9.009V2.083l8.75 7.083-8.75 7.084v-4.584Zm-1.666-1.666H12.5v2.756l4.434-3.59-4.434-3.59v2.757h-1.667a6.651 6.651 0 0 0-5.047 2.311 9.157 9.157 0 0 1 3.38-.644Z"
    />
  </Svg>
);
export default ShareIcon;
