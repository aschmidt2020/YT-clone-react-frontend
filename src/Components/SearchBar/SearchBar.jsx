import React, { useState } from 'react';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        GET {base_URL}/search?part=snippet
                     &q=soccer
                     &key={YOUR_API_KEY}
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type='submit'>Search</button>
        </form>
    );
}
 
export default SearchBar;