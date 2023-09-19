import MyModal from "../ModalWindow/ModalWindow";
import { LikeButton } from "../LikeButton/LikeButton";
import { useState } from "react";
import {
  CarItems,
  ImgContainer,
  DescriptionContainer,
  Span,
  Img,
  CarInformation,
  CarinfoItems,
  StyledButton,
} from "./CarCard.styled";
const CarCard = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addressWords = car.address.split(" ");
  const corectAddres = addressWords.slice(-2).join(" ");
  return (
    <>
      <CarItems>
        <ImgContainer>
          <LikeButton id={car.mockapiId} car={car} />
          <Img src={car.img} alt="car" />
        </ImgContainer>
        <DescriptionContainer>
          <div>
            {car.make} <Span>{car.model}</Span>, {car.year}
          </div>
          {car.rentalPrice}
        </DescriptionContainer>
        <CarInformation>
          <CarinfoItems>{corectAddres}</CarinfoItems>
          <CarinfoItems>{car.rentalCompany}</CarinfoItems>
          <CarinfoItems>{car.type}</CarinfoItems>
          <CarinfoItems> {car.make}</CarinfoItems>
          <CarinfoItems> {car.id}</CarinfoItems>
          <CarinfoItems>{car.functionalities?.[0]}</CarinfoItems>
        </CarInformation>
        <StyledButton type={"button"} onClick={() => setIsModalOpen(true)}>
          Learn more
        </StyledButton>
      </CarItems>

      <MyModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        car={car}
      />
    </>
  );
};
export default CarCard;
