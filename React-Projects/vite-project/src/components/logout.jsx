import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Logout = (props) => {
    const navigate = useNavigate()

    // logic will be executed at the time page loading or based on condition
    // given in [].
    // useEffect(()=>{//logic}, [])

    // Class Component - ComponentDidMount-executed at the time of page loading
    //                 - ComponentDidUpdate - exectuted when there is change in state
    //                     - ComponentWillUnmount - exectued at the time moving out of the page
    useEffect(() => {
        props.updateUserState(null);

    }, [])
    return (
        <div>
            <h1 className='text-center'>Logged out successfully!!!</h1>
            <small className='text-center'>Click <span><Link to="/login">here</Link> to login again.</span></small>
        </div>
    );
}

export default Logout;