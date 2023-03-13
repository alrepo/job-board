import styled from "styled-components";

export const JobPostContainer = styled.div`
  font-family: Tajawal, sans-serif;
  direction: rtl;
  max-width: 700px;
  margin: 0 auto;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 20px;
  
  @media only screen and (max-width: 600px) {
    padding: 30px;
  }
`;

export const JobPostSection = styled.div`
  margin-bottom: 40px;
  
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .jobTitle {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .companyName {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  .jobLocation {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 30px;
    color: #666;
  }
  
  ul {
    margin: 0;
    padding: 0;
    
    li {
      margin-bottom: 20px;
      
      strong {
        font-weight: 600;
        color: #333;
      }
      
      span {
        font-size: 18px;
        color: #666;
      }
    }
  }
  
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 24px;
    }
    
    p {
      font-size: 18px;
    }
  }
`;

export const LogoDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const PostList = styled.ul`

  list-style: none;

  li::before {
    content: "👈";
    margin-right: 10px; /* Optional: add some space between the emoji and the text */
  }
`
export const LogoAndTitleDiv = styled.div`
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

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

export const CompanyName = styled.div`
  font-family: Tajawal, sans-serif;
  align-self: center;
  justify-self: start;
  font-weight: 900;
  font-size: 18px;
`
export const CompanyDescription = styled.span`
grid-row: 2 / 3;
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
`