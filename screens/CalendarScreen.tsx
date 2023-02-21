import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { DayNameContext } from "../context/DayNameContext";
import { DayNumberContext } from "../context/DayNumberContext";

const CalendarScreen = () => {
  const navigator = useNavigation();

  const [, setDayName] = useContext(DayNameContext) as any;
  const [, setDayNumber] = useContext(DayNumberContext) as any;

  function getDayName(dateString: any) {
    console.log(dateString);

    const data = new Date(dateString).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const name = data.split(" ")[0];

    const number = !data.split(" ")[2]
      ? data.split(" ")[3]
      : data.split(" ")[2];

    setDayName(name);
    setDayNumber(number);
  }

  return (
    <CalendarList
      theme={{ todayTextColor: "#6432ff" }}
      onDayPress={({ dateString }) => {
        getDayName(dateString);
      }}
      onDayLongPress={() => console.log("on long press")}
    />
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {},
  header: {},
});
