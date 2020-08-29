import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const LeisureCentreTile = ({centre, showButton = true, customClass}) => {
    let wrapperClass = "card card-white";
    if(!wrapperClass)
    {
      wrapperClass += " flex flex-col";
    }
    else
    {
      wrapperClass += " " + customClass;
    }

    return (
      <div className={wrapperClass}>
        <div className="w-full h-48 bg-gray-400 rounded-t-sm">
        </div>
        <div className="px-4 py-2">
          <p className="text-2xl">{centre.name}</p>
          <p className=""><span className="font-bold">Dirección: </span>{centre.address}</p>
          <p className=""><span className="font-bold">Email: </span>{centre.email}</p>
          <p className=""><span className="font-bold">Telefono: </span>{centre.phone}</p>
          <p className=""><span className="font-bold">Giro: </span>{centre.line}</p>
          {showButton &&
            <div className="text-right" >
              <Link to={'/schedule/'+ centre.id} className="btn btn-icon rounded-full text-flame-700 uppercase">
                See more
                <i className="fa fa-arrow-right ml-2"></i>
              </Link>
            </div>
          }
        </div>
      </div>
    );
};

LeisureCentreTile.propTypes = {
    centre: PropTypes.object.isRequired,
    showButton: PropTypes.bool,
    customClass: PropTypes.string
};

export default LeisureCentreTile;
