import React from 'react'
import TaskList from '../TaskList/TaskList'
import TaskNumber from '../others/TaskNumber'
import Header from '../others/Header'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumber data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard;