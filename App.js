import { AppRegistry } from "react-native";
import ThemeProvider from "./Theme";
import List from "./Pages/List";

export default function App() {
  return (
    <ThemeProvider>
      <List />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("Habit Tracker", () => App);
