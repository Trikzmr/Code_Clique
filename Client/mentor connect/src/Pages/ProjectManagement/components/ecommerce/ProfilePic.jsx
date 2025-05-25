import React, { useEffect, useState } from 'react'

const ProfilePic = ({data}) => {
    const [imageUrl, setimageurl] = useState("https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg");
    const apicall = async () =>{
        const apiUrl = "https://code-clique-9qgm.vercel.app/api/getprofilepic";
        const container = {
            method: 'POST',
            body: JSON.stringify({username: data}),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Allows cookies to be sent with the request
          }
        try {
            const response = await fetch(apiUrl, container);
            const result = await response.json();
            if(response.status == 200) {
                setimageurl(result.imageUrl);
            }
            
        } catch (error) {
            console.error("Error fetching profile picture:", error);
        }
    }
    const func = ()=>{
        apicall();
    }
    useEffect(func, []);
    return (
        <div>
            <img className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center" src={imageUrl} alt="" />
        </div>
    )
}

export default ProfilePic
