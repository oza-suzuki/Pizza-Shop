import React from "react";
import styled from "styled-components";
import {
  DiaglogContent,
  DialogFooter,
  ConfirmedButton,
} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  //   border: 2px solid;
  z-index: 3;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DiaglogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
`;

export const Order = ({ orders }) => {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your orders are looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>{order.name}</OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmedButton>Checkout</ConfirmedButton>
      </DialogFooter>
    </OrderStyled>
  );
};
