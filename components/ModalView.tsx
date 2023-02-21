import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import React from "react";

export default function ModalView({
  modalVisible,
  setModalVisible,
  loading,
  dishes,
  value,
  setValue,
  submitModal,
  onChangeSearchValue,
  valueSearch,
  setValueSearch,
  dishArray,
  openOptionsSearch,
  onOpenOptionsSearch,
  setOpenOptionsSearch,
  openOptions,
  onOpenOptions,
  setOpenOptions,
}: any) {
  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
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
  );
}

const styles = StyleSheet.create({
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

  separator: {
    backgroundColor: "#ddd",
    width: "95%",
    marginLeft: 6,
  },
});
