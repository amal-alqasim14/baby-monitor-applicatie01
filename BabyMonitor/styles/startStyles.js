import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  welcomeTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#5D92C9",
    textAlign: "center",
    marginBottom: 30,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },

  logoText: {
    fontSize: 40,
    color: "#5D92C9",
    fontWeight: "700",
    marginTop: 5,
  },

  subText: {
    color: "#A9B6C7",
    fontSize: 14,
    letterSpacing: 1,
    marginBottom: 60,
  },

  button: {
    width: "80%",
    paddingVertical: 14,
    backgroundColor: "#5D92C9",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },


  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
