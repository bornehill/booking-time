import React, {PropTypes} from 'react';

const LeisureCentreTile = ({centre}) => {
    return (
      <div className="card card-white flex flex-col">
        <div className="w-full h-48 bg-gray-400 rounded-t-sm">
        </div>
        <div className="px-4 py-2">
          <p className="text-2xl">{centre.name}</p>
          <p className=""><span className="font-bold">Dirección: </span>{centre.address}</p>
          <p className=""><span className="font-bold">Email: </span>{centre.email}</p>
          <p className=""><span className="font-bold">Telefono: </span>{centre.phone}</p>
          <p className=""><span className="font-bold">Giro: </span>{centre.line}</p>
          <div className="text-right">
            <button className="btn btn-icon rounded-full text-flame-700 uppercase">
              See more
              <i className="fa fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    );
};

LeisureCentreTile.propTypes = {
    centre: PropTypes.object.isRequired
};

export default LeisureCentreTile;
