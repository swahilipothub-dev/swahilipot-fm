import React from 'react';
import Header from '@/pages/header';
import Footer from '@/pages/footer';

const Podcast = () => {
    return (
        <>
        <Header />
        <main className="content">

            {/* Add your content here */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 1: Introduction</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image2.jpg')} alt="Podcast Host 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 2: Guest Interview</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 3" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 3: Music Special</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image2.jpg')} alt="Podcast Host 4" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 4: Topic Discussion</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 5" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 5: Q&A Session</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image2.jpg')} alt="Podcast Host 6" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 6: Expert Panel</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 7" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 7: Industry Insights</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 8" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 8: Case Study</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image2.jpg')} alt="Podcast Host 9" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 9: Technology Trends</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 10" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 10: Guest Speaker</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image2.jpg')} alt="Podcast Host 11" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 11: Deep Dive</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 12" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 12: Success Stories</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image2.jpg')} alt="Podcast Host 13" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 13: Industry Challenges</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('/image1.jpg')} alt="Podcast Host 14" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 14: Best Practices</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div style={{ margin: '10px', padding: '10px' }}>
                    <img src={('./image2.jpg')} alt="Podcast Host 15" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px'}} />
                    <div>
                        <h3>Episode 15: Season Finale</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            </main>
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

export default Podcast;