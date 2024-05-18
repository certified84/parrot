import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LikeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#555"}
      d="M1.667 7.5h2.5v10h-2.5a.833.833 0 0 1-.834-.833V8.333c0-.46.374-.833.834-.833Zm4.41-1.077 5.334-5.334a.417.417 0 0 1 .545-.039l.71.533c.404.303.586.82.462 1.308l-.961 3.776H17.5c.92 0 1.667.746 1.667 1.666v1.754c0 .218-.043.433-.126.635l-2.578 6.262a.833.833 0 0 1-.77.516H6.666a.833.833 0 0 1-.833-.833V7.012c0-.221.087-.433.244-.59Z"
    />
  </Svg>
);
export default LikeIcon;
