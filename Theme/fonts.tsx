export const fontConfig = {
  // customVariant: {
  //   fontFamily: Platform.select({
  //     web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  //     ios: 'System',
  //     default: 'sans-serif',
  //   }),
  //   fontWeight: '400',
  //   letterSpacing: 0.5,
  //   lineHeight: 22,
  //   fontSize: 20,
  // }
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "400" as "400",
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "500" as "500",
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "300" as "300",
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "100" as "100",
    },
  },
  ios: {
    regular: {
      fontFamily: "System",
      fontWeight: "400" as "400",
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500" as "500",
    },
    light: {
      fontFamily: "System",
      fontWeight: "300" as "300",
    },
    thin: {
      fontFamily: "System",
      fontWeight: "100" as "100",
    },
  },
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal" as "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal" as "normal",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal" as "normal",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal" as "normal",
    },
  },
};
