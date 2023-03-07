import React from "react";
import Moment from 'react-moment';
import 'moment/locale/ar';

function JobDetailsPage(props)
{
    return(
        <div className="pageContainer">
            <div className="companyCard">
                <img className="pageCompanyLogo" src={props.companyImg}/>
                <p className="pageCompanyName" >{props.companyName}</p>
                <div className="stats" >
                    <p className="viewsNumber" ></p>
                    <p className="clicksNumber" ></p>
                </div>
                <div className="pageApplyButton" >Apply Now</div>
            </div>
            <div className="postDetails" >
                <p className="pageJobTitle" >{props.jobTitle}</p>
                <div className="timePosted"><Moment fromNow ago>{props.timePosted}</Moment></div>
                <div className="aboutCompany">
                    <div className="pageCompanyName">{props.companyName}<p> معلومات عن</p></div>
                    <div className="companyDescription">{props.companyDescription}</div>
                </div>
                <div className="aboutJob" >
                    <p> معلومات عن الوظيفة: </p>
                    <div className="jobDescription" >{props.jobDescription}</div>
                    <div className="jobTasks"></div>
                </div>
                <div className="aboutEmployee" >
                    <p>معلومات عن الموظف: </p>
                    <div className="employeeTasks" ></div>
                    <div className="employeeQualifications" ></div>
                </div>
                <div className="aboutBenifits" >
                    <p>التعويضات: </p>
                    <div className="allBenifits" ></div>
                </div>
            </div>
            <div className="pageApplyButton" >Apply Now</div>
        </div>
    )
    
}

export default JobDetailsPage;