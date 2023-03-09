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
import { CustomTextArea } from './CustomTextArea';
import LogoUploader from "./LogoUploader.jsx";
import ParentComponent from "./Input";
// import { remainingChars } from "./Input";

function NewJobPost()
{
     
    return(
        <DetailsDiv>
            <Heading>عن جهة التوظيف</Heading>
            <InputDiv>
                <Label> اسم المنشأة:{"*"} </Label>
                <ParentComponent></ParentComponent>
                
                <LogoDiv>
                <Label>شعار المنشأة (بصيغة PNG أو JPG)</Label>
                    <LogoUploader />
                </LogoDiv>
                
                <Label>وصف للمنشأة:{"*"} </Label>
                <CustomTextArea
                    // ref={textareaRef}
                    // placeholder="أكتب ردك"
                />
            </InputDiv>
        </DetailsDiv>
    )
}

export default NewJobPost;