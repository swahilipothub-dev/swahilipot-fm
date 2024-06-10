// components/Footer.js
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <>
        {/* ========== FOOTER ========== */}
        <footer className="footer bg-primary-dark border-top border-white-10">
          <div className="container">
            <div className="row align-items-md-end py-5">
              <div className="col-md">
                <p className="text-white mb-0">
                  © Space. {year} Swahilipot FM. All rights reserved.
                </p>
              </div>
              <div className="col-md d-md-flex justify-content-md-end">
                {/* Socials */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                      href="https://facebook.com/swahilipothub"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                      href="https://twitter.com/swahilipothub"
                    >
                      <i className="bi bi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                      href="https://www.youtube.com/@swahilipothubfoundation"
                    >
                      <i className="bi bi-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                      href="https://instagram.com/swahilipothub"
                    >
                      <i className="bi bi-instagram" />
                    </a>
                  </li>
                </ul>
                {/* End Socials */}
              </div>
            </div>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </>
    );
  };
 <style jsx>{`
.footer {
  background-color: #1a1a1a; /* Adjust this to your preferred color */
  color: white;
  padding: 20px 0;
  width: 100%;
}

.footer .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.footer .row {
  width: 100%;
}

.footer .list-inline {
  display: flex;
  justify-content: center;
  padding: 0;
}

.footer .list-inline-item {
  margin: 0 10px;
}

@media (min-width: 768px) {
  .footer .container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
    
}
`}</style>
  
  export default Footer;
  