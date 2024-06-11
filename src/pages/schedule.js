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
            { show: 'Morning Show', time: '4:00Am- 7:00 Am', host: 'Sharon & Imali' },
            { show: 'Headlines', time: '7:00 Am - 9:00 Am', host: 'Awadh & Chris' },
            { show: 'Youth Empowerment program', time: '9:00 Am - 11:30 Am', host: 'Beth & Abdirahman' },
            { show: 'swahili music', time: '11:30 Am - 1:00 Pm', host: 'Dj vic' },
            { show: 'swahilipot rumours of the week', time: '1:00 Pm - 4:00 Pm', host: 'Aaron & Rehema' },
            { show: 'Radio magazine', time: '1:00 Pm - 4:00 Pm', host: 'victor & Abdirahman' },
            
        ],
        Tuesday: [
            { show: 'Pambazuka', time: '4:00 Am - 6:00 Am', host: 'Sharon & Imali' },
            { show: 'Sports', time: '6:10 Am - 9:00 Am', host: 'Aaron & Rehema' },
            { show: 'Youth Empowerment program', time: '9:00 Am - 11:30 Am', host: 'Beth & Abdirahman' },
            { show: 'swahili music', time: '11:30 Am - 1:00 Pm', host: 'Dj vic' },
            { show: 'swahilipot rumours of the week', time: '1:00 Pm - 4:00 Pm', host: 'Aaron & Rehema' },
            { show: 'Soccer Updates', time: '1:00 Pm - 4:00 Pm', host: 'victor & Abdirahman' },
        ],
        Wednesday: [
          { show: 'Morning Show', time: '4:00Am- 7:00 Am', host: 'Sharon & Imali' },
          { show: 'Headlines', time: '7:00 Pm - 9:00 Pm', host: 'Awadh & Chris' },
          { show: 'Youth Empowerment program', time: '9:00 Am - 11:30 Am', host: 'Beth & Abdirahman' },
          { show: 'swahili music', time: '11:30 Am - 1:00 Pm', host: 'Dj vic' },
          { show: 'swahilipot rumours of the week', time: '1:00 Pm - 4:00 Pm', host: 'Aaron & Rehema' },
          { show: 'Radio magazine', time: '1:00 Pm - 4:00 Pm', host: 'victor & Abdirahman' },
        ],
        Thursday: [
            { show: 'Morning Show', time: '4:00 Am - 6:00 Am', host: 'Beth & Abdirahman' },
            { show: 'Rhumba', time: '6:10 Am - 9:00 Am', host: 'Awadh & Chris' },
            { show: 'Youth Empowerment program', time: '9:00 Am - 11:30 Am', host: 'Beth & Abdirahman' },
            { show: 'swahili music', time: '11:30 Am - 1:00 Pm', host: 'Dj vic' },
            { show: 'swahilipot rumours of the week', time: '1:00 Pm - 4:00 Pm', host: 'Aaron & Rehema' },
            { show: 'Soccer Updates', time: '1:00 Pm - 4:00 Pm', host: 'victor & Abdirahman' }, 
        ],
        Friday: [
            { show: 'Pambazuka', time: '4:00 Am - 6:00 Am', host: 'Sharon & Imali' },
            { show: 'Sports', time: '6:30 Am - 9:30 Am', host: 'Aaron & Rehema' },
            { show: 'Youth Empowerment program', time: '9:30 Am - 11:30 Am', host: 'Beth & Abdirahman' },
            { show: 'swahili music', time: '11:30 Am - 1:00 Pm', host: 'Dj vic' },
            { show: 'swahilipot rumours of the week', time: '1:00 Pm - 4:00 Pm', host: 'Aaron & Rehema' },
            { show: 'Radio magazine', time: '1:30 Pm - 4:00 Pm', host: 'victor & Abdirahman' },
        ],
        Saturday: [
            { show: 'Mseto Pwani', time: '6:00 Am - 7:00 Am', host: 'Amiandah & Joy' },
            { show: 'Documentaries', time: '8:00 Am - 11:00 Am', host: 'Beth & Abdirahman' },
            { show: 'Political Roundtable', time: '11:30 Am - 1:00 Pm', host: 'Dj vic' },
            { show: 'Radio Drama Hour', time: '1:00 Pm - 4:00 Pm', host: 'Aaron & Rehema' },
            { show: 'Sports talks radio', time: '4:30 Pm - 8:00 Pm', host: 'victor & Abdirahman' },
        ],
        Sunday: [
            { show: 'Morning Show', time: '4:00 Am - 7:00 Am', host: 'Mariam & Mellstroy' },
            { show: 'Rhumba', time: '7:00 Am - 9:00 Am', host: 'Awadh & Chris' },
            { show: 'Youth Empowerment program', time: '9:00 am - 11:30 am', host: 'Beth & Abdirahman' },
            { show: 'Sunday Jazz Brunch', time: '11:30 am - 1:00 pm', host: 'Dj vic' },
            { show: 'Health and wellness show', time: '1:00 pm - 4:00 pm', host: 'Aaron & Rehema' },
            { show: 'Sports talks radio', time: '4:30 pm - 7:00 pm', host: 'victor & Abdirahman' },
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
            <div className="container content-space-1">
                <label htmlFor="day-filter">Select Day:</label>
                <select id="day-filter" value={selectedDay} onChange={handleDayChange}>
                    {daysOfWeek.map((day, index) => (
                        <option key={index} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
            

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
