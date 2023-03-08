import React from 'react';
import { useState } from "react";
import { Box, Flex, AvatarWrapper } from "./uploader.styled.js";
import { toast } from 'react-toastify';

function blobToData(blob){
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve({
        name: blob.name,
        type: blob.type,
        size: Math.round(blob.size / 1000) + ' kB',
        base64: reader.result,
      })
      reader.readAsDataURL(blob)
    })
  }



  function LogoUploader()
  {
    const [avatar, setAvatar] = useState(null);
    const handleBlobToData = async (blob) => {
        if (!blob) return
        try {
          const fileInfo = await blobToData(blob)
          // check size
          if (fileInfo.size > 5 * 1024) {
            toast.error("File size is too large then 5MB")
            return
          }
          setAvatar(fileInfo?.base64)
        } catch (error) {
    
        }
      }
    return(
        <AvatarWrapper>
        <Flex>
            {!avatar && <img src={"/images/upload-icon.png"} alt="user avatar" />}
            {avatar && <img src={avatar} alt="user avatar" />}
        </Flex>
        <Box mt={8}>
          <Flex>
            <label htmlFor="user-avatar" style={{border: "0.5px solid", borderRadius: "7px", paddingLeft: "5px", paddingRight: "5px"}}>ارفع الشعار</label>
            <input
              id="user-avatar"
              type="file"
              name="avatar"
              accept="image/*"
              onChange={(e) => handleBlobToData(e.target.files[0])}
            />
          </Flex>
        </Box>
      </AvatarWrapper>
    )
  }

  export default LogoUploader;
