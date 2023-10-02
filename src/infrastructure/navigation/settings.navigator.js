import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    headerMode: "screen",
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: { height: 90 },
    tabBarItemStyle: {
      marginVertical: 12,
    },
  };
};

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={createScreenOptions}>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
