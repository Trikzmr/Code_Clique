import React from 'react'

const ProfileLinks = ({data}) => {
    console.log(data)
  return (
    <div className='ProfileLinks bg-[#f4fef8] rounded-2xl shadow mx-auto p-6 space-y-2'>
      <div className="heading font-bold text-lg">Links</div>
      <div className="details text-sm">social media links</div>
      <div className="links space-y-2 gap-4 mt-4">
        {data.map((link, index) =>{
            return (
              <div key={index} className="link flex items-center gap-2">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{link}</a>
              </div>
            ) 
        })}
      </div>
      
    </div>
  )
}

export default ProfileLinks
