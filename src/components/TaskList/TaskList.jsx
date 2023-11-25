import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import "./taskList.css"
const TaskList = ({tasks, deleteTask}) => {
  return (
    
    <div>
   
   
        {
            tasks.length == 0
            ? <h2>Sin Tareas en el día </h2>
            : tasks.map(task =>(
                <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
            ))
        }
    </div>
  )
}

export default TaskList