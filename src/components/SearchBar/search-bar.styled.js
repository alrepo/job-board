import styled from "styled-components";

export const SearchContainer = styled.div`

    font-family: Tajawal,sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    justify-content: flex-center;
`

export const FilterContainer = styled.div`

    font-family: Tajawal,sans-serif;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin-top: 1rem;
    max-width: 600px;

    @media only screen and (max-width: 630.04px) 
    {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
`
export const Filter = styled.div`

    font-family: Tajawal,sans-serif;
    margin-left: 10px;
    direction: rtl;
    text-align: center;

    @media only screen and (max-width: 630.04px) 
    {
        display: flex;
        justify-items: center;
        width: 100%;
    }
`

export const Select = styled.select`

    font-family: Tajawal,sans-serif;
    font-size: 16px;
    padding: 10px;
    /* margin-top: 0.5rem; */
    margin-left: ${(props) =>(props.name === 'SalaryFrom' ? '0.5rem' : null)};
    background-color: #f1f1f1;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    direction: rtl;
    width: ${(props) => 
    ((props.name === 'JobCity') || (props.name === 'JobCategory') 
    || (props.name === 'SalaryFrom') || (props.name === 'SalaryTo')
    || (props.name === 'CompanyCategory') ? '40%': null)
    };
  &:focus {
    outline: ${({ submitClicked, value }) => (!submitClicked 
    ? "#4799eb solid 3px":(submitClicked && value === ""
    || (submitClicked && (value === "👨‍🍳 اختر تصنيف" 
    || value === "🍴 اختر تصنيف" || value === "🌏 اختر مدينة")))
    ? "red solid 3px":(submitClicked && (value !== "" 
    && value !== "👨‍🍳 اختر تصنيف" && value !== "🍴 اختر تصنيف" 
    && value !== "🌏 اختر مدينة")) ? "#4799eb solid 3px" :null)};
  }
    outline: ${({ submitClicked, value }) => ((submitClicked && 
    (value === ""
    || value === "👨‍🍳 اختر تصنيف" || value === "🍴 اختر تصنيف" || value === "🌏 اختر مدينة")) 
    ? "red solid 3px" 
    : (!submitClicked)
    && null)};
    
    @media only screen and (max-width: 630.04px) 
    {
        width: 100%;
        text-align: center;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    }
`

export const SearchButton = styled.div`

    font-family: Tajawal,sans-serif;
    display: inline-block;
    padding: 8px 20px;
    font-size: 18px;
    font-weight: 600;
    color: red;
    border-radius: 10px;
    border: solid 1px;
    border-color: red;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 0.5rem;
    padding: 0px 15px;

    &:hover
    {
        background-color: white;
        color: red;
        border: solid 0.5px;
        border-color: red;
    } 
`