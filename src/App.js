import "./App.css";
import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrder";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
