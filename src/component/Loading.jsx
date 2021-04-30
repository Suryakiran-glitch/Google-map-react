import React from 'react'
import Spinner from '../assets/Hourglass.gif'

const Loading = () => {
    return (
        <div style={{textAlign : 'center',display : 'flex',flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center'}}>
            <img src={Spinner} className="w-24 mt-20" alt="Loading"/>
        </div>
    )
}

export default Loading
