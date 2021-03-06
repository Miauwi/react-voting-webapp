import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Toolbar from 'components/UI/Toolbar';
import AuthenticationDialogs from 'components/UI/SignIn';
import UserUI from 'components/UI/LoggedIn';


const Header = ({ authenticated, username, handleClear, handleLogOut, location}) => {  {
    
    let children =  !authenticated ? (<AuthenticationDialogs handleClear={handleClear} />) :  (<UserUI  username={username} handleLogOut={handleLogOut}/>);
    console.log("header see  "+location);
    console.dir(location);
    let logo = <Link to="/">YouLogo</Link>;
    return (
        <Toolbar
        logo={logo}
        >
        {children}
        </Toolbar>
  		);
  }
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  username: PropTypes.string,
  handleLogOut: PropTypes.func,
  handleClear: PropTypes.func
};

export default Header;



