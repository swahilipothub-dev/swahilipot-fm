// import style from '../styles/Footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-info border-top border-white-10">
        <div className="container">
          <div className="row align-items-md-end py-5">
            <div className="col-md">
              <p className="text-white mb-0">
                Swahilipot FM {year}. All rights reserved.
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
      
    </>
  );
};
export default Footer;