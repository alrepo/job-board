import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { CustomTextArea } from "./CustomTextArea.js"
// import $ from 'jquery';
import 'emojionearea/dist/emojionearea.js';
import 'emojionearea/dist/emojionearea.css'

export const ReplyTextEditor = (props) => {
  const {
    children,
    text,
    setText,
  } = props

  return (
    <Wrapper>
      <TextAreaWrapper>
        <CustomTextArea
          placeholder="أكتب ردك"
        />
      </TextAreaWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  @media (min-width: 910px) {
    flex-direction: row;
    column-gap: 12px;
    align-items: flex-start;
  }
`
export const TextAreaWrapper = styled.div`
  flex: 1;
  position: relative;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 16px;
`
export const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 6px;
  z-index: 1;
  cursor: pointer;
  .emoji-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #efefef;
    border-radius: 4px;
    img {
      width: 24px;
      height: 24px;
    }
    :hover {
      border-radius: 50%;
    }
  }
`