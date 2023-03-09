import React, { useState } from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    background-color: #fbfaf8;
    border: 2px solid #ccc;
    align-self: start;
    &:focus {
    box-shadow: 0 0 2px 2px #4799eb;
    outline: 0;
  }
@media only screen and (min-width: 730.5px) 
{
    display: block;
    height: 2rem;
    border-radius: 0.5rem;
}
@media only screen and (max-width: 730.49px) 
{
    display: block;
    height: 2rem;
    border-radius: 0.5rem;
}
@media only screen and (max-width: 630px) 
{
    font-size: 14px;
}
`

function Input(props) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    if (value.length <= 55) {
      setValue(value);
    }
    if (value.length >35)
    {
        console.log((56-(value.length)));
    }
  };

  return (
      <InputField
        {...props}
        value={value}
        onChange={handleChange}
      />
  );
}

export default Input;