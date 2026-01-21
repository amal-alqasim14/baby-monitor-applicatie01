import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function SettingsScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings screen</Text>
    </View>
  );
}