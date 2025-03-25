import React from 'react';
import './card.css';

const Form = () => {
  return (
    <div className="form-container">
        <h1 className='volunteer-heading'>Volunteering Form</h1>
      <form className="forms">
        <div className="form-group">
          <label className="form-label">First name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Last name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Date of birth</label>
          <input type="date" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Phone no.</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">City</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Country</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Position you want to apply for</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">NGO you are applying for</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <input 
            type="submit" 
            className="form-submit" 
            onClick={() => alert("Request sent")} 
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
