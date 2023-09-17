import { Modal, Box } from "@mui/material";

import sprite from "../../images/sprite.svg";
import {
  ButtonClose,
  SubTitle,
  AccessoriesText,
  CarDescription,
  CarTitle,
  Line,
  ImgWrap,
  TagsText,
  TagsWrap,
  ConditionsList,
  ConditionItem,
  ConditionText,
  PhoneNumberLink,
} from "./ModalWindow.styled";
const MyModal = ({ open, onClose, car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;
  const country = address.split(",")[2];
  const city = address.split(",")[1];

  const fixedArray = [
    ...rentalConditions.split("\n"),
    `Mileage: ${mileage.toLocaleString("en-US")}`,
    `Price: ${rentalPrice}`,
  ];

  const conditionsObject = {};
  for (const condition of fixedArray) {
    const parts = condition.split(": ");
    const name = parts[0];
    const value = parts[1] || name;
    conditionsObject[name] = value;
  }
  const conditionsEntries = Object.entries(conditionsObject);

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(18, 20, 23, 0.50)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: "40px",
          width: "540px",

          maxHeight: "90vh",
          overflowY: "scroll",
        }}
      >
        <ButtonClose type="button" onClick={onClose}>
          <svg width="24px" height="24px" stroke="#121417">
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </ButtonClose>
        <Box>
          <ImgWrap>
            <img src={img} alt={make} />
          </ImgWrap>

          <CarTitle>
            {make} <span>{model}</span>, {year}
          </CarTitle>

          <TagsWrap>
            <TagsText>
              {city}
              <Line />
              {country}
              <Line />
              Id: {id}
              <Line />
              Year: {year}
              <Line />
              Type: {type}
              <br />
              Fuel Consumption: {fuelConsumption}
              <Line />
              Engine Size: {engineSize}
            </TagsText>
          </TagsWrap>

          <CarDescription>{description}</CarDescription>

          <SubTitle sx={{ mb: 1 }}>Accessories and functionalities:</SubTitle>

          <AccessoriesText>
            {accessories[0]}
            <Line />
            {accessories[1]}
            <Line />
            {accessories[2]}
            <Line />
            {functionalities[0]}
            <Line />
            {functionalities[1]}
            <Line />
            {functionalities[2]}
          </AccessoriesText>

          <SubTitle>Rental Conditions:</SubTitle>

          <ConditionsList>
            {conditionsEntries.map((el, index) => (
              <ConditionItem key={index}>
                {el[0] === el[1] ? (
                  <ConditionText>{el[0]}</ConditionText>
                ) : (
                  <ConditionText>
                    {el[0]}: <span>{el[1]}</span>
                  </ConditionText>
                )}
              </ConditionItem>
            ))}
          </ConditionsList>

          <PhoneNumberLink href="tel:+380730000000">Rental car</PhoneNumberLink>
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;
