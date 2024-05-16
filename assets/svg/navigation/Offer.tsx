import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const OfferIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#C8C8C8"}
      d="M15.005 2.003a4 4 0 0 1 3.464 6.001l4.536-.001v2h-2v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-10h-2v-2l4.536.001a4 4 0 0 1 6.465-4.646 3.983 3.983 0 0 1 2.999-1.355Zm-2 8h-2v10h2v-10Zm-4-6a2 2 0 0 0-.15 3.994l.15.006h2v-2a2 2 0 0 0-1.697-1.977l-.154-.018-.15-.005Zm6 0a2 2 0 0 0-1.995 1.85l-.005.15v2h2a2 2 0 0 0 1.994-1.85l.006-.15a2 2 0 0 0-2-2Z"
    />
  </Svg>
);
export default OfferIcon;
