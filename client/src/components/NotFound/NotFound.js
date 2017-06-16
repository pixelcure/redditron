// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './NotFound.css';



// <NotFound />
export class NotFound extends Component {

  render() {

    return (
      <div className="bucket not-found">
        <div className="table">
          <div className="table__table--not-found">
              <h1>💩</h1>
              <h2>The page you are looking for can't be found.</h2>
              <Link to="/" title="Go Back">Go Back</Link>
          </div>
        </div>
      </div>
    );
  
  };

};

export default NotFound;
