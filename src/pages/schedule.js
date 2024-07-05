import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from './Contactsection';
import React, { useState } from 'react';
import styles from '../styles/Schedule.module.css';
import FrequencyDetails from '../components/FrequencyDetails';

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

    return (
        

        <section className="content-space-t-1">
            <Header />
            <main className="content" >
                <div><FrequencyDetails /></div>
                <div className={styles.container}>
                    <h1 className={styles.schedulecontent + ' bg-info'} style={{ textAlign: 'center' }}> Swahilipot FM Schedule
                    </h1>
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={selectedTab === tab ? styles.active : ''}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className={styles.schedulecontent}>
                        {/* Content for the selected tab */}
                        {selectedTab === 'Monday' && (
                            <div style={{backgroundImage: 'radial-gradient(circle, #ff8787 27%, rgba(237, 110, 160, 0.95) 46%, rgba(236, 140, 105, 0.97) 65%)'}}>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 1" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>Voiceover by: <br /> SWAHILIPOTFM</span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: SWAHILIPOTFM<br /> 
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                       
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                      
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Monday */}
                            </div>
                        )}

                        {/* Add content for Tuesday */}
                        {selectedTab === 'Tuesday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 4" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Tuesday */}
                            </div>
                        )}

                        {/* Add content for Wednesday */}
                        {selectedTab === 'Wednesday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 5" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Wednesday */}
                            </div>
                        )}
                        {/* Add content for Thursday */}
                        {selectedTab === 'Thursday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 7" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Thursday */}
                            </div>
                        )}

                        {/* Add content for Friday */}
                        {selectedTab === 'Friday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 10" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Friday */}
                            </div>
                        )}

                        {/* Add content for Saturday */}
                        {selectedTab === 'Saturday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 11" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>

                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Saturday */}
                            </div>
                        )}


                        {/* Add content for Sunday */}
                        {selectedTab === 'Sunday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">07:00 - 11:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">11:00 - 16:00</span>
                                    <span className="title">Fresh Music Blue Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> SWAHILIPOTFM
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                    </span>
                                </div>
                                {/* Add more schedule items for Sunday */}
                            </div>
                        )}
                    </div>
                </div>
            </main>


            <ContactSection />
            <Footer />
            
        </section>
    );
}

export default Schedule;



