import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Camera, CameraView } from "expo-camera";
import styles from "../styles/LiveStyles";

export default function LivePreviewCard({ onPress }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.liveWrap}>
      {hasPermission ? (
        <CameraView
          style={styles.liveImage}
          facing={Platform.OS === "web" ? "user" : "back"} // laptop meestal front webcam
        />
      ) : (
        <View style={[styles.liveImage, { justifyContent: "center", alignItems: "center" }]}>
          <Text style={{ color: "#666" }}>
            {hasPermission === false ? "Geen camera permissie" : "Camera laden..."}
          </Text>
        </View>
      )}

      <View style={styles.liveOverlay} />
      <Text style={styles.tapToView}>Tap to view</Text>

      <View style={styles.topRight}>
        {/* <Text style={styles.topRightText}>26°</Text>
        <Text style={styles.topRightText}>30%</Text> */}
      </View>

      <View style={styles.bottomLeftIcons}>
        {/* <Text style={styles.liveIcon}></Text>
        <Text style={styles.liveIcon}></Text>
        <Text style={styles.liveIcon}></Text> */}
      </View>

      <Text style={styles.fullscreen}>⤢</Text>
    </TouchableOpacity>
  );
}
