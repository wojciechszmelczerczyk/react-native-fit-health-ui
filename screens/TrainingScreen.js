import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { useRef } from "react";
import { WeekCalendar, CalendarProvider } from "react-native-calendars";
import testIDs from "../testIDs";
import { agendaItems, getMarkedDates } from "../agendaItems";
import TrainingView from "../components/TrainingView";

const ITEMS = agendaItems;

const TrainingScreen = () => {
  const marked = useRef(getMarkedDates());

  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
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
          testID={testIDs.weekCalendar.CONTAINER}
          firstDay={1}
          markedDates={marked.current}
        />
      </CalendarProvider>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          minHeight: "100%",
          alignItems: "center",
        }}
        style={styles.scrollExerciseContainer}
      >
        {[1,1,1,1,5].map((_, i) => (
          <TrainingView space={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  scrollExerciseContainer: {
    flexGrow: 6,
  },
});
