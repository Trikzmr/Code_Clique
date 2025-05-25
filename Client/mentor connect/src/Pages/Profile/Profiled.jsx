import React, { useEffect, useState } from 'react'
import ProfileCard from './Components/ProfileCard'
import UserDetailsCard from './Components/UserDetailsCard';
import ProfileDiscription from './Components/ProfileDiscription';
import ProfileLinks from './Components/ProfileLinks';
import Gitcal from './Components/Gitcal';
import CompleteProfilePrompt from './Components/CompleteProfilePrompt';
import Gitlanguage from './Components/Gitlanguage';

const Profiled = () => {
    const [userDetail, setuserDetail] = useState({});
    const [links, setlinks] = useState([]);
    const [profilepic, setprofilepic] = useState({});

    useEffect( ()=>{
        const fetchdata = async()=>{
            const apiUrl = "https://code-clique-9qgm.vercel.app/api/userdetails";
            const container = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Allows cookies to be sent with the request
              }
            try {
                const response = await fetch(apiUrl, container);
                const data = await response.json();
                setuserDetail(data);
                console.log(data);
                const linkss = [
                    data.LinkedinLink,
                    data.GithubUrl,
                    data.WebsiteLink
                ]
                setlinks(linkss);
                getprofilepic(data);
                
            } catch (error) {
                
            }
        }
        fetchdata();
    }, [])

    const getprofilepic = async(data) => {
            const username = data.Username;
            const obj = {
                username: username
            }
            const apiUrl = "https://code-clique-9qgm.vercel.app/api/getprofilepic";
            const container = {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Allows cookies to be sent with the request
              }
            try {
                const response = await fetch(apiUrl, container);
                const data = await response.json();
                console.log(data);
                setuserDetail(prev => ({...prev, profilePic: data.imageUrl}));
            } catch (error) {
                console.error("Error fetching profile picture:", error);
            }
        }

    
  return (
    <div className='bg-[#E8F3EB] min-h-[100vh] flex items-center justify-center md:p-8 py-2'>
        <div className="profilearea max-w-19/20 min-w-19/20 min-h-[100vh] md:p-6 py-2">
            <div className="profilerow flex flex-col md:flex-row gap-4 mt-2">
                <div className="profilecard w-full md:min-w-3/10 md:max-w-3/10">
                    <ProfileCard data={userDetail}/>
                    <UserDetailsCard data={userDetail}/>
                </div>
                <div className="rightprofile">
                    <div className="Description md:min-w-7/10 md:flex gap-4">
                        <div className="profiledis my-4 md:my-0 md:min-w-7/11 md:max-w-7/11">
                            <ProfileDiscription data={userDetail}/>
                        </div>
                        <div className="importantlinks my-4 md:my-0 md:w-4/11 md:max-w-4/11">
                            <ProfileLinks data={links}/>
                        </div>
                        
                    </div>
                    <div className="Description min-w-7/10 md:flex gap-4">
                        <div className="gitcal md:min-w-7/11 md:max-w-7/11">
                            <Gitcal/>
                        </div>
                        <div className="gitlang">
                          <Gitlanguage/> 
                        </div>
                    </div>
                    <div className="ProfileOthrs flex gap-4 mt-4">
                        <div className="completeprofile min-w-11/11">
                            <CompleteProfilePrompt/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profiled
