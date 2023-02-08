import { Platform } from "react-native";

export const themeColor = "#6432ff";
export const lightThemeColor = "#f2f7f7";

export function getTheme() {
  const disabledColor = "grey";

  return {
    // arrows
    arrowColor: "black",
    arrowStyle: { padding: 0 },
    // knob
    expandableKnobColor: themeColor,
    // calendarBackground: "transparent",
    // month
    monthTextColor: "black",
    textMonthFontSize: 16,
    textMonthFontWeight: "bold",
    // day names
    textSectionTitleColor: "black",
    textDayHeaderFontSize: 12,
    textDayHeaderFontWeight: "normal",
    // dates
    dayTextColor: themeColor,
    todayTextColor: "#6432ff",
    textDayFontSize: 18,
    textDayFontWeight: "500",
    textDayStyle: { marginTop: Platform.OS === "android" ? 2 : 4 },
    // selected date
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: "white",
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: "white",
    disabledDotColor: disabledColor,
    dotStyle: { marginTop: -2 },
  };
}
