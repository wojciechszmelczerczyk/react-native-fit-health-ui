import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { WeekCalendar, CalendarProvider } from "react-native-calendars";
import testIDs from "../testIDs";
import { agendaItems, getMarkedDates } from "../agendaItems";
import { getTheme, themeColor } from "../theme";

const ITEMS = agendaItems;

const TrainingScreen = (props) => {
  const { weekView } = props;

  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#eeee" }}>
      <CalendarProvider
        date={ITEMS[1]?.title}
        theme={{
          backgroundColor: "#eeee",
        }}
      >
        <WeekCalendar
          theme={{
            selectedDayBackgroundColor: "#6432ff",
            dotColor: "#6432ff",
            dotStyle: { marginTop: -2 },
            calendarBackground: "transparent",
            todayTextColor: "#6432ff",
          }}
          calendarHeight={100}
          testID={testIDs.weekCalendar.CONTAINER}
          firstDay={1}
          markedDates={marked.current}
        />
      </CalendarProvider>
    </View>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({});
