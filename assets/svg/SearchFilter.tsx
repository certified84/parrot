import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchFilter = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21.25 12H8.895m-4.361 0H2.75m1.784 0a2.18 2.18 0 1 1 4.36 0 2.18 2.18 0 0 1-4.36 0Zm16.716 6.607h-5.748m0 0a2.182 2.182 0 0 1-3.723 1.541 2.18 2.18 0 0 1-.638-1.541m4.361 0a2.18 2.18 0 0 0-4.361 0m0 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m11.034 0a2.18 2.18 0 1 1 4.36 0 2.18 2.18 0 0 1-4.36 0Z"
    />
  </Svg>
);
export default SearchFilter;
