import React from 'react'
import ProfilePic from './ProfilePic';

const ListMembers = (props) => {
    let data = props.data;
    //data= [1, 2, 3, 4];

    const appendList = (member) => {
        return(
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center ml-[-10px] mt-5">
              <ProfilePic data={member}/>
            </div>
        )
    }


  return (
    <div className='flex'>
        {data.map(appendList)}
    </div>
  )
}

export default ListMembers
