import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { 
        DetailsDiv,
        Heading,
        InputDiv,
        Input,
        Label,
        LogoDiv,

} from "./new-job-post.styled.js";
import { CustomTextArea } from './CustomTextArea';
import LogoUploader from "./LogoUploader.jsx";

function NewJobPost()
{
     
    return(
        <DetailsDiv>
            <Heading>عن المنشأة (جهة التوظيف)</Heading>
            <InputDiv>
                <Label> اسم المنشأة:{"*"} </Label>
                <Input></Input>
                <br></br>
                <LogoDiv>
                <Label>  شعار المنشأة (بصيغة .PNG أو .JPG): </Label>
                    <LogoUploader />
                </LogoDiv>
                <br></br>
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