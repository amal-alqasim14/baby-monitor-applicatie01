import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LiveScreen from "../screens/LiveScreen";
import SleepReportScreen from "../screens/SleepReportScreen";
import WhiteNoiseScreen from "../screens/WhiteNoiseScreen";
import SleepQualityScreen from "../screens/SleepQualityScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
 <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: true,
        headerTintColor: "#5D92C9",
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />


      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Live" component={LiveScreen} />
      <Stack.Screen name="SleepReport" component={SleepReportScreen} />
      <Stack.Screen name="WhiteNoise" component={WhiteNoiseScreen} />
      <Stack.Screen name="SleepQuality" component={SleepQualityScreen} />

    </Stack.Navigator>
  );
}
