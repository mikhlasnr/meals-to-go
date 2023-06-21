import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();
const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    // ...TransitionPresets.ModalPresentationIOS,
  };
};
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
