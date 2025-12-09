import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Baby Monitor</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("Monitor")}
      >
        <Text style={globalStyles.buttonText}>Start Monitor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: "#555" }]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={globalStyles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
