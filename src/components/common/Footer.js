import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-onyx-800">
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-4">
                <section>
                    <p className="font-emphasis">
                        <span className="text-xl text-flame-500">Booking</span>
                        <span className="font-light text-2xl text-white">Time</span>
                    </p>

                </section>
                <section className="text-white">
                    <p className="uppercase font-bold mb-3">Section title here</p>
                    <ul>
                        <li>Link to page</li>
                        <li>Link to page</li>
                        <li>Link to page</li>
                        <li>Link to page</li>
                    </ul>
                </section>
                <section className="text-white">
                    <p className="uppercase font-bold mb-3">Section title here</p>
                    <ul>
                        <li>Link to page</li>
                        <li>Link to page</li>
                        <li>Link to page</li>
                        <li>Link to page</li>
                    </ul>
                </section>
                <section className="text-white">
                    <p className="uppercase font-bold mb-3">Section title here</p>
                    <ul>
                        <li>Link to page</li>
                        <li>Link to page</li>
                        <li>Link to page</li>
                        <li>Link to page</li>
                    </ul>
                </section>
            </div>
          </div>
        <div className="bg-onyx-900 py-3 text-white text-center">BookingTime&trade; Copyright 2020</div>
      </footer>
    );
};

export default Footer;
