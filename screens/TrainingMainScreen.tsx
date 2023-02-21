import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { useRef, useContext } from "react";
import { WeekCalendar, CalendarProvider } from "react-native-calendars";
import testIDs from "../testIDs";
import { agendaItems, getMarkedDates } from "../agendaItems";
import TrainingView from "../components/TrainingView";
import { UserContext } from "../context/UserContext";
import ModalView from "../components/ModalView";

const ITEMS = agendaItems;

const TrainingScreen = ({ route, navigation }: any) => {
  const marked = useRef(getMarkedDates());

  const { modalVisible, setModalVisible } = route.params;

  const [user] = useContext(UserContext);

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
          markedDates={marked.current as any}
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
        {[1, 1].map((_, i) => (
          <TrainingView space={i} navigation={navigation} />
        ))}
      </ScrollView>
      {/* <ModalView
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      /> */}
    </View>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  scrollExerciseContainer: {
    flexGrow: 6,
  },
});
