const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-primary-dark border-top border-white-10">
        <div className="container">
          <div className="row align-items-md-end py-5">
            <div className="col-md">
              <p className="text-white mb-0">
                ©Swahilipot FM.{year} All rights reserved.
              </p>
            </div>
            <div className="col-md d-md-flex justify-content-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                    href="https://www.facebook.com/people/Swahilipot-Fm/100093582650835/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                    href="https://x.com/MombasaIFF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                    href="https://www.youtube.com/@swahilipothubfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-youtube" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                    href="https://www.instagram.com/swahilipotfm?igsh=MTljN2JjdXNrN3lk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color: #1a1a1a;
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
          list-style: none;
        }
        .footer .list-inline-item {
          margin: 0 10px;
        }
        .footer .btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: transparent;
          color: white;
          transition: background-color 0.3s;
        }
        .footer .btn:hover {
          background-color: #444;
        }
        .footer .btn i {
          font-size: 20px;
        }
        @media (min-width: 768px) {
          .footer .container {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};
export default Footer;