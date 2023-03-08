import styled from "styled-components";

export const DetailsDiv = styled.div`

    font-family: Tajawal,sans-serif;
    box-sizing: border-box;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    position: relative;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    
@media only screen and (min-width: 730.5px) 
{
    height: 100%;
    width: 80%;
    margin-top: 8rem;
    margin-right: auto;
    margin-left: auto;
    background-color: #fbfaf8;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
}

@media only screen and (max-width: 730.49px) 
{
    height: 100%;
    width: 100%;
    margin-top: 8rem;
    margin-right: auto;
    margin-left: auto;
    background-color: #fbfaf8;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
}
`
export const Heading = styled.div`
    font-family: Tajawal,sans-serif;
    position: absolute;
    display: flex;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -100%);
    border-color: red;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
    background-color: white;
    box-shadow: #ccc;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2); /* Set the box-shadow */


`
export const Label = styled.p`

font-family: Tajawal, sans-serif;
align-self: end;
margin: 0;
font-weight: 900;
`

export const InputDiv = styled.div`
    font-family: Tajawal,sans-serif;
    display: grid;
    direction: rtl;
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 90%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    margin-top: 1rem;
    background-color: white;

@media only screen and (max-width: 730.49px) 
{
    width: 90%;
}
@media only screen and (max-width: 630px) 
{
    width: 100%;
}
`

export const Input = styled.input`
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
`
export const LogoDiv = styled.div`

padding: 1rem;
border: dashed;
border-color: grey;
display: inline;
`
export const CompanyLogo = styled.div`

    width: 50%;
    height: 50%;
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: 0.5rem;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    cursor: pointer;
    /* background-position: center center; */
    border-radius: 50%;
`

// export const TextArea = styled.textarea`

//     font-family: Tajawal, sans-serif;
//     background-color: #fbfaf8;
//     height: 100px;
//     padding: 10px;
//     border: 2px solid #ccc;
//     border-radius: 8px;
//     font-size: 16px;
//     align-self: end;
//     resize: none;
//     &:focus
//     {
//         outline-color: grey;
//     }
// `