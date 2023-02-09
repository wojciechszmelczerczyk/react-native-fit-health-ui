import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useContext} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DayNameContext } from "../context/DayNameContext";
import { DayNumberContext } from "../context/DayNumberContext";

const DateHeader = ({ navigator }) => {
  const [dayName, setDayName] = useContext(DayNameContext);
  const [dayNumber, setDayNumber] = useContext(DayNumberContext);

  return (
    <View>
      <TouchableOpacity onPress={() => navigator.navigate("Calendar")}>
        <Text style={{ fontSize: 15 }}>
          {dayName}, {dayNumber}
          <MaterialCommunityIcons name={"menu-swap"} size={17} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({});
