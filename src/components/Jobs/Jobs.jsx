import React, { useState, useEffect } from 'react';
import JobCard from "../JobCard/JobCard.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useNavigate } from "react-router-dom";
import { jobPosts } from './jobs';
import { 
  PostButton,
  PostButtonContainer,
  CardsContainer
  
 } from "./jobs-page.styled.js";
 import axios from "axios";

function creatJobCard(element)
{
  return(
    <JobCard 
      jobID={element.jobID}
      jobTitle={element.jobTitle}
      companyName={element.companyName}
      companyLogo={element.companyLogo}
      companyDescription={element.companyDescription}
      jobDescription={element.jobDescription}
      emailToApply={element.emailToApply}
      linkToApply={element.linkToApply}
      jobLocation={element.location}
      jobSalary={element.salary !== null ? (element.salary):null}
      jobCategory={element.jobCategory}
      companyCategory={element.companyCategory}
      cardFixed={element.cardOptions.fixed}
      cardHighlighted={element.cardOptions.cardHighlighted}
      cardShowLogo={element.cardOptions.showLogo}
      timePosted={element.timePosted}
    />
  )
}

function Jobs() {
  const navigate = useNavigate();
  // const [jobs, setJobs] = useState([]);
  let jobs = jobPosts;
  // useEffect(() => {
  //   axios.get('http://localhost:5002/api/jobs')
  //     .then(response => {
  //       console.log(response.data);
  //       setJobs(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return(
    <div>
      <PostButtonContainer><PostButton onClick={()=>{navigate('/jobs/new-job-post')}}>أنشر إعلان وظيفي</PostButton></PostButtonContainer>
      <div>
        <SearchBar />
      </div>
      <CardsContainer>
        {jobs.map(creatJobCard)}
      </CardsContainer>
    </div>
  )
}

export default Jobs;
