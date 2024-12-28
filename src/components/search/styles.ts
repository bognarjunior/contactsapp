import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.gray_100,
    borderRadius: 18,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 7
  },
  input:{
    flex: 1,
    color: colors.black,
    fontSize: 16,
    fontFamily:fontFamily.regular
  }
})