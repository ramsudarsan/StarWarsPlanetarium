import React from 'react';
import './Searchbar.css'

const Searchbar = (props) => {
    return(
        <div>
            <input className='text-center' type='search' placeholder='Search for planets!' onChange={props.onChange}/>
        </div>
    );
}

export default Searchbar;