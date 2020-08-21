import React, { PropTypes } from 'react';
import LeisureCentreTile from './LeisureCentreTile';

const LeisureCentreListView = ({ centres }) => {
    return (
        <div>
          <div className="container-body">
            <h2>The site where you booking your free time.</h2>
          </div>

          <div className="container-centre">
                {centres.map(centre =>
                    <LeisureCentreTile key={centre.id} centre={centre} />
                )}
          </div>
        </div>
    );
};

LeisureCentreListView.propTypes = {
    centres: PropTypes.array.isRequired
};

export default LeisureCentreListView;
