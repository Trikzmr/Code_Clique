import React from 'react'

const TaskDetailsComponent = ({data}) => {


  return (
    <>       
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 ">
            <h2 className="text-lg font-semibold text-gray-700 border-l-4 border-blue-500 pl-2">
                Task Summary
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
                🔹 {data.Title}
            </h3>
            <div className="mt-2">
                <h4 className="font-semibold text-gray-700">Task Description :</h4>
                <p className="text-gray-600 mt-1">
                    {data.Description}
                </p>
            </div>
            <div className="mt-4 min-h-[300px]">
                <h4 className="font-semibold text-gray-700">Key Tasks :</h4>
                <ul className="list-decimal list-inside text-gray-600 mt-1 space-y-1 px-8">
                    {data.Keypoints && data.Keypoints.map((point, index) =>{
                        return (
                            <li key={index} className="text-gray-600">
                                {point}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <hr className="border-gray-300 my-4" />

            <div className="mt-6 grid grid-cols-3 gap-4 text-gray-700">
                <div>
                <p className="text-sm font-semibold">Assigned By</p>
                <p className="text-blue-600 font-medium">{data.Username}</p>
                </div>
                <div>
                <p className="text-sm font-semibold">Assigned Date</p>
                <p className="text-gray-600">{data.StartDate}</p>
                </div>
                <div>
                <p className="text-sm font-semibold">Due Date</p>
                <p className="text-gray-600">{data.EndDate}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskDetailsComponent
