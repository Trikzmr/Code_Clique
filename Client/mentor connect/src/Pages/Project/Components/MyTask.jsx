import React from 'react'
import CreateTaskForm from './CreateTaskForm'

const MyTask = () => {
  return (
    <div className="MyTask">
      <div className="MyTaskAssigned"></div>
      <div className="MyTaskTaskManager">
        <div className="MyTaskTaskList"></div>
        <div className="MyTaskCreateTask">
          <CreateTaskForm/>
        </div>
      </div>
    </div>
  )
}

export default MyTask
