import Header from "./header";
import Footer from "./footer";
import ContactSection from './Contactsection';
import React, { useState } from 'react';


const Schedule = () => {
    // State to hold the selected day filter option
    const [selectedDay, setSelectedDay] = useState('Monday');

    // List of days for the dropdown
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Sample schedule data
    const scheduleData = {
        Monday: [
            { show: 'Morning Show', time: '9:00 am - 11:00 am', host: 'Beth & Abdirahman' },
            { show: 'Rhumba', time: '9:00 pm - 11:00 pm', host: 'Awadh & Chris' },
        ],
        Tuesday: [
            { show: 'Pambazuka', time: '4:00 am - 9:00 am', host: 'Sharon & Imali' },
            { show: 'Sports', time: '9:00 am - 11:00 am', host: 'Aaron & Rehema' },
        ],
        Wednesday: [
            { show: 'Mseto Pwani', time: '1:00 pm - 4:00 pm', host: 'Amiandah & Joy' },
        ],
        Thursday: [
            { show: 'Morning Show', time: '9:00 am - 11:00 am', host: 'Beth & Abdirahman' },
            { show: 'Rhumba', time: '9:00 pm - 11:00 pm', host: 'Awadh & Chris' },
        ],
        Friday: [
            { show: 'Pambazuka', time: '4:00 am - 9:00 am', host: 'Sharon & Imali' },
            { show: 'Sports', time: '9:00 am - 11:00 am', host: 'Aaron & Rehema' },
        ],
        Saturday: [
            { show: 'Mseto Pwani', time: '1:00 pm - 4:00 pm', host: 'Amiandah & Joy' },
        ],
        Sunday: [
            { show: 'Morning Show', time: '9:00 am - 11:00 am', host: 'Beth & Abdirahman' },
            { show: 'Rhumba', time: '9:00 pm - 11:00 pm', host: 'Awadh & Chris' },
        ],
    };

    // Handle dropdown change
    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    // Get the schedule for the selected day
    const dailySchedule = scheduleData[selectedDay] || [];

    return (
        <>
<Header />
        <main className="content">
            {/* Dropdown menu for selecting day */}
            <div className="container content-space-1 mt-50">
                <label htmlFor="day-filter">Select Day:</label>
                <select id="day-filter" value={selectedDay} onChange={handleDayChange}>
                    {daysOfWeek.map((day, index) => (
                        <option key={index} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
            </div>

            {/* List Directory */}
            <div id="openingPositions" className="container content-space-1">
                <div className="bg-soft-white d-none d-sm-block p-4">
                    <div className="row">
                        <div className="col-sm-4">
                            <h6>Show</h6>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-2">
                            <h6>Time</h6>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                            <h6>Host</h6>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-2"></div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* List Striped */}
                <ul className="list-group list-group-lg list-group-flush list-group-striped">
                    {dailySchedule.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <div className="row">
                                <div className="col-sm-4 mb-2 mb-sm-0">
                                    <span className="h6">{item.show}</span>
                                </div>
                                {/* End Col */}
                                <div className="col-sm-2 mb-2 mb-sm-0">
                                    <span>{item.time}</span>
                                </div>
                                {/* End Col */}
                                <div className="col-sm-4 mb-2 mb-sm-0">
                                    <span>{item.host}</span>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </li>
                    ))}
                </ul>
                {/* End List Striped */}
            </div>
            {/* End List Directory */}
            </main>
            <ContactSection />
    <Footer />
    <style jsx>{`
        .content {
          padding-top: 100px; /* Adjust this value according to your header height */
          padding-bottom: 60px; /* Adjust this value according to your footer height */
          min-height: 100vh; /* Ensures the content area takes up at least the full height of the viewport */
          box-sizing: border-box;
        }
      `}</style>
        </>
        
    );
};

export default Schedule;
