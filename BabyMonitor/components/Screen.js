import React from "react";
import { ScrollView, View } from "react-native";

export default function Screen({ children, style, contentStyle }) {
  return (
    <ScrollView
      style={[{ flex: 1, backgroundColor: "#fff" }, style]}
      contentContainerStyle={[
        { paddingBottom: 40 }, // ruimte onderaan
        contentStyle,
      ]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View>{children}</View>
    </ScrollView>
  );
}
