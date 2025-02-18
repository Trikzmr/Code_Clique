import React from 'react'

const TeamReqListCard = (props) => {
    const data = props.data;
  return (
    <div className='TeamReqListCard max-w-[32vw] h-[12vw] bg-amber-100 m-8'>
      {data.Username}
    </div>
  )
}

export default TeamReqListCard
