import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TaskCard from './TaskCard';


const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    let projectid = useParams().id;

    const getTaskList = async() => {
        const container = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ProjectId: projectid }),
        }
        try {
            const res = await fetch('http://localhost:3000/api/FindTaskByProjectId', container);
            const data = await res.json();
            setTaskList(data);
        } catch (error) {
            console.log(error);
        }
    }

    const onload = () => {
        getTaskList();
    }

    const appendTaskList = (task) => {

        return(
            <TaskCard data = {task}/>
        )
    }

    useEffect(onload, []);
  return (
    <div>
      <h1 className='text-2xl font-semibold text-gray-800 mb-3'>Task List</h1>
      <ul>
        {taskList.map(appendTaskList)}
      </ul>
    </div>
  )
}

export default TaskList
