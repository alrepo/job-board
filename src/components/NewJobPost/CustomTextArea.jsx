import styled, { css } from "styled-components";
import TextareaAutosize from 'react-textarea-autosize'
import React, { useState } from "react";
import PropTypes from "prop-types";

const StyledTextArea = styled(TextareaAutosize)`
  font-size: 14px;
  border: 2px solid #ccc;
  line-height: 1.3;
  letter-spacing: 0.1px;
  color: black;
  /* background-color: #F7F7F7; */
  padding: 4px 4px 4px 4px;
  border-radius: 4px;
  text-align: right;
  resize: vertical;
  min-height: 3rem;
  color: #000;
  direction: rtl;
  resize: none;
  background: #faf8f8;
  &:focus {
    box-shadow: 0 0 2px 2px #4799eb;
    outline: 0;
  }
  ::placeholder {
    color: #BEBEBE;
  }
  ${({ $minHeight }) => $minHeight && css`
    min-height: ${$minHeight}px;
  `}
  ${({ $isInValidate }) => $isInValidate && css`
    border-color: ${props => props.theme.colors.red};
  `}
`

const CharCount = styled.div`
  bottom: 5px;
  right: 5px;
  font-size: 12px;
  color: #777;
`;

function CustomTextArea(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 500) {
      setValue(inputValue);
      if (props.onChange) {
        props.onChange(inputValue);
      }
    }
  };

  return (
    <div style={{position: "relative", display: "grid"}}>
      <StyledTextArea
        {...props}
        value={value}
        onChange={handleChange}
      />
      <CharCount>{value.length}/500</CharCount>
    </div>
  );
}

CustomTextArea.propTypes = {
  onChange: PropTypes.func,
};

export default CustomTextArea;
