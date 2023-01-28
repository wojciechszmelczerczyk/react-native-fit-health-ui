import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";
const data = {
  labels: ["Protein", "Carbs", "Fat"], // optional
  data: [0.4, 0.6, 0.8],
};
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(100, 50, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const DietScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ProgressChart
          style={styles.progressChart}
          data={data}
          width={screenWidth - 25}
          height={220}
          strokeWidth={14}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    alignItems: "center",
  },
  scrollView: {},
  progressChart: {
    borderRadius: 30,
  },
});
