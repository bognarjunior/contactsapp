import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const {colors, fontFamily} = theme;

export const styles = StyleSheet.create({
  container: {},
  name: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: 18 
  },
})