import React from 'react';

const Searchbar = (props) => {
    return (
        <div>
            <input value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} type='search' placeholder='search for movies'></input>

        </div>
            
        
    );
};

export default Searchbar;