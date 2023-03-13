import React from "react";
import { useLocation } from "react-router-dom";
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

        } from './job-detailes-page.styled';
// import {
//         LogoTableColumn,
//         CompanyLogo
// } from '../JobCard/job-card.styled';
import { generateAvatar } from '../JobCard/avatar-generator';

const JobDetailsPage = () => {
    const { state } = useLocation();
    const cardProps = state ? state.cardProps : null;

  return (
    <JobPostContainer>
      <JobPostSection>
        <h2 className="title">{" "}<span className="jobTitle">{"👨"}{cardProps.jobTitle}</span>{" "}<span className="companyName">{"🏢"}{cardProps.companyName}</span>{" "}<span className="jobLocation">{"🌏"}{cardProps.jobLocation}</span></h2>
      </JobPostSection>
      <JobPostSection>
        <h2>تفاصيل الوظيفة</h2>
        <PostList>
          <li><strong>الوصف الوظيفي:</strong> A description of the job goes here.</li>
          <li><strong>المدينة: </strong>{cardProps.jobLocation}</li>
          <li><strong>تنصيف الوظيفة: </strong>{cardProps.jobCategory}</li>
          <li><strong>تصنيف مكان العمل: </strong>{cardProps.companyCategory}</li>
          <li><strong> الراتب يبدأ من: </strong>{cardProps.jobSalary}</li>
        </PostList>
      </JobPostSection>
      <JobPostSection>
      <LogoDiv>
      <LogoAndTitleDiv>
            {cardProps.cardShowLogo ? (
            <Logo src={cardProps.companyLogo} alt="Company Logo" />
            ) : (
            <Logo src={generateAvatar(cardProps.companyName, 100)} alt="Company Logo" />
            )}
            <CompanyName>{cardProps.companyName}{" :"}</CompanyName>
      </LogoAndTitleDiv>
            <CompanyDescription>A 500-character paragraph about the company goes here.</CompanyDescription>
      </LogoDiv>
      </JobPostSection>
      <ButtonDiv style={{display:"flex"}}>
          <ApplyButton>تقدم الآن</ApplyButton>
     </ButtonDiv>
    </JobPostContainer>

  );
};

export default JobDetailsPage;