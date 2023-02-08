import React, { useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import TrainingScreen from "../screens/TrainingScreen";
import ChatbotScreen from "../screens/ChatbotScreen";
import DietScreen from "../screens/DietScreen";
import CalendarScreen from "../screens/CalendarScreen";

export const NavBottomBar = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "Main":
        icon = "home-outline";
        break;
      case "Training":
        icon = "dumbbell";
        break;
      case "Diet":
        icon = "food-apple-outline";
        break;
      case "Chatbot":
        icon = "robot-excited-outline";
        break;
    }

    return (
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "#9432ff" : "#6432ff"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <CurvedBottomBar.Navigator
          type='UP'
          style={styles.bottomBar}
          strokeWidth={0.5}
          strokeColor='#DDDDDD'
          height={55}
          circleWidth={55}
          bgColor='white'
          initialRouteName='Main'
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircleUp}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <MaterialCommunityIcons name={"plus"} color='#fff' size={25} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}
        >
          <CurvedBottomBar.Screen
            name='Main'
            options={{
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <MaterialCommunityIcons
                    name={"account-circle-outline"}
                    size={30}
                    style={{ marginRight: 15, color: "#6432ff" }}
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
            }}
            component={MainScreen}
            position='LEFT'
          />
          <CurvedBottomBar.Screen
            name='Training'
            options={{
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <MaterialCommunityIcons
                    name={"account-circle-outline"}
                    size={30}
                    style={{ marginRight: 15, color: "#6432ff" }}
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
            }}
            component={TrainingScreen}
            position='LEFT'
          />
          <CurvedBottomBar.Screen
            name='Diet'
            options={{
              headerTitle: () => <CalendarScreen/>,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <MaterialCommunityIcons
                    name={"account-circle-outline"}
                    size={30}
                    style={{ marginRight: 15, color: "#6432ff" }}
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
            }}
            position='RIGHT'
            component={() => (
              <DietScreen
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            )}
          />
          <CurvedBottomBar.Screen
            name='Chatbot'
            options={{
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <MaterialCommunityIcons
                    name={"account-circle-outline"}
                    size={30}
                    style={{ marginRight: 15, color: "#6432ff" }}
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
            }}
            component={ChatbotScreen}
            position='RIGHT'
          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6432ff",
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
