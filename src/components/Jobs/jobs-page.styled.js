import styled from "styled-components";


export const CardsContainer = styled.div`

    padding-top: 2rem;
    height: 100%;
    width: 100%;
`
export const PostButtonContainer = styled.div`
  
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
export const PostButton = styled.div`
  font-family: Tajawal,sans-serif;
  @media only screen and (min-width: 730.5px) {
      position: relative;
      margin-top: 1rem;
      margin-right: 1rem;
      margin-left: auto;
      display: inline-block;
      padding: 12px 24px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      background-color: red;
      border-radius: 10px;
      border: solid 1px;
      border-color: red;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover
      {
        background-color: white;
        color: red;
        border: solid 1px;
        border-color: red;
      }
  }
  @media only screen and (max-width: 730.49px) {
      margin-left: auto;
      display: inline-block;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      background-color: red;
      border-radius: 10px;
      border: solid 1px;
      border-color: red;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover
      {
        background-color: white;
        color: red;
        border: solid 1px;
        border-color: red;
      }
  }
  @media only screen and (max-width: 630px) {
      position: relative;
      margin-top: 1rem;
      margin-right: 1rem;
      margin-left: auto;
      display: inline-block;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      background-color: red;
      border-radius: 10px;
      border: solid 1px;
      border-color: red;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover
      {
        background-color: white;
        color: red;
        border: solid 1px;
        border-color: red;
      }
  }
`