import React, { useEffect } from 'react'

const TeamReqListCard = (props) => {


  const data = props.data;

  const getuserdata = () => {
    const Username = data.Username;

    try {
      
    } catch (error) {
      
    }
  }

  const onload = () => {
    getuserdata();
  }

  useEffect(onload, []);

  console.log(data);
  return (
    <div className='TeamReqListCard w-[100%] p-4 bg-[#f1f2f7] rounded-xl'>
      <div className="TeamReqListCardTop">
        {data.Username}
      </div>
      <hr/>
      <div className="TeamReqListCardBody">

      </div>
      <div className="TeamReqListCardFooter">

      </div>
    </div>
  )
}

export default TeamReqListCard
