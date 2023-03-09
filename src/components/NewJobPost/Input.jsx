import React, { useState } from 'react';
import styled from 'styled-components';

function Input(props) {
  const [value, setValue] = useState('');

  const remainingChars = 50 - value.length;

  const handleChange = event => {
    const { value } = event.target;
    if (value.length <= 50) {
      setValue(value);
    }
  };

  return (
    <Wrapper>
      <InputField
        {...props}
        value={value}
        onChange={handleChange}
      />
      <RemainingChars>{remainingChars}</RemainingChars>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;

`;

const InputField = styled.input`
  font-family: Tajawal, sans-serif;
  background-color: #fbfaf8;
  border: 2px solid #ccc;
  padding-left: 10px; /* Add some padding to make room for the remaining characters count */
  align-self: start;

  &:focus {
    box-shadow: 0 0 2px 2px #4799eb;
    outline: 0;
  }
  @media only screen and (min-width: 730.5px) {
    display: block;
    height: 2rem;
    border-radius: 0.5rem;
  }
  @media only screen and (max-width: 730.49px) {
    display: block;
    height: 2rem;
    border-radius: 0.5rem;
  }
  @media only screen and (max-width: 630px) {
    font-size: 14px;
  }
`;

const RemainingChars = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 12px;
  color: #aaa;
`;

export default Input;
