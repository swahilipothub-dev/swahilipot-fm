const Footer = () => {

    // get current year
const year = new Date().getFullYear()
return (
    <>
    {/* ========== FOOTER ========== */}
    <footer className="bg-primary-dark border-top border-white-10">
        <div className="container">
            {/* End Row */}
            <div className="border-top border-white-10" />
            <div className="row align-items-md-end py-5">
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
                                <i className="bi-facebook" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                                href="https://twitter.com/swahilipothub"
                            >
                                <i className="bi-twitter" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                                href="https://www.youtube.com/@swahilipothubfoundation"
                            >
                                <i className="bi-youtube" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                                href="https://instagram.com/swahilipothub"
                            >
                                <i className="bi-instagram" />
                            </a>
                        </li>
                    </ul>
                    {/* End Socials */}
                </div>
            </div>
    </footer>
    {/* ========== END FOOTER ========== */}

</>
)
}

export default Footer
