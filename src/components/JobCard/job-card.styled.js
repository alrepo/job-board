import styled from "styled-components";

export const ApplyButton = styled.div`
  font-family: Tajawal,sans-serif;
  &:hover 
    {
        background-color: white;
        color: red;
        border: solid 0.5px;
        border-color: red;
    }

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    visibility: hidden;
    top: auto;
    bottom: auto;
    right: auto;
    left: 0.7rem;
    display: inline-block;
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: red;
    border-radius: 10px;
    border: solid 0.5px;
    border-color: red;
    cursor: pointer;
    transition: background-color 0.3s ease;

}
@media only screen and (max-width: 730.49px) 
{
      position: absolute;
      visibility: hidden;
      top: auto;
      bottom: auto;
      right: auto;
      left: 0.7rem;
      display: inline-block;
      padding: 8px 20px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      background-color: red;
      border-radius: 10px;
      border: solid 0.5px;
      border-color: red;
      cursor: pointer;
      transition: background-color 0.3s ease; 
}
@media only screen and (max-width: 630px) 
{
    position: absolute;
      visibility: hidden;
      top: auto;
      bottom: auto;
      right: auto;
      left: 0.7rem;
      display: inline-block;
      padding: 8px 20px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      background-color: red;
      border-radius: 10px;
      border: solid 0.5px;
      border-color: red;
      cursor: pointer;
      transition: background-color 0.3s ease;
}
`
export const JobCardDiv = styled.div`
  font-family: Tajawal,sans-serif;

    &:hover
    {
        box-shadow: none; /* Remove the box-shadow when the card is hovered */
    }
@media only screen and (min-width: 730.5px) 
{
    display: flex;
    position: relative;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 5.5rem;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    cursor: pointer;
    box-shadow: #ccc;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    transition: box-shadow 0.3s ease; /* Add a transition effect to the box-shadow */

    &:hover ${ApplyButton}
    {
        visibility: visible;
    }
}

@media only screen and (max-width: 730.49px) 
{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 6rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    transition: box-shadow 0.3s ease; /* Add a transition effect to the box-shadow */
}

@media only screen and (max-width: 630px) 
{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 6rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6rem;
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2); /* Set the box-shadow */
    transition: box-shadow 0.3s ease; /* Add a transition effect to the box-shadow */
}

`
export const LogoTableColumn = styled.div`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 730.49px) 
{
    display: flex;
    grid-column: 1 / 2;
    align-items: center;
}

@media only screen and (max-width: 630px) 
{
    display: flex;
    grid-column: 1 / 2;
    align-items: center;
}

`
export const CompanyLogo = styled.img`

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    max-width: 4.5rem;
    max-height: 4.5rem;
    left: auto;
    right: 0.7rem;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}

@media only screen and (max-width: 730.49px) 
{
    max-width: 4.5rem;
    max-height: 4.5rem;
    margin-left: auto;
    margin-right: auto;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}

@media only screen and (max-width: 630px) 
{
    max-width: 3.5rem;
    max-height: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    border: solid 0.05px;
    border-color: grey;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
}
`

export const CompanyNameAndJobTitleContainer = styled.div`
  font-family: Tajawal,sans-serif;

@media only screen and (max-width: 730.49px) 
{
    grid-column: 2 / 3;
    display: grid;
    grid-template-rows: repeat(3, 2rem);
    box-sizing: border-box;
    max-height: 100%;
    padding: 0;
    margin: 0;
}
@media only screen and (max-width: 630px) 
{
    grid-column: 2 / 5;
    display: grid;
    grid-template-rows: repeat(3, 2rem);
    box-sizing: border-box;
    max-height: 100%;
    padding: 0;
    margin: 0;
}

`

export const LocationAndSalaryContainer = styled.div`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    top: 4.5rem;
    bottom: auto;
    left: auto;
    right: 7rem;
    font-size: 0.8rem;
    font-weight:400;
}
@media only screen and (max-width: 730.49px) 
{
    grid-row: 3 / 4;
    font-size: 0.8rem;
    font-weight:400;
    align-self: center;
}
@media only screen and (max-width: 630px) 
{
    grid-row: 3 / 4;
    font-size: 0.8rem;
    font-weight:400;
    align-self: center;
}

`
export const JobTitle = styled.p`

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    top: 0.5rem;
    bottom: auto;
    left: auto;
    right: 7rem;
    font-size: 1.2rem;
    font-weight: bold;
}
@media only screen and (max-width: 730.49px) 
{
    font-size: 0.95rem;
    font-weight: bold;
    align-self: start;
}
@media only screen and (max-width: 630px) 
{
    font-size: 0.95rem;
    font-weight: bold;
    align-self: start;
}
`

