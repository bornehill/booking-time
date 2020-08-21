import React, { PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
      <div className="container-header">
        <h1>Booking Time</h1>
        <div className="align-self-center">
            <a href="#">
                <i className="fa fa-user-circle fa-2x"></i>
                Login
            </a>
        </div>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </div>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
