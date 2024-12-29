import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const colors =  theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_200,
  },
  header:{
    width: "100%",
    height: 132,
    backgroundColor: colors.blue,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 100
  },
  search: {
    marginBottom: -27
  }
})