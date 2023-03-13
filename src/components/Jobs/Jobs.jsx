import React from "react";
import JobCard from "../JobCard/JobCard.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useNavigate } from "react-router-dom";
import { 
  PostButton,
  PostButtonContainer,
  CardsContainer
  
 } from "./jobs-page.styled.js";

let jobs = [
  {
    jobID: "12345",
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "المنطقة الشرقية",
    salary: "+9,000 ريال",
    jobCategory: "طباخ",
    companyCategory: "فاين دايننق",
    cardOptions: {fixed: 7, highlight: false, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "22556",
    jobTitle: "Opration Manager",
    companyName: "Rabbit Restaurant",
    companyLogo: "https://img.freepik.com/premium-vector/rabbit-cartoon-logo-design-vector-illustration_256145-308.jpg?w=2000",
    location: "Makka",
    salary: "+7,000 ريال",
    jobCategory: "Manager",
    companyCategory: "Fast Food",
    cardOptions: {fixed: 1, highlight: true, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "90878",
    jobTitle: "Barista",
    companyName: "Starbucks Coffee",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png",
    location: "Madina",
    salary: null,
    jobCategory: "Barista",
    companyCategory: "Drive Thru",
    cardOptions: {fixed: 30, highlight: false, showLogo: false},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "65113",
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "+5,000 ريال",
    jobCategory: "طباخ",
    companyCategory: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "51854",
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "+10,000 ريال",
    jobCategory: "طباخ",
    companyCategory: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "43345",
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: null,
    jobCategory: "طباخ",
    companyCategory: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "11152",
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "+20,000 ريال",
    jobCategory: "طباخ",
    companyCategory: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  },
  {
    jobID: "61254",
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: null,
    jobCategory: "طباخ",
    companyCategory: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true},
    timePosted: "2023-02-27T12:59-0500",
    demoCard: false
  }
]
function creatJobCard(element)
{
  return(
    <JobCard 
      jobID={element.jobID}
      jobTitle={element.jobTitle}
      companyName={element.companyName}
      companyLogo={element.companyLogo}
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
function Jobs()
{
  const navigate = useNavigate();

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