import styled from "styled-components";

export const JobPostContainer = styled.div`
  font-family: Tajawal, sans-serif;
  direction: rtl;
  max-width: 700px;
  max-height: 100%;
  margin: 0 auto;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: #ffffff;
  border-radius: 20px;
  
  @media only screen and (max-width: 600px) {
    padding: 1.875rem;
  }
`;

export const JobPostSection = styled.div`
  margin-bottom: 2.5rem;
  
  h2 {
    font-size: 2rem;
    /* margin-bottom: 1.25rem; */
    color: #333;
  }
  
  .jobTitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  
  .companyName {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  .jobLocation {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #666;
  }
  
  ul {
    margin: 0;
    padding: 0;
   
    li {
        margin-bottom: 0.25rem;
        font-weight: 600;
        color: #333;
        font-size: 1.2rem;
      }
      
      span {
        font-size: 0.625rem;
        color: #666;
      }
    }
  
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const LogoDiv = styled.div`
`;

export const PostList = styled.ul`
  list-style: none;

  /* li::before {
    content: "👈";
    margin-right: 10px;
  } */
`
export const LogoAndTitleDiv = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 0.25rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 0.625rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.5rem;
  /* margin-right: 10px; */
`
export const Logo = styled.img`
  max-width: 4.5rem;
  max-height: 4.5rem;
  border: solid 0.05px;
  border-color: grey;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  
  @media only screen and (max-width: 600px) {
    max-width: 3.5rem;
    max-height: 3.5rem;
  }
`;

export const CompanyName = styled.span`
  font-family: Tajawal, sans-serif;
  align-self: center;
  justify-self: start;
  font-weight: 900;
  font-size: 1.125rem;
  margin-right: 5px;

`
export const CompanyDescription = styled.p`
margin: 0;
font-size: 1.125rem;
font-weight: 400;
`
export const ApplyButton = styled.button`
  font-family: Tajawal, sans-serif;
  background-color: rgb(249, 50, 50);
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: red;
  }
  
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`
export const ButtonDiv = styled.div`
display: flex;
margin-top: 1.5rem;
`