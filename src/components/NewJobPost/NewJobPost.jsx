import React, { useState } from "react";
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

// import { remainingChars } from "./Input";

function NewJobPost()
{

    let [jobTitleValue, setJobTitleValue] = useState("المسمى الوظيفي");
    let [companyNameValue, setCompanyNameValue] = useState("اسم المنشأة");
    let [salaryValue, setSalaryValue] = useState(null);
    let [jobCategoryValue, setJobCategoryValue] = useState("تصنيف الوظيفة");
    let [companyCategoryValue, setCompanyCategoryValue] = useState("تصنيف مكان العمل");
    let [jobLocationValue, setJobLocationValue] = useState("مدينة العمل");
    let [companyDescriptionValue, setCompanyDescriptionValue] = useState("وصف المنشأة");
    let [jobDescriptionValue, setJobDescriptionValue] = useState("الوصف الوظيفي");
    let [emailToApplyValue, setEmailToApplyValue] = useState("البريد الإلكتروني");
    let [linkToApplyValue, setLinkToApplyValue] = useState("الموقع الإلكتروني");

    // let [salaryToValue, setSalaryToValue] = useState("");
    function updateCompanyDescription(newCompanyDescription)
    {
        setCompanyDescriptionValue(newCompanyDescription);
    }
    function updateJobDescription(newJobDescription)
    {
        setJobDescriptionValue(newJobDescription);
    }
    function updateEmailToApply(newEmailToApply)
    {
        setEmailToApplyValue(newEmailToApply);
    }
    function updateLinkToApply(newLinkToApply)
    {
        setLinkToApplyValue(newLinkToApply);
    }
    function updateJobTitle(newJobTitle)
    {
        setJobTitleValue(newJobTitle);
    }
    function updateCompanyName(newCompanyName)
    {
        setCompanyNameValue(newCompanyName);
    }
    function updateSalaryValue(newSalaryValue)
    {
        setSalaryValue(newSalaryValue);
        console.log(newSalaryValue.selectedIndex);
    }
    function updateJobCategory(newJobCategory)
    {
        setJobCategoryValue(newJobCategory);
    }
    function updateCompanyCategory(newCompanyCategory)
    {
        setCompanyCategoryValue(newCompanyCategory);
    }
    function updateJobLocation(newJobLocation)
    {
        setJobLocationValue(newJobLocation);
    }
    const props=
    {
        demoPageDetails: true,
        jobTitle: jobTitleValue==="المسمى الوظيفي" ? "(المسمى الوظيفي)":jobTitleValue,
        companyName: companyNameValue==="اسم المنشأة"?"(اسم المنشأة)":companyNameValue,
        companyLogo: "https://alhamour.me/logo/AlhamorLogo.jpg",
        companyDescription: companyDescriptionValue==="وصف المنشأة"?"(وصف المنشأة.....)":companyDescriptionValue,
        jobDescription: jobDescriptionValue==="الوصف الوظيفي"?"......":jobDescriptionValue,
        emailToApply: emailToApplyValue,
        linkToApply: linkToApplyValue,
        jobLocation: ((jobLocationValue === "🌏 اختر مدينة") || (jobLocationValue === "مدينة العمل")) ? "(المدينة)" : jobLocationValue,
        jobSalary: (salaryValue !== null && salaryValue !== "💰 يبدأ من") ? salaryValue : null,
        jobCategory: (jobCategoryValue === "👨‍🍳 اختر تصنيف" || jobCategoryValue === "تصنيف الوظيفة") ? "......" : jobCategoryValue,
        companyCategory: (companyCategoryValue === "🍴 اختر تصنيف" || companyCategoryValue ==="تصنيف مكان العمل") ? "......" : companyCategoryValue,
        cardFixed: 7,
        cardHighlighted: true,
        cardShowLogo: true,
        timePosted: "",
        demoCard: true
    }
    // function updateSalaryToValue(newSalaryToValue)
    // {
    //     setSalaryToValue(newSalaryToValue);
    // }
    return(
        <div>
            <InputDiv style={{marginTop: "2rem", paddingTop: "2rem"}}>
            <Heading>عن جهة التوظيف</Heading>

                <Label> اسم المنشأة:{"*"} </Label>
                <ParentComponent name="companyName" onChange={updateCompanyName}></ParentComponent>
                
                <LogoDiv>
                <Label>شعار المنشأة (بصيغة PNG أو JPG)</Label>
                    <LogoUploader />
                </LogoDiv>
                
                <Label>وصف للمنشأة:{"*"} </Label>
                <CustomTextArea
                    name="aboutCompany"
                    onChange={updateCompanyDescription}
                    // ref={textareaRef}
                    placeholder="مثلا: 
                    نحن مطعم متخصص في المأكولات البحرية. لدينا خمسة فروع...الخ"
                />
            </InputDiv>

            <InputDiv style={{marginTop: "2rem", paddingTop: "2rem"}}>
            <Heading>عن الوظيفة</Heading>

                <Label> المسمى الوظيفي :{"*"}</Label>
                <ParentComponent name="jobTitle" onChange={updateJobTitle}></ParentComponent>
                               
                <Label>الوصف الوظيفي:{"*"} </Label>
                <CustomTextArea
                    name="jobDescription"
                    onChange={updateJobDescription}
                    // ref={textareaRef}
                    placeholder="مثلا: 
                    يتولى مدير التشغيل في مطعمنا إدارة وتشغيل خمسة فروع...إلخ"
                />
                <Label>مدينة العمل :{"*"}</Label>
                <JobCity onChange={updateJobLocation}/>
                <Label> تصنيف الوظيفة :{"*"}</Label>
                <JobCategory onChange={updateJobCategory}/>
                <Label> تصنيف مكان العمل :{"*"}</Label>
                <CompanyCategory onChange={updateCompanyCategory}/>
                <Label>كامل الراتب الشهري المتوقع:</Label>
                    <SalaryFrom onChange={updateSalaryValue}/>
                <Label> ايميل استقبال المتقدمين:{"*"} </Label>
                <ParentComponent name="companyEmail" onChange={updateEmailToApply}></ParentComponent>
                <Label>{"أو"} </Label>
                <Label> رابط التقديم (اذا لايوجد بريد إلكتروني):{"*"} </Label>
                <ParentComponent name="companyURL" onChange={updateLinkToApply}></ParentComponent>

            </InputDiv>

            <Preview style={{marginTop: "2rem", paddingTop: "2rem", paddingLeft: "0", paddingRight: "0"}}>
            
            <Heading>معاينة الإعلان</Heading>
                <JobCard 
                    jobTitle={jobTitleValue}
                    companyName={companyNameValue}
                    companyLogo={"https://alhamour.me/logo/AlhamorLogo.jpg"}
                    companyDescription={companyDescriptionValue}
                    jobDescription={jobDescriptionValue}
                    emailToApply={emailToApplyValue}
                    linkToApplyValue={linkToApplyValue}
                    jobLocation={(jobLocationValue === "🌏 اختر مدينة") ? "مدينة العمل":jobLocationValue}
                    jobSalary={(salaryValue !== null && salaryValue !== "💰 يبدأ من") ? "+ "+salaryValue:null}
                    jobCategory={(jobCategoryValue === "👨‍🍳 اختر تصنيف") ? "تصنيف الوظيف":jobCategoryValue}
                    companyCategory={(companyCategoryValue === "🍴 اختر تصنيف") ? "تصنيف مكان العمل":companyCategoryValue}
                    cardFixed={7}
                    cardHighlighted={true}
                    cardShowLogo={true}
                    timePosted={""}
                    demoCard={true}
                />
                <DemoJobPostDetails cardProps={props} />
            </Preview>
        </div>

    )
}

export default NewJobPost;