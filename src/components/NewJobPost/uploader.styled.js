import styled, { css } from "styled-components";

export const AvatarWrapper = styled.div`
  .title {
    margin-bottom: 44px;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }
  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
  }
  label {
    font-size: 14px;
    color: rgba(31, 147, 255, 0.87);
    cursor: pointer;
    :hover {
      font-weight: 600;
    }
  }
  #user-avatar {
    display: none;
  }
`
export const Box = styled.div`
   ${({ m }) => m && css`
    margin: ${m}px;
  `}
  ${({ mt }) => mt && css`
    margin-top: ${mt}px;
  `}
  ${({ mr }) => mr && css`
    margin-right: ${mr}px;
  `}
  ${({ mb }) => mb && css`
    margin-bottom: ${mb}px;
  `}
  ${({ ml }) => ml && css`
    margin-left: ${ml}px;
  `}
  ${({ mx }) => mx && css`
    margin: 0 ${mx}px;
  `}
  ${({ my }) => my && css`
    margin: ${my}px 0;
  `}
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ p }) => p && css`
    padding: ${p}px;
  `}
  ${({ pt }) => pt && css`
    padding-top: ${pt}px;
  `}
  ${({ pr }) => pr && css`
    padding-right: ${pr}px;
  `}
  ${({ pb }) => pb && css`
    padding-bottom: ${pb}px;
  `}
  ${({ pl }) => pl && css`
    padding-left: ${pl}px;
  `}
  ${({ px }) => px && css`
    padding: 0 ${px}px;
  `}
  ${({ py }) => py && css`
    padding: ${py}px 0;
  `}
  ${({ padding }) => padding && css`
    padding: ${padding};
  `}
  ${({ width }) => width && css`
    width: ${width}px;
  `}
  ${({ textA }) => textA && css`
    text-align: ${textA};
  `}
  
  
`
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ x }) => x && css`
    justify-content: ${x};
  `}
  ${({ y }) => y && css`
    align-items: ${y};
  `}
  ${({ xGap }) => xGap && css`
    column-gap: ${xGap}px;
  `}
`