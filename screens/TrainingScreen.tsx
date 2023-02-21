import {} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrainingMainScreen from "./TrainingMainScreen";
import TrainingDetailsScreen from "./TrainingDetailsScreen";

const Stack = createNativeStackNavigator();

const TrainingScreen = ({ modalVisible, setModalVisible }: any) => {
  return (
    <Stack.Navigator initialRouteName='DishMain'>
      <Stack.Screen
        name='TrainingMain'
        options={{
          headerShown: false,
        }}
        component={TrainingMainScreen}
        initialParams={{
          modalVisible: modalVisible,
          setModalVisible: setModalVisible,
        }}
      />
      <Stack.Screen
        name='TrainingDetails'
        options={{
          headerShown: false,
        }}
        component={TrainingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default TrainingScreen;
