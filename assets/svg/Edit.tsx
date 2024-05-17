import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EditIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M5 18.89h1.414l9.314-9.314-1.414-1.414L5 17.476v1.414Zm16 2H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 18.89H21v2ZM15.728 6.748l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414Z"
    />
  </Svg>
);
export default EditIcon;
