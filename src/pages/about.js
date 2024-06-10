import React from 'react';
import Header from "./header";
import Footer from "./footer";

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
              <h4>Privacy and copyright protection</h4>
              <p>
                Space's privacy policies explain how we treat your personal data
                and protect your privacy when you use our Services. By using our
                Services, you agree that Space can use such data in accordance
                with our privacy policies.
              </p>
              <p>
                We respond to notices of alleged copyright infringement and
                terminate accounts of repeat infringers according to the process
                set out in the U.S. Digital Millennium Copyright Act.
              </p>
              <p>
                We provide information to help copyright holders manage their
                intellectual property online. If you think somebody is violating
                your copyrights and want to notify us, you can find information
                about submitting notices and Space's policy about responding to
                notices in our Help Center.
              </p>
            </div>
            <div className="mb-7">
              <h4>Your content in our services</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
              </p>
              <p>
                When you upload, submit, store, send or receive content to or
                through our Services, you give Space (and those we work with) a
                worldwide license to use, host, store, reproduce, modify, create
                derivative works (such as those resulting from translations,
                adaptations or other changes we make so that your content works
                better with our Services), communicate, publish, publicly perform,
                publicly display and distribute such content. The rights you grant
                in this license are for the limited purpose of operating,
                promoting, and improving our Services, and to develop new ones.
                This license continues even if you stop using our Services (for
                example, for a business listing you have added to Space Maps).
                Some Services may offer you ways to access and remove content that
                has been provided to that Service. Also, in some of our Services,
                there are terms or settings that narrow the scope of our use of
                the content submitted in those Services. Make sure you have the
                necessary rights to grant us this license for any content that you
                submit to our Services.
              </p>
            </div>
          </div>
          {/* End Card Body */}
        </div>
        {/* End Card */}
      </div>
      {/* End Content */}
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
  )
  
  export default About ;

