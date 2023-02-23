import React, { useCallback, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const StartUserInfoScreen = ({ navigation }) => {
  const [sexValue, setSexValue] = useState(null);
  const [ageValue, setAgeValue] = useState(null);
  const [heightValue, setHeightValue] = useState(null);
  const [weightValue, setWeightValue] = useState(null);

  const [indicatorVisible, setIsIndicatorVisible] = useState(false);

  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  // boolean condition, when dropdown from diet page is open/close
  const [openSex, setOpenSex] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openHeight, setOpenHeight] = useState(false);
  const [openWeight, setOpenWeight] = useState(false);

  const onOpenSex = useCallback(() => {
    setOpenAge(false);
    setOpenHeight(false);
    setOpenWeight(false);
  }, []);

  const onOpenAge = useCallback(() => {
    setOpenSex(false);
    setOpenHeight(false);
    setOpenWeight(false);
  }, []);

  const onOpenHeight = useCallback(() => {
    setOpenSex(false);
    setOpenAge(false);
    setOpenWeight(false);
  }, []);

  const onOpenWeight = useCallback(() => {
    setOpenAge(false);
    setOpenHeight(false);
    setOpenSex(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {indicatorVisible ? (
        <ActivityIndicator
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -10 }, { translateY: -18 }],
          }}
          size='large'
          color='#6432ff'
        />
      ) : (
        <>
          <View
            style={{
              flex: 1,
              flexGrow: 1,
              marginTop: 70,
            }}
          >
            <Text
              style={{ fontSize: 25, textAlign: "center", marginBottom: 10 }}
            >
              Additional Information
            </Text>
            <Text
              style={{ textAlign: "center", width: "90%", alignSelf: "center" }}
            >
              By entering additional data, Fit Health App can provide you
              better, personalized solutions.
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              flexGrow: 3,
              flexWrap: "wrap",
            }}
          >
            <DropDownPicker
              style={{ width: "90%", alignSelf: "center", marginBottom: 25 }}
              open={openSex}
              onOpen={onOpenSex}
              setOpen={setOpenSex}
              zIndex={4000}
              zIndexInverse={1000}
              dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
              dropDownDirection={"BOTTOM"}
              placeholder='Sex'
              value={sexValue}
              items={items}
              setValue={setSexValue}
              setItems={setItems}
            />
            <DropDownPicker
              style={{ width: "90%", alignSelf: "center", marginBottom: 25 }}
              open={openAge}
              onOpen={onOpenAge}
              setOpen={setOpenAge}
              zIndex={3000}
              zIndexInverse={2000}
              dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
              dropDownDirection={"BOTTOM"}
              placeholder='Birthday'
              value={ageValue}
              items={items}
              setValue={setAgeValue}
              setItems={setItems}
            />
            <DropDownPicker
              style={{ width: "90%", alignSelf: "center", marginBottom: 25 }}
              open={openWeight}
              onOpen={onOpenWeight}
              setOpen={setOpenWeight}
              zIndex={2000}
              zIndexInverse={3000}
              dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
              dropDownDirection={"BOTTOM"}
              placeholder='Weight'
              value={weightValue}
              items={items}
              setValue={setWeightValue}
              setItems={setItems}
            />
            <DropDownPicker
              style={{ width: "90%", alignSelf: "center", marginBottom: 25 }}
              open={openHeight}
              onOpen={onOpenHeight}
              setOpen={setOpenHeight}
              zIndex={1000}
              zIndexInverse={4000}
              dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
              dropDownDirection={"BOTTOM"}
              placeholder='Height'
              value={heightValue}
              items={items}
              setValue={setHeightValue}
              setItems={setItems}
            />
          </View>
          <Button
            onPress={() => {
              setIsIndicatorVisible(true);
              setTimeout(() => {
                setIsIndicatorVisible(false);
                navigation.navigate("Login");
              }, 2000);
            }}
            title='Submit info'
            color='#6432ff'
          />
        </>
      )}
    </View>
  );
};

export default StartUserInfoScreen;
