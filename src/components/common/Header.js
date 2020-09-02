import React, { PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
      <header className="flex items-center justify-between p-4 bg-light">
        <p className="font-emphasis">
          <span className="text-xl text-flame-600">Booking</span>
          <span className="font-light text-2xl text-onyx-700">Time</span>
        </p>
        <Link to={'/login'} className="btn btn-icon btn-secondary btn-outline rounded-full">
            <i className="fa fa-user-circle mr-2"></i>
            <span>Login</span>
        </Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </header>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
