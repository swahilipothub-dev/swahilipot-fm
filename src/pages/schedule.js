import React from 'react';

const Schedule = () => {
    return (
        <>
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
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span className="h6">Morning Show</span>
          </div>
          {/* End Col */}
          <div className="col-sm-2 mb-2 mb-sm-0">
            <span>9:00 am - 11:00 am</span>
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span>Beth & Owala</span>
          </div>
          {/* End Col */}
          
          {/* End Col */}
        </div>
        {/* End Row */}
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span className="h6">Rhumba</span>
          </div>
          {/* End Col */}
          <div className="col-sm-2 mb-2 mb-sm-0">
            <span>9:00 pm - 11:00 pm</span>
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span>Awadh & Chris</span>
          </div>
          {/* End Col */}
         
          {/* End Col */}
        </div>
        {/* End Row */}
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span className="h6">Pambazuka</span>
          </div>
          {/* End Col */}
          <div className="col-sm-2 mb-2 mb-sm-0">
            <span>4:00 am - 9:00 am</span>
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span>Sharon & Imali</span>
          </div>
          {/* End Col */}
          
          {/* End Col */}
        </div>
        {/* End Row */}
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span className="h6">Sports</span>
          </div>
          {/* End Col */}
          <div className="col-sm-2 mb-2 mb-sm-0">
            <span>9:00 am - 11:00 am </span>
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span>Aaron & Rehema</span>
          </div>
          {/* End Col */}
          
          {/* End Col */}
        </div>
        {/* End Row */}
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span className="h6">Mseto Pwani</span>
          </div>
          {/* End Col */}
          <div className="col-sm-2 mb-2 mb-sm-0">
            <span>1:00 pm - 4:00 pm </span>
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-2 mb-sm-0">
            <span>Amiandah & Joy</span>
          </div>
          {/* End Col */}
          
          {/* End Col */}
        </div>
        {/* End Row */}
      </li>
    </ul>
    {/* End List Striped */}
    
  </div>
  {/* End List Directory */}
</>

    );
};

export default Schedule;