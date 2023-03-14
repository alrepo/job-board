import styled from "styled-components";

// export const DetailsDiv = styled.div`

//     font-family: Tajawal,sans-serif;
//     box-sizing: border-box;
//     padding-left: 0.5rem;
//     padding-right: 0.5rem;
//     position: relative;
//     box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2); /* Set the box-shadow */

// @media only screen and (min-width: 730.5px) 
// {
//     height: 100%;
//     width: 80%;
//     margin-bottom: 2rem;
//     margin-right: auto;
//     margin-left: auto;
//     background-color: #fbfaf8;
//     padding-top: 1rem;
//     padding-bottom: 1rem;
//     border-radius: 1rem;
// }

// @media only screen and (max-width: 730.49px) 
// {
//     height: 100%;
//     width: 100%;
//     margin-bottom: 2rem;
//     margin-right: auto;
//     margin-left: auto;
//     background-color: #fbfaf8;
//     padding-top: 1rem;
//     padding-bottom: 1rem;
//     border-radius: 1rem;
// }
// `
export const Heading = styled.div`
    font-family: Tajawal,sans-serif;
    position: absolute;
    display: flex;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
    border-color: red;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
    background-color: white;
    box-shadow: #ccc;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    @media only screen and (max-width: 630px) 
    {
        font-size: 14px;
    }
`
export const Label = styled.p`

font-family: Tajawal, sans-serif;
align-self: end;
margin: 0;
font-weight: 900;
@media only screen and (max-width: 630px) 
{
    font-size: 14px;
}
`
export const InputDiv = styled.div`
    font-family: Tajawal,sans-serif;
    display: grid;
    position: relative;
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
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2); /* Set the box-shadow */

@media only screen and (max-width: 730.49px) 
{
    width: 90%;
}
@media only screen and (max-width: 630px) 
{
    font-size: 14px;
    width: 100%;
}
`
export const Preview = styled.div`
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
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    position: relative; /* make sure the pseudo-element is positioned relative to the parent */

    ::before 
    {
        content: "للمعاينة"; /* the text to be displayed */
        opacity: 0.2;
        position: absolute; /* position the pseudo-element absolutely */
        top: 50%; /* position the pseudo-element in the vertical center */
        left: 50%; /* position the pseudo-element in the horizontal center */
        transform: translate(-50%, -50%) rotate(-45deg); /* rotate the pseudo-element diagonally */
        color: red; /* set the text color and opacity */
        font-size: 20vw;; /* set the font size */
        font-weight: bold; /* set the font weight */
        z-index: 1; /* make sure the pseudo-element is positioned on top of other elements */
    }
/* START preview text adjusting @media queries */
@media only screen and (max-width: 1100px) 
{
    ::before
    {
        font-size: 25vw;; /* set the font size */
    }
}
@media only screen and (max-width: 870px) 
{
    ::before
    {
        font-size: 30vw;; /* set the font size */
    }
}
@media only screen and (max-width: 740px) 
{
    ::before
    {
        font-size: 35vw;; /* set the font size */
    }
}
@media only screen and (max-width: 640px) 
{
    ::before
    {
        font-size: 36vw;; /* set the font size */
    }
}
@media only screen and (max-width: 610px) 
{
    ::before
    {
        font-size: 37vw;; /* set the font size */
    }
}
@media only screen and (max-width: 530px) 
{
    ::before
    {
        font-size: 39vw;; /* set the font size */
    }
}
/* END preview text adjusting @media queries */

@media only screen and (max-width: 730.49px) 
{
    width: 90%;
}
@media only screen and (max-width: 630px) 
{
    font-size: 14px;
    width: 100%;
}
`
export const LogoDiv = styled.div`

padding: 0.5rem;
margin-top: 1rem;
margin-bottom: 1rem;
border: dashed;
border-color: grey;
display: inline;
text-align: center;
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
export const SalaryDiv = styled.div`

display: flex;
box-sizing: border-box;
justify-content: start;
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