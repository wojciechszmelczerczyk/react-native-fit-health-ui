import React, { useRef, useCallback } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  ExpandableCalendar,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import testIDs from "../testIDS";
import { agendaItems, getMarkedDates } from "../agendaItems";
import { getTheme, themeColor, lightThemeColor } from "../theme";

const screenWidth = Dimensions.get("window").width;

const leftArrowIcon = require("../assets/previous.png");
const rightArrowIcon = require("../assets/next.png");
const ITEMS = agendaItems;

const CalendarScreen = (props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  return (
    <CalendarProvider date={ITEMS[1]?.title} theme={todayBtnTheme.current}>
      {weekView ? (
        <WeekCalendar
          style={{ width: screenWidth }}
          theme={theme.current}
          markedDates={marked.current}
          testID={testIDs.weekCalendar.CONTAINER}
          firstDay={1}
        />
      ) : (
        <ExpandableCalendar
          theme={theme.current}
          style={{ width: screenWidth }}
          testID={testIDs.expandableCalendar.CONTAINER}
          firstDay={1}
          markedDates={marked.current}
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
        />
      )}
    </CalendarProvider>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {},
  header: {},
});
