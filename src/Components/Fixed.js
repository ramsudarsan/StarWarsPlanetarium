import React from 'react';
import './Fixed.css';

const Fixed = (props) => {
    return (
            <div className='flex'>
                {props.children}
            </div>
    );
}

export default Fixed;