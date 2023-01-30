import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Dimensions,
  Modal,
  AsyncStorage
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { BlurView } from "expo-blur";
import dishArray from "../data/dishData";
import DropDownPicker from "react-native-dropdown-picker";
import { getDish } from "../services/DietService";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import _ from "lodash";

// get screen width
const screenWidth = Dimensions.get("window").width;

// get screen height of dishes area of screen (3 dropdowns)
const dishAreaHeight = Dimensions.get("window").height - 235;
const z = 5;
// config object of nutrition chart
const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(100, 50, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const DietScreen = ({ modalVisible, setModalVisible }) => {
  useEffect(() => {
    AsyncStorage.getItem("currentDish").then((res) => setChosenDishes(JSON.parse(res)));
  });

  // boolean condition, when dropdown from diet page is open/close
  const [openBreakfast, setOpenBreakfast] = useState(false);
  const [openLunch, setOpenLunch] = useState(false);
  const [openDinner, setOpenDinner] = useState(false);

  // boolean condition, when dropdowns from modal are open/close
  const [openOptions, setOpenOptions] = useState(false);
  const [openOptionsSearch, setOpenOptionsSearch] = useState(false);

  const [value, setValue] = useState(null);
  const [valueSearch, setValueSearch] = useState(null);

  // fetched filtered dishes
  const [dishes, setDishes] = useState([]);

  // dish submitted from modal
  const [chosenDishes, setChosenDishes] = useState([]);

  // protein, carbs and fat information of submitted dish
  const [nutrition, setNutrition] = useState({
    protein: 0.6,
    carbs: 0.7,
    fat: 0.9,
  });

  // loading spinner condition
  const [loading, setLoading] = useState(false);

  // when one of dropdown from modal is opened, second is being closen
  const onOpenOptions = useCallback(() => setOpenOptionsSearch(false), []);
  const onOpenOptionsSearch = useCallback(() => setOpenOptions(false), []);

  // when on of dropdown from diet page is opened, remaining are being closen
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

  // when text from search located in modal change, fetch dish base on input text
  const onChangeSearchValue = async (text) => {
    // on load spinner
    setLoading(true);

    // get data from food nutrition api
    const { data } = await getDish(text);

    // get dishes labels only
    const dishLabels = data.hits.map((dish) => dish.recipe.label);

    // format dish labels array to {label, value} format
    const formattedDishLabels = dishLabels.map((label) => {
      return { label, value: label.toLowerCase() };
    });

    // set component state
    setDishes(formattedDishLabels);

    // off load spinner
    setLoading(false);
  };

  // submit modal
  const submitModal = async () => {
    // get dish by search input
    const chosenDish = await getDish(valueSearch);

    // push to state with dish from submitted modal in {label, value} format
    chosenDishes.push({
      label: chosenDish.data.hits[0].recipe.label,
      value: chosenDish.data.hits[0].recipe.label.toLowerCase(),
    });

    // set state with chosen dishes
    // setChosenDishes(chosenDishes);
    await AsyncStorage.setItem("currentDish", JSON.stringify(chosenDishes));

    // off modal
    setModalVisible(!modalVisible);
  };

  // chart data
  const data = {
    labels: ["Protein", "Carbs", "Fat"],
    data: [nutrition.protein, nutrition.carbs, nutrition.fat],
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
                disabled={chosenDishes.length ? false : true}
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
                  chosenDishes.length ? (
                    <MaterialIcons name={"keyboard-arrow-right"} size={20} />
                  ) : (
                    ""
                  )
                }
                ArrowUpIconComponent={() =>
                  chosenDishes.length ? (
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
                  <Text style={styles.textStyle}>Submit dish</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
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
