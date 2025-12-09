import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  box: {
    width: "100%",
    backgroundColor: "#E6EEFA",
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#5D92C9",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C3C7CE",
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 18,
  },

  button: {
    width: "100%",
    backgroundColor: "#5D92C9",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 14,
    marginTop: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },

  linkText: {
    color: "#555",
    fontSize: 14,
    textAlign: "center",
    marginTop: 14,
  },
});
