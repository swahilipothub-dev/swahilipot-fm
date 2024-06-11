import React from 'react';
import Header from "./header";
import Footer from "./footer";
import ContactSection from './Contactsection';

const About = () => (
    <>
    <Header />
    <main className="content">
      {/* Content */}
      <div className="container content-space-1 content-space-md-2">
        {/* Card */}
        <div className="card card-lg">
          {/* Header */}
  
          <div className="card-header bg-primary-dark position-relative overflow-hidden">
            <h1 className="card-title h2 text-white">Swahilipot FM</h1>
            <p className="card-text text-white">
              Frequency @ 91.7 fm (sauti ya vijana)
            </p>
            {/* Background Shapes */}
            <div
              className="position-absolute"
              style={{ top: "-6rem", left: "-6rem" }}
            >
              <img
                src="../assets/svg/components/shape-1-soft-light.svg"
                alt="SVG"
                width={500}
                style={{ width: "12rem" }}
              />
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "-6rem", right: "-7rem" }}
            >
              <img
                src="../assets/svg/components/shape-7-soft-light.svg"
                alt="SVG"
                width={250}
              />
            </div>
            {/* End Background Shapes */}
          </div>
          
          {/* End Header */}
          {/* Card Body */}
        </div>
      </div>
    {/* Description */}
    <div className="container content-space-1 content-space-md-3">
      <div className="w-lg-75 mx-lg-auto">
        <div className="row">
          <div className="col-sm-4 mb-5">
            {/* Info */}
            <div className="me-sm-3">
              <h3 className="text-primary">833%</h3>
              <p className="mb-0">increase in combined revenue for clients</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-5">
            {/* Info */}
            <div className="me-sm-3">
              <h3 className="text-primary">951%</h3>
              <p className="mb-0">increase in total client spend</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-5">
            {/* Info */}
            <div className="me-sm-3">
              <h3 className="text-primary">7 hours</h3>
              <p className="mb-0">
                saved per client per week on business management
              </p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
    {/* End Description */}
    </div>
    <div className="my-5">
          <img
            className="img-fluid"
            src="../assets/img/900x600/img1.jpg"
            alt="Image Description"
          />
        </div>
          <div className="card-body">
            <div className="mb-7">
              <h4>Introduction</h4>
              <p>
                At Swahilipot FM , we believe in the power of young voices. Our station is a dynamic , vibrant platform
                designed by youth , for youth , to inspire , entertain , and inform. We cater to a diverse audience ,
                bringing fresh perspectives on music , culture , social issues and more. 
              </p>
            </div>
            <div className="mb-7">
              <h4>Our Mission</h4>
              <p>
                Our mission at Swahilipot Radio Station is to empower young voices by providing a platform for creative 
                expression , education and community engagement. We strive to nature the talents of young individuals , 
                providing a space where they can express themselves freely and creatively. We aim to forster a sense of
                community , encourage dialogue on important issues , and celebrate the talents and achievements of youth
                from all backgrounds.
              </p> 
            </div>
            <div className="mb-7">
              <h4>Our Vision</h4>
              <p>
                Our vision is to empower the next generation's voice, our youth online radio station serves a vibrant hub
                where creativity, expression and innovation converge. Picture a digital stage where young talent shines,
                ideas florish and perspectives collide in a symphony of energy and enthusiasm. Through currated playlists,
                dynamic discussions, and interactive programming , we cultivate a community where every voice is heard,
                every story is valued,  and every dream is amplified. Together we shape the sioundtrack of tomorrow, 
                inspiring and empowering youth to make waves and spark change in their world.
              </p>
            </div>
            <div className="my-5">
          <img
            className="img-fluid"
            src="../assets/img/900x600/img2.jpg"
            alt="Image Description"
          />
        </div>
            <div className="mb-7">
              <h4>History and Background</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
              </p>
              <div className="mb-7">
              <h4>Team and Contributors</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
              </p>
              <div className="mb-7"></div>
              <h4>Programming</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
                </p>
            </div>
            <div className="mb-7"></div>
            <h4>Community Engagement</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
              </p>
            </div>
            <div className="mb-7">
            <h4>Values and Philosophy</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
                </p>
            </div>
            <div className="mb-7">
            <h4>How to Get Involved</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
                </p>
            </div>
            <div className="mb-7">
            <h4>Testimonials and Feedback</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
                </p>
            </div>
            <div className="my-5">
          <img
            className="img-fluid"
            src="../assets/img/900x600/img3.jpg"
            alt="Image Description"
          />
        </div>
            <div className="mb-7">
            <h4>Legal Information</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
                </p>
            </div>
            <div className="mb-7">
            <h4>Contact Information</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
                </p>
            </div>
            <div className="row">
            <div className="col-sm-6 mb-5 mb-sm-0">
              <div className="d-flex align-items-center">
                <h6 className="me-3 mb-0">Share:</h6>
                {/* List */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                      href="#"
                    >
                      <i className="bi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                      href="#"
                    >
                      <i className="bi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                      href="#"
                    >
                      <i className="bi-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                      href="#"
                    >
                      <i className="bi-linkedin" />
                    </a>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            
          </div>
          {/* End Card Body */}
        </div>
        {/* End Card */}
      </div>
      {/* End Content */}
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
      `}
      </style> 
    </>
  );
  
  export default About ;

