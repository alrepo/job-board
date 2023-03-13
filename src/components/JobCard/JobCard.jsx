import React from "react";
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
import 'moment/locale/ar';
import { generateAvatar } from './avatar-generator';
// import jobDetailsPage from "../JobDetailsPage/JobDetailsPage";
import {
   JobCardDiv,
   LogoTableColumn,
   CompanyLogo,
   CompanyNameAndJobTitleContainer,
   LocationAndSalaryContainer,
   JobTitle,
   CompanyName,
   FilterTags,
   Salary,
   JobLocation,
   Filter1,
   Filter2,
   TimePosted,
   Pin,
   ApplyButtonTableColumn,
   ApplyButton,
   
   } from "./job-card.styled.js";

function JobCard(props) {
  const navigate = useNavigate();

  function handleButtonClick(event) {
    event.stopPropagation(); // Stop the event from propagating to the parent div
    navigate(`/jobs/${props.jobID}/application`);
  }

  function handleCardClick() {
    navigate(`/jobs/${props.jobID}`, { state: { cardProps: props } });
    }

  return (
    <JobCardDiv dir="rtl" onClick={!props.demoCard ? handleCardClick:null}>
      <LogoTableColumn>
        {props.cardShowLogo ? (
          <CompanyLogo src={props.companyLogo} alt="Company Logo" />
        ) : (
          <CompanyLogo src={generateAvatar(props.companyName, 100)} alt="Company Logo" />
        )}
      </LogoTableColumn>
      <CompanyNameAndJobTitleContainer>
        <JobTitle>{props.jobTitle}</JobTitle>
        <CompanyName>{props.companyName}</CompanyName>
        <LocationAndSalaryContainer>
          {props.jobSalary !== null ? (
            <Salary>
              <span role="img" aria-label="emoji">
                💰{' '}
              </span>
              {props.jobSalary}
            </Salary>
          ) : null}
          <JobLocation>
            <span role="img" aria-label="emoji">
              🌏{' '}
            </span>
            {props.jobLocation}
          </JobLocation>
        </LocationAndSalaryContainer>
      </CompanyNameAndJobTitleContainer>
      <FilterTags>
        <Filter1>{props.jobCategory}</Filter1>
        {props.companyCategory !== null ? <Filter2>{props.companyCategory}</Filter2> : null}
      </FilterTags>
      <ApplyButtonTableColumn>
        <ApplyButton onClick={!props.demoCard ? handleButtonClick:null}>
          تقديم
        </ApplyButton>
      </ApplyButtonTableColumn>
      <TimePosted>
      {!props.demoCard ?
        (<Moment fromNow ago>
          {props.timePosted}
        </Moment>)
        :
        (<span></span>)
        }
      </TimePosted>
      {props.cardFixed > 0 ? (
        <Pin>
          📌
        </Pin>
      ) : null}
    </JobCardDiv>
  );
}

export default JobCard;