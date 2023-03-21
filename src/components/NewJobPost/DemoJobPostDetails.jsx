import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Moment from 'react-moment';
import 'moment/locale/ar';
// import JobCard from "../JobCard/JobCard";

import {
         JobPostContainer,
         JobPostSection,
         ApplyButton,
         LogoDiv,
         CompanyDescription,
         Logo,
         LogoAndTitleDiv,
         CompanyName,
         ButtonDiv,
         PostList,
         Paragraph

        } from '../JobDetailsPage/job-detailes-page.styled';
// import {
//         LogoTableColumn,
//         CompanyLogo
// } from '../JobCard/job-card.styled';
import { generateAvatar } from '../JobCard/avatar-generator';

function DemoJobPostDetails(props){
  const { cardProps } = props;
    return (
    <JobPostContainer>
      <JobPostSection>
        <div className="title">
        <p className="jobTitle">{cardProps.jobTitle}</p>
        <p className="companyName">{cardProps.companyName}</p>
        <p className="jobLocation">{cardProps.jobLocation}</p>
        </div>
      </JobPostSection>
      <JobPostSection>
        {/* <h3>تفاصيل الوظيفة</h3> */}
        <PostList>
          <li>الوصف الوظيفي:<Paragraph>{cardProps.jobDescription}</Paragraph></li>
          <li>المدينة: <Paragraph>{cardProps.jobLocation}</Paragraph></li>
          <li>تنصيف الوظيفة: <Paragraph>{cardProps.jobCategory}</Paragraph></li>
          <li>تصنيف مكان العمل: <Paragraph>{cardProps.companyCategory}</Paragraph></li>
          <li> الراتب يبدأ من: <Paragraph>{cardProps.jobSalary}</Paragraph></li>
        </PostList>
      </JobPostSection>
      <LogoAndTitleDiv>
            {cardProps.cardShowLogo ? (
            <Logo src={cardProps.companyLogo} alt="Company Logo" />
            ) : (
            <Logo src={generateAvatar(cardProps.companyName, 100)} alt="Company Logo" />
            )}
            <CompanyName>{cardProps.companyName}{" :"}<CompanyDescription>{cardProps.companyDescription}</CompanyDescription></CompanyName>
      </LogoAndTitleDiv>
    <ButtonDiv style={{display:"flex"}}>
      <ApplyButton style={{backgroundColor: "lightGrey", cursor: "default"}} disabled={true}>تقدم الآن</ApplyButton>
     </ButtonDiv>
    </JobPostContainer>

  );
};

export default DemoJobPostDetails;