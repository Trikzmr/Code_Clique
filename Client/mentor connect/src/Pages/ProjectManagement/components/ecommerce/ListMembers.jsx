import React from 'react'

const ListMembers = (props) => {
    let data = props.data;
    data= [1, 2, 3, 4];

    const appendList = (member) => {
        return(
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center ml-[-10px]">
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
