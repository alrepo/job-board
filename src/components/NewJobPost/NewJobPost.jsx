import React from "react";
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
import CustomTextArea from './CustomTextArea.jsx';
import LogoUploader from "./LogoUploader.jsx";
import ParentComponent from "./Input";
import JobCity from "./JobCity.jsx";
import JobCategory from "./JobCategory.jsx";
import CompanyCategory from "./CompanyCategory.jsx";
import SalaryFrom from "./SalaryFrom.jsx";
import SalaryTo from "./SalaryTo.jsx";

// import { remainingChars } from "./Input";

function NewJobPost()
{   
    return(
        <div>
            <InputDiv style={{marginTop: "2rem", paddingTop: "1rem"}}>
            <Heading>عن جهة التوظيف</Heading>

                <Label> اسم المنشأة:{"*"} </Label>
                <ParentComponent name="companyName"></ParentComponent>
                
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

            <InputDiv style={{marginTop: "4rem", paddingTop: "1rem"}}>
            <Heading>عن الوظيفة</Heading>

                <Label> المسمى الوظيفي :{"*"}</Label>
                <ParentComponent name="jobTitle"></ParentComponent>
                               
                <Label>الوصف الوظيفي:{"*"} </Label>
                <CustomTextArea
                    name="jobDescription"
                    // ref={textareaRef}
                    placeholder="مثلا: 
                    يتولى مدير التشغيل في مطعمنا إدارة وتشغيل خمسة فروع...إلخ"
                />
                <Label> مدينة التوظيف :{"*"}</Label>
                <JobCity/>
                <Label> تصنيف الوظيفة :{"*"}</Label>
                <JobCategory/>
                <Label> تصنيف مكان العمل :{"*"}</Label>
                <CompanyCategory />
                <Label>الراتب الشهري المتوقع (الأساسي فقط):{"*"}</Label>
                <SalaryDiv>
                    <SalaryFrom /><SalaryTo />
                </SalaryDiv>

            </InputDiv>
        </div>

    )
}

export default NewJobPost;