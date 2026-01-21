import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LivePreviewCard from "../components/LivePreviewCard";
import styles from "../styles/HomeStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.brand}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} resizeMode="contain" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.menuBtn}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
      </View>
{/* Live Preview */}
      <LivePreviewCard onPress={() => navigation.navigate("Live")} />

{/* Cards row */}
      <View style={styles.row}>
        {/* Sleep Report */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.card}
          onPress={() => navigation.navigate("SleepReport")}
        >
          <Text style={styles.cardTitle}>Sleep Report</Text>

          <View style={styles.innerWhiteBox}>
            <View style={styles.twoCol}>
              <Text style={styles.bold}>test</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* White noise */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.card}
          onPress={() => navigation.navigate("WhiteNoise")}
        >
          <Text style={styles.cardTitle}>White noise</Text>

          <View style={styles.innerWhiteBoxCenter}>
            <Text style={styles.noiseIcon}>test</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sleep quality */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.sleepCard}
        onPress={() => navigation.navigate("SleepQuality")}
      >
        <Text style={styles.sleepTitle}>Sleep quality</Text>

        <View style={styles.bigWhiteBox} />

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.seeMoreBtn}
          onPress={() => navigation.navigate("SleepQuality")}
        >
          <Text style={styles.seeMoreText}>see more</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      
    </View>

  );
}
