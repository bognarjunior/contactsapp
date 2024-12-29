import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } =  theme;

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
    zIndex: 1
  },
  search: {
    marginBottom: -27
  },
  section: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    backgroundColor: colors.blue,
    width: 34,
    height: 34,
    color: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 12,
    marginTop: 32
  },
  contentList: {
    padding: 24,
    gap: 12,
    paddingTop: 64
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray_400,
    marginTop: 12
  }
})