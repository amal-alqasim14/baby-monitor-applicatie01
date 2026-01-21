import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 18,
    paddingTop: 40,
  },

  /* Top bar */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  brand: { flexDirection: "row", alignItems: "center" },
  logo: { width: 120, height: 50 },

  menuBtn: { padding: 10 },
  menuLine: {
    width: 28,
    height: 4,
    backgroundColor: "#A8A8A8",
    borderRadius: 6,
    marginVertical: 3,
  },

  /* Live */
  liveWrap: {
    height: 210,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#eaeaea",
    marginBottom: 18,
    position: "relative",
  },
  liveImage: { width: "100%", height: "100%" },
  liveOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.60)",
  },
  tapToView: {
    position: "absolute",
    alignSelf: "center",
    top: "45%",
    fontSize: 28,
    fontWeight: "700",
    color: "#3E73AC",
  },
  topRight: {
    position: "absolute",
    right: 14,
    top: 10,
    alignItems: "flex-end",
  },
  topRightText: { color: "#ffffff", fontWeight: "700" },
  bottomLeftIcons: {
    position: "absolute",
    left: 10,
    bottom: 10,
    flexDirection: "row",
    gap: 10,
  },
  liveIcon: { fontSize: 18 },
  fullscreen: { position: "absolute", right: 12, bottom: 10, fontSize: 18 },

  /* Cards row */
  row: { flexDirection: "row", gap: 14, marginBottom: 18 },

  card: {
    flex: 1,
    backgroundColor: "#D8E4F7",
    borderRadius: 16,
    padding: 14,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#3E73AC",
    marginBottom: 10,
  },

  innerWhiteBox: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
  },
  twoCol: { flexDirection: "row", justifyContent: "space-between", marginVertical: 6 },
  bold: { fontWeight: "700", fontSize: 16 },

  innerWhiteBoxCenter: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  },
  noiseIcon: { fontSize: 42 },

  /* Sleep quality card */
  sleepCard: {
    backgroundColor: "#D8E4F7",
    borderRadius: 16,
    padding: 14,
  },
  sleepTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#3E73AC",
    textAlign: "center",
    marginBottom: 10,
  },
  bigWhiteBox: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    height: 240,
  },

  seeMoreBtn: {
    marginTop: 14,
    alignSelf: "center",
    backgroundColor: "#3E73AC",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 34,
  },
  seeMoreText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
