import styled from "@emotion/styled";
import Select from "react-select";
export const DropDawnLabel = styled.p`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;
export const CustomSelect = styled(Select)`
  border-radius: 14px;
  background: #f7f7fb;
  padding: 10px;
  width: 224px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;

  font-weight: 500;
  line-height: 20px;

  /* Стилі для стрілки вибору */
  .Select-arrow-zone {
    right: 10px;
  }

  /* Стилі для опцій (випадаючого списку) */
  .Select-menu-outer {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
  }

  /* Стилі для вибраних опцій */
  .Select-value-label {
    color: #3470ff;
  }

  /* Стилі для опцій у випадаючому списку */
  .Select-option {
    padding: 10px;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
