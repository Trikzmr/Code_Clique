import React, { useEffect, useState } from 'react'
import ProfileCard from './Components/ProfileCard'
import UserDetailsCard from './Components/UserDetailsCard';
import ProfileDiscription from './Components/ProfileDiscription';
import ProfileLinks from './Components/ProfileLinks';

const Profiled = () => {
    const [userDetail, setuserDetail] = useState({});
    const [links, setlinks] = useState([]);

    useEffect( ()=>{
        const fetchdata = async()=>{
            const apiUrl = "http://localhost:3000/api/userdetails";
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
                    setlinks(linkss)
                
            } catch (error) {
                
            }
        }
        fetchdata();
    }, [])
  return (
    <div className='bg-[#E8F3EB] min-h-[100vh] flex items-center justify-center p-8 py-2'>
        <div className="profilearea max-w-19/20 min-w-19/20 min-h-[100vh] p-6 py-2">
            <div className="profilerow flex flex-col md:flex-row gap-4 mt-2">
                <div className="profilecard min-w-3/10 max-w-3/10">
                    <ProfileCard data={userDetail}/>
                    <UserDetailsCard data={userDetail}/>
                </div>
                <div className="Description min-w-7/10 flex gap-4">
                    <div className="profiledis min-w-7/11 max-w-7/11">
                        <ProfileDiscription data={userDetail}/>
                    </div>
                    <div className="importantlinks w-4/11 max-w-4/11">
                        <ProfileLinks data={links}/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profiled
