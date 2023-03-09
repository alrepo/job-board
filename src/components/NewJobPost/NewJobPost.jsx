import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { 
        DetailsDiv,
        Heading,
        InputDiv,
        Label,
        LogoDiv,

} from "./new-job-post.styled.js";
import CustomTextArea from './CustomTextArea.jsx';
import LogoUploader from "./LogoUploader.jsx";
import ParentComponent from "./Input";
// import { remainingChars } from "./Input";

function NewJobPost()
{
     
    return(
        <div>
        <DetailsDiv style={{marginTop: "4rem"}}>
            <Heading>عن جهة التوظيف</Heading>
            <InputDiv>
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
        </DetailsDiv>

        <DetailsDiv>
            <Heading>عن الوظيفة</Heading>
            <InputDiv>
                <Label placeholder="مثلا: 
                    يتولى مدير التشغيل في مطعمنا إدارة وتشغيل خمسة فروع...إلخ"
                    > المسمى الوظيفي :{"*"}
                 </Label>
                <ParentComponent name="jobTitle"></ParentComponent>
                                
                <Label>الوصف الوظيفي:{"*"} </Label>
                <CustomTextArea
                    name="jobDescription"
                    // ref={textareaRef}
                    placeholder="مثلا: 
                    يتولى مدير التشغيل في مطعمنا إدارة وتشغيل خمسة فروع...إلخ"
                />
            </InputDiv>
        </DetailsDiv>
        </div>

    )
}

export default NewJobPost;