import React from 'react';
import './cssLayout.css';

function cssLayout() {
  return (
    <React.Fragment>
      <div className="email-container">
        <div><h3>Date</h3></div>
        <div><h3>Subject</h3></div>
        <div><h3>From</h3></div>
        <div><h3>Attachments</h3></div>
        <div><h3>Type</h3></div>
      </div>
    </React.Fragment>
  );
}

export default cssLayout;