import React, { PropTypes } from 'react';
import LeisureCentreTile from './LeisureCentreTile';

const LeisureCentreListView = ({ centres }) => {
    return (
        <main>
          <section className="bg-onyx-700 text-white h-64">
            <div className="max-w-screen-xl mx-auto p-4">
              <h1 className="font-emphasis font-thin text-5xl w-1/2">
                The site where you can book your free time.
              </h1>
              <button className="btn bg-flame-800 text-white py-3 px-6">Get Started</button>
            </div>
          </section>

          <section className="max-w-screen-xl mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {centres.map(centre =>
                  <LeisureCentreTile key={centre.id} centre={centre} />
                )}
            </div>
          </section>
        </main>
    );
};

LeisureCentreListView.propTypes = {
    centres: PropTypes.array.isRequired
};

export default LeisureCentreListView;
