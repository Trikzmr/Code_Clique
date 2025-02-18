import React from 'react'

const TeamListCard = (props) => {
  return (
    <div className="TeamListCard max-w-[32vw] h-[12vw] bg-amber-600 m-8">
        {props.data}
    </div>
  )
}

export default TeamListCard
