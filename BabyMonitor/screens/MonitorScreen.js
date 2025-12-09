import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function MonitorScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Live Monitor</Text>
      <Text style={globalStyles.subText}>Camera + Audio komen hier</Text>
    </View>
  );
}
