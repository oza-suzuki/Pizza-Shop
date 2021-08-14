import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";

const Dialog = styled.div`
  background-color: white;
  height: 2000px;
  width: 500px;
  z-index: 2;
  top: 75px;
  position: fixed;
  left: calc(50% - 250px);
  max-height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
  top: 0px;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

const DiaglogContent = styled.div`
  overflow: auto;
  min-height: 100px;
`;

const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
`;

export const FoodDialog = ({ openFood, setOpenFood }) => {
  function close() {
    setOpenFood("");
  }
  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DiaglogContent>

        </DiaglogContent>
        <DialogFooter>hghfghgfh</DialogFooter>
      </Dialog>
    </>
  ) : null;
};
