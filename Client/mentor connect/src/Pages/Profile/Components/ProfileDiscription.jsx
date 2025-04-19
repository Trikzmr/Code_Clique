import { data } from 'jquery'
import React from 'react'

const ProfileDiscription = ({data}) => {
  return (
    <div className='ProfileDiscription bg-[#f4fef8] rounded-2xl shadow mx-auto p-6 space-y-2'>
      <div className="heading font-bold text-lg">About</div>
      <div className="details text-sm">{data.Description}</div>
    </div>
  )
}

export default ProfileDiscription
