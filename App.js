import * as React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import { maybeCompleteAuthSession } from "expo-web-browser";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import CalendarScreen from "./screens/CalendarScreen";
import { DayNameContext } from "./context/DayNameContext";
import { DayNumberContext } from "./context/DayNumberContext";

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();
maybeCompleteAuthSession();

export default function App() {
  const [dayName, setDayName] = React.useState(false);
  const [dayNumber, setDayNumber] = React.useState(false);

  return (
    <DayNameContext.Provider value={[dayName, setDayName]}>
      <DayNumberContext.Provider value={[dayNumber, setDayNumber]}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
              name='Login'
              options={{
                headerShown: false,
              }}
              component={LoginScreen}
            />
            <Stack.Screen
              name='Register'
              options={{
                headerShown: false,
              }}
              component={RegisterScreen}
            />
            <Stack.Screen
              name='Home'
              options={{
                headerShown: false,
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name='Profile'
              options={{
                headerShown: false,
              }}
              component={UserScreen}
            />
            <Stack.Screen
              name='ForgotPassword'
              options={{
                headerShown: false,
              }}
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name='Calendar'
              options={{
                headerShown: false,
              }}
              component={CalendarScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DayNumberContext.Provider>
    </DayNameContext.Provider>
  );
}
