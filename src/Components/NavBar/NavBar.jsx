import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
    return (
        <div>
            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i className="bi bi-list"></i>
            </a>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Navigation Bar</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {props.user && <h1>Welcome {props.user.user_id}!</h1>}
                {!props.user && <h1>Please log-in.</h1>}
                <nav>
                <ul>
                    <li><SearchBar universalSearch={props.universalSearch}/></li>
                    <Link to='/'><li>Home/Search</li></Link>
                    <Link to='/video'><li>VideoPlayer</li></Link>
                    <Link to='/search'><li>Search Results</li></Link>
                </ul>
                </nav>
                {/* <div className="dropdown mt-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div> */}
                <div>
                    {!props.user && <div> <LoginForm login={props.login}/> <RegistrationForm register={props.register} /> </div>}
                    {props.user && <button onClick={props.logout}>Log Out</button>}
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default NavBar;