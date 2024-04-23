import {
  MD3LightTheme as DefaultTheme,
  configureFonts,
  PaperProvider,
} from "react-native-paper";
import { fontConfig } from "./fonts";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function ThemeProvider(props) {
  return <PaperProvider theme={theme}>{props.children}</PaperProvider>;
}
