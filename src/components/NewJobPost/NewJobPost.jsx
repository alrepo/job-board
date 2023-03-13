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
        SalaryDiv,

} from "./new-job-post.styled.js";
// import { jobTitleValue } from './Input';
import JobCard from '../JobCard/JobCard.jsx';
import CustomTextArea from './CustomTextArea.jsx';
import LogoUploader from "./LogoUploader.jsx";
import ParentComponent from "./Input";
import JobCity from "./JobCity.jsx";
import JobCategory from "./JobCategory.jsx";
import CompanyCategory from "./CompanyCategory.jsx";
import SalaryFrom from "./SalaryFrom.jsx";
// import SalaryTo from "./SalaryTo.jsx";

// import { remainingChars } from "./Input";

function NewJobPost()
{
    let [jobTitleValue, setJobTitleValue] = useState("المسمى الوظيفي");
    let [companyNameValue, setCompanyNameValue] = useState("اسم المنشأة");
    let [salaryValue, setSalaryValue] = useState(null);
    let [jobCategoryValue, setJobCategoryValue] = useState("تصنيف الوظيفة");
    let [companyCategoryValue, setCompanyCategoryValue] = useState("تصنيف مكان العمل");
    let [jobLocationValue, setJobLocationValue] = useState("مدينة العمل");
    // let [salaryToValue, setSalaryToValue] = useState("");

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
                <ParentComponent name="companyEmail"></ParentComponent>
                <Label>{"أو"} </Label>
                <Label> رابط التقديم (اذا لايوجد بريد إلكتروني):{"*"} </Label>
                <ParentComponent name="companyURL"></ParentComponent>

            </InputDiv>

            <InputDiv style={{marginTop: "2rem", paddingTop: "2rem", paddingLeft: "0", paddingRight: "0"}}>
            
            <Heading>معاينة الإعلان</Heading>
                <JobCard 
                    jobTitle={jobTitleValue}
                    companyName={companyNameValue}
                    companyLogo={""}
                    jobLocation={(jobLocationValue === "🌏 اختر مدينة") ? "مدينة العمل":jobLocationValue}
                    jobSalary={(salaryValue !== null && salaryValue !== "💰 يبدأ من") ? "+ "+salaryValue:null}
                    jobCategory={(jobCategoryValue === "👨‍🍳 اختر تصنيف") ? "تصنيف الوظيف":jobCategoryValue}
                    companyCategory={(companyCategoryValue === "🍴 اختر تصنيف") ? "تصنيف مكان العمل":companyCategoryValue}
                    cardFixed={7}
                    cardHighlighted={true}
                    cardShowLogo={false}
                    timePosted={""}
                    demoCard={true}
                />
            </InputDiv>
            {/* <PostDetails
                companyLogo={"Logo"}
                companyNamy={"Company Name"}
                companyDescription={"Company Description"}
                jobTitle={"Job Title"}
                jobDescription={"Job Description"}
                jobLocation={"Job Location"}
                jobSalary={"salary"}
                viewCount={"Views Count"}
                clicksCount={"Clicks Count"}
                timePosted={"Time Posted"}
                applyEmail={"Apply Email"}
                applyLink={"Apply Link"}
                demoCard={true}
           /> */}
        </div>

    )
}

export default NewJobPost;