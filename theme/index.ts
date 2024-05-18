import { StyleSheet } from "react-native";

export const COLORS = {
  black: "#000000",
  white: "#fff",
  green: "green",
  red: "#C00000",
  yellow: "#F5C51B",
  gold: "#FFA901",

  primary: "#000462",
  primaryLight: "#F9BBE7",
  primaryDark: "#650032",

  secondary: "#13005C",
  secondaryLight: "",

  tertiary: "#F5C51B",
  lightGray: "#E9E9E9",
  gray: "#C8C8C8", // '#B4B4B4
  darkGray: "#B4B4B4",
};

export const SIZES = {
  xxs: 8,
  xs: 12,
  sm: 15,
  md: 18,
  lg: 22,
  xl: 26,
};

export const TYPOGRAPHY = StyleSheet.create({
  h1: {
    color: COLORS.black,
    fontFamily: "asul-bold",
    fontWeight: "900",
    fontSize: SIZES.lg,
  },
  h2: {
    color: COLORS.black,
    fontFamily: "asul-bold",
    fontWeight: "700",
    fontSize: SIZES.md,
  },
  h3: {
    color: COLORS.black,
    fontFamily: "asul-regular",
    fontWeight: "500",
    fontSize: SIZES.sm,
  },
  h4: {
    color: COLORS.black,
    fontFamily: "inter-md",
    fontWeight: "500",
    fontSize: SIZES.sm,
  },
  h5: {
    color: COLORS.black,
    fontFamily: "inter-sm",
    fontWeight: "400",
    fontSize: SIZES.sm - 2,
  },
  p: {
    color: COLORS.black,
    fontFamily: "inter-xs",
    fontWeight: "400",
    fontSize: SIZES.xs,
  },
});

export const LINE = {
  horizontal: {
    height: 1,
    backgroundColor: "black",
  },
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.51,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
