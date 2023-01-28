import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { BlurView } from "expo-blur";

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
const DietScreen = ({ modalVisible, setModalVisible }) => {
  console.log(modalVisible);
  return (
    <>
    {modalVisible ? (
        <BlurView
          tint='dark'
          intensity={100}
          style={{ position: "absolute", height: "100%", width: "100%", zIndex:1 }}
        />
      ) : (
        ""
      )}
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
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  </>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: "60%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
