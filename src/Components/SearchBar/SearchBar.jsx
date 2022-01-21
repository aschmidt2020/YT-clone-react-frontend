import React, { useState } from 'react';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.universalSearch(searchTerm);
        setSearchTerm(''); //resets form
    }
    
    return (
            <form className='row' onSubmit={handleSubmit} style={{'marginLeft':'10em', 'width':'60%'}}>
                <div className='col-10' style={{'marginRight':'-1em'}}>
                    <input className='form-control' type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                </div>

                <div className='col-2'>
                    <button type="submit" className="btn btn-primary" data-toggle='popover' title='Search' data-content='Search' trigger='hover'><i className="bi bi-search"></i></button>
                </div>
            </form>
    );
}
 
export default SearchBar;
