import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fontFamily.medium
  }
})