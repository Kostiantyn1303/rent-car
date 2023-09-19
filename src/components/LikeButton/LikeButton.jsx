import { useState } from "react";
import {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from "../../Api";
import sprite from "../../images/sprite.svg";
import { Button, ButtonIcon } from "./LikeButton.styled";

export const LikeButton = ({ car, id }) => {
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const [isLiked, setIsLiked] = useState(false);

  const handleButtonLikeClick = async () => {
    try {
      if (isLiked) {
        await removeFromFavorites(id);
        setIsLiked(false);
      } else {
        const response = await addToFavorites(car);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Помилка при роботі з обраними об'єктами:", error);
    }
  };

  return (
    <Button
      onClick={handleButtonLikeClick}
      aria-label="like"
      sx={{ opacity: isLiked ? 1 : 0.8 }}
    >
      <ButtonIcon isLiked={isLiked}>
        <use href={sprite + "#icon-like"}></use>
      </ButtonIcon>
    </Button>
  );
};
