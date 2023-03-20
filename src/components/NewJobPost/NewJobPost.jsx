import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    Heading,
    InputDiv,
    Label,
    LogoDiv,
    Preview
} from "./new-job-post.styled.js";
import {
    ButtonDiv,
    SubmitPostButton
}
    from '../JobDetailsPage/job-detailes-page.styled';
// import {
//         LogoTableColumn,
//         CompanyLogo,
//         CompanyNameAndJobTitleContainer,
// } from "../JobCard/job-card.styled";
// import { jobTitleValue } from './Input';
import JobCard from '../JobCard/JobCard.jsx';
import CustomTextArea from './CustomTextArea.jsx';
import LogoUploader from "./LogoUploader.jsx";
import ParentComponent from "./Input";
import JobCity from "./JobCity.jsx";
import JobCategory from "./JobCategory.jsx";
import CompanyCategory from "./CompanyCategory.jsx";
import SalaryFrom from "./SalaryFrom.jsx";
import DemoJobPostDetails from './DemoJobPostDetails';
import axios from "axios";
import { NoEncryption } from "@mui/icons-material";

// import { remainingChars } from "./Input";

function NewJobPost() {

    const [jobTitleValue, setJobTitleValue] = useState("المسمى الوظيفي");
    const [companyNameValue, setCompanyNameValue] = useState("اسم المنشأة");
    const [salaryValue, setSalaryValue] = useState(null);
    const [jobCategoryValue, setJobCategoryValue] = useState("تصنيف الوظيفة");
    const [companyCategoryValue, setCompanyCategoryValue] = useState("تصنيف مكان العمل");
    const [jobLocationValue, setJobLocationValue] = useState("مدينة العمل");
    const [companyDescriptionValue, setCompanyDescriptionValue] = useState("وصف المنشأة");
    const [jobDescriptionValue, setJobDescriptionValue] = useState("الوصف الوظيفي");
    const [emailToApplyValue, setEmailToApplyValue] = useState("البريد الإلكتروني");
    const [linkToApplyValue, setLinkToApplyValue] = useState("الموقع الإلكتروني");
    const [logoPath, setLogoPath] = useState(null); // state for logo path

    // const [salaryToValue, setSalaryToValue] = useState("");
    function updateCompanyDescription(newCompanyDescription) {
        setCompanyDescriptionValue(newCompanyDescription);
    }
    function updateJobDescription(newJobDescription) {
        setJobDescriptionValue(newJobDescription);
    }
    function updateEmailToApply(newEmailToApply) {
        setEmailToApplyValue(newEmailToApply);
    }
    function updateLinkToApply(newLinkToApply) {
        setLinkToApplyValue(newLinkToApply);
    }
    function updateJobTitle(newJobTitle) {
        setJobTitleValue(newJobTitle);
    }
    function updateCompanyName(newCompanyName) {
        setCompanyNameValue(newCompanyName);
    }
    function updateSalaryValue(newSalaryValue) {
        setSalaryValue(newSalaryValue);
        console.log(newSalaryValue.selectedIndex);
    }
    function updateJobCategory(newJobCategory) {
        setJobCategoryValue(newJobCategory);
    }
    function updateCompanyCategory(newCompanyCategory) {
        setCompanyCategoryValue(newCompanyCategory);
    }
    function updateJobLocation(newJobLocation) {
        setJobLocationValue(newJobLocation);
    }
    // function to handle logo path change
    function handleLogoChange(path) {
        setLogoPath(path);
    }
    function generateRandomNumber() {
        const randomNumber = Math.random() * 1000000000000000; // multiply by a large number to create a larger range of possible values
        const base36String = randomNumber.toString(36); // convert to a base-36 string
        const complexRandomNumber = base36String.substring(0, 10); // take the first 10 characters
        return complexRandomNumber;
      }
    const props =
    {
        demoPageDetails: true,
        jobTitle: jobTitleValue === "المسمى الوظيفي" ? "(المسمى الوظيفي)" : jobTitleValue,
        companyName: companyNameValue === "اسم المنشأة" ? "(اسم المنشأة)" : companyNameValue,
        companyLogo: "https://alhamour.me/logo/AlhamorLogo.jpg",
        companyDescription: companyDescriptionValue === "وصف المنشأة" ? "(وصف المنشأة.....)" : companyDescriptionValue,
        jobDescription: jobDescriptionValue === "الوصف الوظيفي" ? "......" : jobDescriptionValue,
        emailToApply: emailToApplyValue,
        linkToApply: linkToApplyValue,
        jobLocation: ((jobLocationValue === "🌏 اختر مدينة") || (jobLocationValue === "مدينة العمل")) ? "(المدينة)" : jobLocationValue,
        jobSalary: (salaryValue !== null && salaryValue !== "💰 يبدأ من") ? salaryValue : null,
        jobCategory: (jobCategoryValue === "👨‍🍳 اختر تصنيف" || jobCategoryValue === "تصنيف الوظيفة") ? "......" : jobCategoryValue,
        companyCategory: (companyCategoryValue === "🍴 اختر تصنيف" || companyCategoryValue === "تصنيف مكان العمل") ? "......" : companyCategoryValue,
        cardFixed: 7,
        cardHighlighted: true,
        cardShowLogo: true,
        demoCard: true,
    }
    const navigate = useNavigate();
    const [submitClicked, setSubmitClicked] = useState(false);

    // function updateSalaryToValue(newSalaryToValue)
    // {
    //     setSalaryToValue(newSalaryToValue);
    // }
    function handleSubmit(event) {
        // event.preventDefault();
        
        const data = {
            jobID: generateRandomNumber(),
            jobTitle: jobTitleValue,
            companyName: companyNameValue,
            companyLogo: "https://pbs.twimg.com/profile_images/1493729525288505347/SagwcuRN_400x400.jpg",//To be updated by logo path
            companyDescription: companyDescriptionValue,
            jobDescription: jobDescriptionValue,
            emailToApply: emailToApplyValue,
            linkToApply: linkToApplyValue,
            location: jobLocationValue,
            salary: salaryValue,
            jobCategory: jobCategoryValue,
            companyCategory: companyCategoryValue,
            cardOptions: {
                fixed: 0,//default value for now
                highlight: false,//default value for now
                showLogo: false//default value for now
              },
            timePosted: new Date().getDate,
            demoCard: false
            // logoPath: logoPath // include logo path in the request body
        };
        // if(companyNameValue == "اسم المنشأة")
        // {
        //     alert("No Company Name was Entered!")
        // }
        // make post request with the data
        setSubmitClicked(true); // set submitClicked to true when submit button is clicked
        // if(companyNameValue == "اسم المنشأة" || linkToApplyValue=="الموقع الإلكتروني" || 
        // jobTitleValue=="المسمى الوظيفي" || emailToApplyValue == "البريد الإلكتروني")
        // {

        // }
            // axios.post('http://localhost:5001/api/new-post', JSON.stringify(data))
            // .then(response => {
            //     console.log('Post request successful!', response);
                navigate('/jobs'); // change the URL to the new URL here
            // })
            // .catch(error => {
            //     console.error('Error submitting post request:', error);
            // });


    }
    // let redHighlight1={
    //     ':focus': {
    //     boxShadow: "0 0 2px 2px #FF0000"
    //     },
    // };
    return (
            <div>
                <InputDiv style={{ marginTop: "2rem", paddingTop: "2rem" }}>
                    <Heading>عن جهة التوظيف</Heading>

                    <Label> اسم المنشأة:{"*"} </Label>
                    <ParentComponent name="companyName" onChange={updateCompanyName} submitClicked={submitClicked}></ParentComponent>

                    <LogoDiv>
                        <Label>شعار المنشأة (بصيغة PNG أو JPG)</Label>
                        <LogoUploader onChange={handleLogoChange} />
                    </LogoDiv>

                    <Label>وصف للمنشأة:{"*"} </Label>
                    <CustomTextArea
                        name="aboutCompany"
                        onChange={updateCompanyDescription}
                        submitClicked={submitClicked}
                        // ref={textareaRef}
                        placeholder="مثلا: 
                    نحن مطعم متخصص في المأكولات البحرية. لدينا خمسة فروع...الخ"
                    />
                </InputDiv>

                <InputDiv style={{ marginTop: "2rem", paddingTop: "2rem" }}>
                    <Heading>عن الوظيفة</Heading>

                    <Label> المسمى الوظيفي :{"*"}</Label>
                    <ParentComponent name="jobTitle" onChange={updateJobTitle} submitClicked={submitClicked}></ParentComponent>

                    <Label>الوصف الوظيفي:{"*"} </Label>
                    <CustomTextArea
                        name="jobDescription"
                        onChange={updateJobDescription}
                        submitClicked={submitClicked}
                        // ref={textareaRef}
                        placeholder="مثلا: 
                    يتولى مدير التشغيل في مطعمنا إدارة وتشغيل خمسة فروع...إلخ"
                    />
                    <Label>مدينة العمل :{"*"}</Label>
                    <JobCity onChange={updateJobLocation} submitClicked={submitClicked}/>
                    <Label> تصنيف الوظيفة :{"*"}</Label>
                    <JobCategory onChange={updateJobCategory} submitClicked={submitClicked}/>
                    <Label> تصنيف مكان العمل :{"*"}</Label>
                    <CompanyCategory onChange={updateCompanyCategory} submitClicked={submitClicked}/>
                    <Label>كامل الراتب الشهري المتوقع:</Label>
                    <SalaryFrom onChange={updateSalaryValue} submitClicked={submitClicked}/>
                    <Label> ايميل استقبال المتقدمين:{"*"} </Label>
                    <ParentComponent name="companyEmail" onChange={updateEmailToApply} submitClicked={submitClicked}></ParentComponent>
                    <Label>{"أو"} </Label>
                    <Label> رابط التقديم (اذا لايوجد بريد إلكتروني):{"*"} </Label>
                    <ParentComponent name="companyURL" onChange={updateLinkToApply} submitClicked={submitClicked}></ParentComponent>

                </InputDiv>

                <Preview style={{ marginTop: "2rem", paddingTop: "2rem", paddingLeft: "0", paddingRight: "0" }}>

                    <Heading>معاينة الإعلان</Heading>
                    <JobCard
                        jobTitle={jobTitleValue}
                        companyName={companyNameValue}
                        companyLogo={"https://alhamour.me/logo/AlhamorLogo.jpg"}
                        companyDescription={companyDescriptionValue}
                        jobDescription={jobDescriptionValue}
                        emailToApply={emailToApplyValue}
                        linkToApplyValue={linkToApplyValue}
                        jobLocation={(jobLocationValue === "🌏 اختر مدينة") ? "مدينة العمل" : jobLocationValue}
                        jobSalary={(salaryValue !== null && salaryValue !== "💰 يبدأ من") ? "+ " + salaryValue : null}
                        jobCategory={(jobCategoryValue === "👨‍🍳 اختر تصنيف") ? "تصنيف الوظيف" : jobCategoryValue}
                        companyCategory={(companyCategoryValue === "🍴 اختر تصنيف") ? "تصنيف مكان العمل" : companyCategoryValue}
                        cardFixed={7}
                        cardHighlighted={true}
                        cardShowLogo={true}
                        timePosted={""}
                        demoCard={true}
                    />
                    <DemoJobPostDetails cardProps={props} />
                    <ButtonDiv style={{ display: "flex" }}>
                        <SubmitPostButton type="button" value="submitButton" onClick={handleSubmit}>أنشر الإعلان الآن</SubmitPostButton>
                    </ButtonDiv>
                </Preview>
            </div>
    )
}

export default NewJobPost;