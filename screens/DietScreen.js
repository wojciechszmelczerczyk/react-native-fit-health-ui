import {} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishDetailsScreen from "./DishDetailsScreen";
import DishMainScreen from "./DishMainScreen";

const Stack = createNativeStackNavigator();

const DietScreen = ({ modalVisible, setModalVisible }) => {
  return (
    // <NavigationContainer initialState='DishMain' independent={true}>
    <Stack.Navigator initialRouteName='DishMain'>
      <Stack.Screen
        name='DishMain'
        options={{
          headerShown: false,
        }}
        component={DishMainScreen}
        initialParams={{
          modalVisible: modalVisible,
          setModalVisible: setModalVisible,
        }}
      />
      <Stack.Screen
        name='DishDetails'
        options={{
          headerShown: false,
        }}
        component={DishDetailsScreen}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default DietScreen;
