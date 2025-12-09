import React from "react";
import { View, Text, Image, TouchableOpacity, Stack } from "react-native";
import styles from "../styles/startStyles";

export default function StartScreen({ navigation }) {
    return (


        <View style={styles.container}>
            <Text style={styles.welcomeTitle}>Welkom bij Baby Monitor</Text>

            <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* <Text style={styles.logoText}>BabyCare</Text> */}
            <Text style={styles.subText}>SOFTNESS YOU CAN TRUST</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Aanmelden</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]}>
                <Text style={styles.buttonText}>Nieuw account maken</Text>
            </TouchableOpacity>
        </View>
    );
}
