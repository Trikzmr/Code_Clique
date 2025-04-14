import React from 'react'
import CreateTaskForm from './CreateTaskForm'
import TaskList from './TaskList'

const MyTask = (props) => {
  let id = props.id;
  return (
    <div className="MyTask">
      <CreateTaskForm/>
      {/* <div className="MyTaskTaskManager flex gap-6">
        <div className="MyTaskTaskList md:w-2/3">
          <TaskList id={id}/>
        </div>
        <div className="MyTaskCreateTask">
          <CreateTaskForm/>
        </div>
      </div> */}
    </div>
  )
}

export default MyTask
