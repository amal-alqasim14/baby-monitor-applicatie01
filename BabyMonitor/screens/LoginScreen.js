import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/loginStyles";
import HomeScreen from "./HomeScreen";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Aanmelden</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mailadres"
          placeholderTextColor="#777"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Wachtwoord"
          placeholderTextColor="#777"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Aanmelden</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => alert("Password reset ")}>
          <Text style={styles.linkText}>Wachtwoord vergeten?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
