import React from 'react';

const Dashboard = () => {
    return (
        <div className='row'>
            <h1>Dashboard</h1>
            <div className='col-xs-12 col-md-3'>
                <p>SideBar</p>
            </div>
            <div className='col-xs-12 col-md-9'>
                Content Area
            </div>
        </div>
    );
}

export default Dashboard;