export const CompanyName = styled.p`

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    top: 2.3rem;
    bottom: auto;
    left: auto;
    right: 7rem;
    font-size: 0.95rem;
    font-weight:400
}
@media only screen and (max-width: 730.49px) 
{
    font-size: 0.9rem;
    font-weight:400;
    align-self: center;
}
@media only screen and (max-width: 630px) 
{
    font-size: 0.9rem;
    font-weight:400;
    align-self: center;
}
`

export const FilterTags = styled.div`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    position: absolute;
    top: 2.5rem;
    bottom: auto;
    left: auto;
    right: 50%;
    font-size: 0.8rem;
    font-weight:400;
}
@media only screen and (max-width: 730.49px) 
{
    grid-column: 3 / 5;
    justify-self: start;
    align-self: center; 
}
@media only screen and (max-width: 630px) 
{
    grid-column: 3 / 5;
    align-self: center;
    display: none;
}
`

export const Salary = styled.p`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    direction: rtl;
    display: inline-block;
    border: solid 0.5px;
    border-color: rgb(205, 202, 202);
    border-radius: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 5px; 
}
@media only screen and (max-width: 730.49px) 
{
    direction: rtl;
    display: inline-block;
    font-size: 0.75rem;
    border: solid 0.5px;
    border-color: rgb(205, 202, 202);
    border-radius: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 5px;
}
@media only screen and (max-width: 630px) 
{
    direction: rtl;
    display: inline-block;
    font-size: 0.75rem;
    border: solid 0.5px;
    border-color: rgb(205, 202, 202);
    border-radius: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 5px;
}
`

export const JobLocation = styled.p`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    display: inline-block;
    font-size: 0.75rem;
    border: solid 0.5px;
    border-color: rgb(205, 202, 202);
    border-radius: 0.6rem;
    margin-left: 4px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
@media only screen and (max-width: 730.49px) 
{
    display: inline-block;
    font-size: 0.75rem;
    border: solid 0.5px;
    border-color: rgb(205, 202, 202);
    border-radius: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
@media only screen and (max-width: 630px) 
{
    display: inline-block;
    font-size: 0.75rem;
    border: solid 0.5px;
    border-color: rgb(205, 202, 202);
    border-radius: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
`
export const Filter1 = styled.p`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    display: inline-block;
    border: solid 0.5px;
    border-radius: 0.6rem;
    margin-left: 4px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;   
}
@media only screen and (max-width: 730.49px) 
{
    display: inline-block;
    margin-left: 4px;
    display: inline-block;
    border: solid 0.5px;
    border-radius: 0.6rem;
    margin-left: 4px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.75rem; 
}
@media only screen and (max-width: 630px) 
{
    display: inline-block;
    margin-left: 4px;
    display: inline-block;
    border: solid 0.5px;
    border-radius: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.75rem;
}
`
export const Filter2 = styled.p`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    display: inline-block;
    border: solid 0.5px;
    border-radius: 0.6rem;
    margin-left: 4px;
    padding-left: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
@media only screen and (max-width: 730.49px) 
{
    display: inline-block;
    margin-left: 4px;
    display: inline-block;
    border: solid 0.5px;
    border-radius: 0.6rem;
    margin-left: 4px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.75rem; 
}
@media only screen and (max-width: 630px) 
{
    display: inline-block;
    margin-left: 4px;
    display: inline-block;
    border: solid 0.5px;
    border-radius: 0.6rem;
    margin-left: 4px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.75rem;
}
`

export const TimePosted = styled.div`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    display: flex;
    position:absolute;
    left: 0.4rem;
    bottom: 0.4rem;
    align-items: center;
    margin-left: 0.4rem;
    align-self: end;
}
@media only screen and (max-width: 730.49px) 
{
    display: flex;
      position:absolute;
      left: 0.4rem;
      bottom: 0.4rem;
      align-items: center;
      margin-left: 0.4rem;
      align-self: end;
      font-size: 0.75rem;
}
@media only screen and (max-width: 630px) 
{
    grid-column: 4 / 5;
      align-items: center;
      display: flex;
      height: 100%;
      left: 0.3rem;
      bottom: 0;
      font-size: 0.75rem;   
}
`

export const Pin = styled.span`

position: absolute;
  left: 0.5rem;
  top: 0.5rem;
`

export const ApplyButtonTableColumn = styled.div`
  font-family: Tajawal,sans-serif;

@media only screen and (min-width: 730.5px) 
{
    display: flex;
    align-items: center; 
}
@media only screen and (max-width: 730.49px) 
{
    grid-column: 5 / 6;
    display: flex;
    align-items: center;
    display: none; 
}
@media only screen and (max-width: 630px) 
{
    grid-column: 5 / 6;
    display: flex;
    align-items: center;
    display: none;
}
`