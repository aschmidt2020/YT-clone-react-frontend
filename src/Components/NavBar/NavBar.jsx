import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../Images/YouTubeCloneLogo.png'

const NavBar = (props) => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand" ><a data-toggle='popover' title='Home' data-content='Home' trigger='hover'>
                <div className='row'>
                    <div className='col-4'>
                         <img src={logo} style={{'height':'40px', 'width':'40px','marginTop':'0.4em'}} />
                    </div>

                    <div className='col-8'>
                        <h4 style={{'marginBottom':'0em'}}>OurTube</h4>
                        {props.user && <span className='navbar-welcome-text'>Welcome {props.userInfo.username}!</span>}
                        {!props.user && <span className='navbar-welcome-text'>Please log-in.</span>}
                    </div>
                </div>

            </a>
            </Link>
                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{'width':'100%'}}>
                <SearchBar universalSearch={props.universalSearch}/>
                {!props.user && <span> <LoginForm login={props.login}/> <RegistrationForm register={props.register}/> </span>}
                {props.user && <button type='button' className='btn btn-outline-danger' onClick={props.logout}>Log Out</button>}
            </ul>
            </div>
        </div>
        </nav>
        </div>
    );
}
 
export default NavBar;

//<Link to='/register'>Register</Link>
//<RegistrationForm register={props.register}/>