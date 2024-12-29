import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const {colors, fontFamily} = theme;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
    gap: 12
  },
  name: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: 18 
  },
})