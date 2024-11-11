import React from 'react'
import Header from '../others/Header'
import CreateTaskList from '../others/CreateTaskList'
import AllTaskList from '../others/AllTaskList'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            {/* <Header changeUser={props.changeUser} /> */}
            <Header changeUser={props.changeUser} />
            {/* <CreateTaskList /> */}
            <CreateTaskList />
            <AllTaskList />
        </div>
    )
}

export default AdminDashboard