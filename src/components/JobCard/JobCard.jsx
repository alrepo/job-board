import React from "react";
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
import 'moment/locale/ar';
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
    navigate('/jobs/id=12345/application');
  }

  function handleCardClick() {
    navigate('/jobs/id=12345');
  }

  return (
    <JobCardDiv dir="rtl" onClick={handleCardClick}>
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
        <Filter1>{props.filter1}</Filter1>
        {props.filter2 !== null ? <Filter2>{props.filter2}</Filter2> : null}
      </FilterTags>
      <ApplyButtonTableColumn>
        <ApplyButton onClick={handleButtonClick}>
          تقديم
        </ApplyButton>
      </ApplyButtonTableColumn>
      <TimePosted>
        <Moment fromNow ago>
          {props.timePosted}
        </Moment>
      </TimePosted>
      {props.cardFixed > 0 ? (
        <Pin>
          📌
        </Pin>
      ) : null}
    </JobCardDiv>
  );
}
// role="img" aria-label="emoji"
function generateAvatar(username, size) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = '#FFFFFF'; // Background color
  context.fillRect(0, 0, size, size);
  context.font = Math.floor(size / 2) + 'px Arial'; // Font size
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#FF0000'; // Text color
  context.fillText(username.charAt(0).toUpperCase(), size / 2, size / 2);
  // Draw a circle
  context.beginPath();
  context.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
  return canvas.toDataURL();

}

export default JobCard;