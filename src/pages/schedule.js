import Header from "@/components/Header";
import Footer from "../components/Footer";
import ContactSection from "../pages/Contactsection";
import React, { useState } from 'react';
import styles from '../styles/Schedule.module.css';
import { Table, Button } from 'react-bootstrap';

function Schedule() {
    const [selectedTab, setSelectedTab] = useState('Monday');

    const tabs = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const scheduleData = {
        'Sunday': [
            { time: '08:00 - 12:00', title: 'Morning Gospel', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '12:00 - 16:00', title: 'Sunday Afternoon Mix', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Monday': [
            { time: '07:00 - 11:00', title: 'The Breakfast Vibe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00 - 16:00', title: 'Fresh Music Blue Vibe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Tuesday': [
            { time: '09:00 - 12:00', title: 'Tue-Morning Show', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '12:00 - 15:00', title: 'Lunchtime Mix', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Wednesday': [
            { time: '09:00 - 12:00', title: 'Wed-Morning Show', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '12:00 - 15:00', title: 'Lunchtime Mix', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Thursday': [
            { time: '09:00 - 12:00', title: 'Thur-Morning Show', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '12:00 - 15:00', title: 'Lunchtime Mix', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Friday': [
            { time: '09:00 - 12:00', title: 'Fri-Morning Show', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '12:00 - 15:00', title: 'Lunchtime Mix', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Saturday': [
            { time: '09:00 - 12:00', title: 'Sat-Morning Show', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '12:00 - 15:00', title: 'Lunchtime Mix', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
    };

    return (
        <section className="content-space-t-3">
            <Header />
            <main className="content">
                <div className={styles.container}>
                    <h1 className={styles.schedulecontent + ' bg-info'} style={{ textAlign: 'center' }}>Swahilipot FM Schedule</h1>
                    <div className={`${styles.scrollableTabs}`}>
                        <div className={styles.tabs}>
                            {tabs.map((tab) => (
                                <Button
                                    key={tab}
                                    variant={selectedTab === tab ? 'primary' : 'secondary'}
                                    onClick={() => handleTabClick(tab)}
                                    className={selectedTab === tab ? styles.active : ''}
                                >
                                    {tab}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.schedulecontent}>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Title</th>
                                    <th>Voiceover</th>
                                    <th>Presenter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleData[selectedTab].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.time}</td>
                                        <td>{item.title}</td>
                                        <td>{item.voiceover}</td>
                                        <td><img src={item.presenterImage} alt={`Presenter ${index}`} className={styles.presenterImage} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </main>
            <ContactSection />
            <Footer />
        </section>
    );
}

export default Schedule;
