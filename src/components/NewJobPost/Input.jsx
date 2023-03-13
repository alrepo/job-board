import React, { useState } from 'react';
import styled from 'styled-components';

let MAX_LENGTH = 0;
let jobTitleValue = "";

function Input({ name, value, setValue, ...props }) {
  const remainingChars = MAX_LENGTH - value.length;
  const handleChange = event => {
    const value = event.target.value;
    if (value.length <= MAX_LENGTH) {
      setValue(value);
      props.onChange(value);
    }
  };

  return (
    <Wrapper>
      <InputField
        {...props}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <RemainingChars>{remainingChars}</RemainingChars>
    </Wrapper>
  );
}

function ParentComponent(props) {
  const [value, setValue] = useState('');

  if (props.name === "companyName")
  {
    MAX_LENGTH = 50;
  }
  else if (props.name === "jobTitle")
  {
    MAX_LENGTH = 30;
    // jobTitleValue = value;
  }
  function updateValue(inputValue)
  {
    setValue(inputValue);
    props.onChange(inputValue);
  }
  return (
    <>
      <Input name={props.name} value={value} setValue={setValue} onChange={updateValue}/>
      <AnotherComponent remainingChars={MAX_LENGTH - value.length} />
    </>
  );
}

function AnotherComponent({ remainingChars }) {
  // use the latest value of remainingChars as needed
  return (
    <CounterDiv>{(MAX_LENGTH-remainingChars)}{"/"+MAX_LENGTH}</CounterDiv>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
`;

const InputField = styled.input.attrs(props => ({
  type: props.name === 'companyEmail' ? 'email' :
        props.name === 'companyURL' ? 'url' : 'text',
  placeholder: props.name === 'companyEmail' ? 'مثلا: example@example.com' :
        props.name === 'companyURL' ? 'مثلا: https://www.example.com' : '',
      }))`
  ::placeholder
  {
    color: #BEBEBE;
  }
  font-family: Tajawal, sans-serif;
  background-color: #fbfaf8;
  border: 2px solid #ccc;
  padding-left: 15px; /* Add some padding to make room for the remaining characters count */
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
const CounterDiv = styled.div`
font-size: 12px;
`
const RemainingChars = styled.div`
@media screen and (min-width: 50px)
{
    display: none;
}
/* @media screen and (max-width: 549.99px)
{
    display: none;
} */
`;

export default ParentComponent;
export { jobTitleValue };
