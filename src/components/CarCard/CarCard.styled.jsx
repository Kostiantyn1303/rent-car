import styled from "@emotion/styled";
import { Button } from "@mui/material";
export const CarList = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
`;
export const CarItems = styled.li`
  flex-basis: calc((100% - 87px) / 4);
`;
export const ImgContainer = styled.div`
  position: relative;
  border-radius: 14px;
  width: 100%;
  text-align: center;
  margin-bottom: 14px;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;

  font-size: 16px;

  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 8px;
`;
export const Span = styled.span`
  color: #3470ff;
`;
export const Img = styled.img`
  border-radius: 14px;
  height: 240px;
`;
export const CarInformation = styled.div`
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;

  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;
export const CarinfoItems = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: " ";
    display: block;
    width: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    height: 1px;
    transform: rotate(90deg);
  }
`;
export const StyledButton = styled(Button)`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  color: #fff;
  text-transform: none;
  background: #3470ff;

  width: 100%;
  display: flex;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }
`;
