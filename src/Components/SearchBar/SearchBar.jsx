import React, { useState } from 'react';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.universalSearch(searchTerm);
        setSearchTerm(''); //resets form
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type='submit'>Search</button>
        </form>
    );
}
 
export default SearchBar;