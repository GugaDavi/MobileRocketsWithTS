import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./components/Header";
import Home from "./screens/Home";
import Cart from "./screens/Cart";

const { Navigator: Stack, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    // eslint-disable-next-line react/display-name
    <Stack screenOptions={{ header: () => <Header /> }}>
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
    </Stack>
  );
};

export default Routes;
