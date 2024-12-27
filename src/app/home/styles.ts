import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const colors =  theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    width: "100%",
    height: 132,
    backgroundColor: colors.blue,
    justifyContent: "flex-end",
  }
})