import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  SafeAreaView,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { BlurView } from "expo-blur";
import dishArray from "../data/dishData";
import DropDownPicker from "react-native-dropdown-picker";
import { getDish } from "../services/DietService";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as _ from "lodash";

const data = {
  labels: ["Protein", "Carbs", "Fat"],
  data: [0, 0, 0],
};
const screenWidth = Dimensions.get("window").width;
const dishAreaHeight = Dimensions.get("window").height - 235;

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
  const [openBreakfast, setOpenBreakfast] = useState(false);
  const [openLunch, setOpenLunch] = useState(false);
  const [openDinner, setOpenDinner] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [openOptionsSearch, setOpenOptionsSearch] = useState(false);
  const [value, setValue] = useState(null);
  const [valueSearch, setValueSearch] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [chosenDishes, setChosenDishes] = useState([]);
  const [loading, setLoading] = useState(false);

  const onOpenOptions = useCallback(() => setOpenOptionsSearch(false), []);
  const onOpenOptionsSearch = useCallback(() => setOpenOptions(false), []);

  const onOpenBreakfast = useCallback(() => {
    setOpenLunch(false);
    setOpenDinner(false);
  }, []);

  const onOpenLunch = useCallback(() => {
    setOpenBreakfast(false);
    setOpenDinner(false);
  }, []);

  const onOpenDinner = useCallback(() => {
    setOpenBreakfast(false);
    setOpenLunch(false);
  }, []);

  const onChangeSearchValue = async (text) => {
    setLoading(true);

    const { data } = await getDish(text);

    const dishLabels = data.hits.map((dish) => dish.recipe.label);

    const formattedDishLabels = dishLabels.map((label) => {
      return { label, value: label.toLowerCase() };
    });
    setDishes(formattedDishLabels);
    setLoading(false);
  };

  const submitModal = async () => {
    const chosenDish = await getDish(valueSearch);
    chosenDishes.push({
      label: chosenDish.data.hits[0].recipe.label,
      value: chosenDish.data.hits[0].recipe.label.toLowerCase(),
    });
    setChosenDishes(chosenDishes);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {modalVisible ? (
        <BlurView
          tint='dark'
          intensity={100}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 1,
          }}
        />
      ) : (
        ""
      )}
      <SafeAreaView style={styles.container}>
        <View contentContainerStyle={styles.scrollView}>
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
          <View style={{ ...styles.dishContainer, minHeight: dishAreaHeight }}>
            {dishArray.map((dish, i) => (
              <DropDownPicker
                key={i}
                open={
                  dish.label === "Breakfast"
                    ? openBreakfast
                    : dish.label === "Lunch"
                    ? openLunch
                    : openDinner
                }
                onOpen={
                  dish.label === "Breakfast"
                    ? onOpenBreakfast
                    : dish.label === "Lunch"
                    ? onOpenLunch
                    : onOpenDinner
                }
                listMode={"SCROLLVIEW"}
                dropDownContainerStyle={styles.dishDropdown}
                dropDownDirection={"BOTTOM"}
                placeholder={`${dish.label}: ${0} kcal`}
                disabled={dishes.length ? false : true}
                disableBorderRadius={true}
                style={styles.dishDropdown}
                value={value}
                itemSeparator={true}
                itemSeparatorStyle={styles.separator}
                zIndex={i === 0 ? 3000 : i === 1 ? 2000 : 1000}
                zIndexInverse={i === 0 ? 1000 : i === 1 ? 2000 : 3000}
                items={chosenDishes}
                setOpen={
                  dish.label === "Breakfast"
                    ? setOpenBreakfast
                    : dish.label === "Lunch"
                    ? setOpenLunch
                    : setOpenDinner
                }
                ArrowDownIconComponent={() =>
                  dishes.length ? (
                    <MaterialIcons name={"keyboard-arrow-right"} size={20} />
                  ) : (
                    ""
                  )
                }
                ArrowUpIconComponent={() =>
                  dishes.length ? (
                    <MaterialIcons name={"keyboard-arrow-down"} size={20} />
                  ) : (
                    ""
                  )
                }
                closeAfterSelecting={false}
                min={0}
              />
            ))}
          </View>
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add dish!</Text>
                <DropDownPicker
                  items={dishes}
                  zIndex={2000}
                  zIndexInverse={1000}
                  value={valueSearch}
                  searchable={true}
                  onChangeSearchText={(text) => onChangeSearchValue(text)}
                  setValue={(value) => setValueSearch(value)}
                  loading={loading}
                  itemKey={dishArray}
                  itemSeparator={true}
                  itemSeparatorStyle={styles.separator}
                  dropDownDirection={"BOTTOM"}
                  placeholder={"Search dish by ingredient"}
                  open={openOptionsSearch}
                  onOpen={onOpenOptionsSearch}
                  setOpen={setOpenOptionsSearch}
                />
                <DropDownPicker
                  items={dishArray}
                  zIndex={1000}
                  zIndexInverse={2000}
                  value={value}
                  itemSeparator={true}
                  itemSeparatorStyle={styles.separator}
                  setValue={setValue}
                  itemKey={dishArray}
                  dropDownDirection={"BOTTOM"}
                  placeholder={"Choose dish"}
                  open={openOptions}
                  onOpen={onOpenOptions}
                  setOpen={setOpenOptions}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={submitModal}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
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
    minHeight: "75%",
    minWidth: "90%",
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
    marginTop: 20,
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
  dishContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: 35,
  },
  dishDropdown: {
    maxHeight: 150,
    width: 360,
    flex: 1,
    borderColor: "transparent",
    borderRadius: 30,
    marginBottom: 65,
  },
  separator: {
    backgroundColor: "#ddd",
    width: "95%",
    marginLeft: 6,
  },
});
