import styled, { css } from "styled-components";
import TextareaAutosize from 'react-textarea-autosize'

export const CustomTextArea = styled(TextareaAutosize)`
  font-size: 14px;
  border: 2px solid #ccc;
  line-height: 1.3;
  letter-spacing: 0.1px;
  color: black;
  /* background-color: #F7F7F7; */
  padding: 4px 16px 4px 42px;
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
    color: #D9D9D9;
  }
  ${({ $minHeight }) => $minHeight && css`
    min-height: ${$minHeight}px;
  `}
  ${({ $isInValidate }) => $isInValidate && css`
    border-color: ${props => props.theme.colors.red};
  `}
`