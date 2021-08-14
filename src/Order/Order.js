import React from "react";
import styled from "styled-components";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  background-color: white;
  //   border: 2px solid;
  z-index: 3;
  box-shadow: 4px 0px 5px 4px grey;
`;

export const Order = () => {
  return <OrderStyled>dsad</OrderStyled>;
};
