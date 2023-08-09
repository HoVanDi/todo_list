import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({ setActiveTab }) => {
  return (
    <div className="navigation">
      <div className="navigation-all">
        <div className="navigation-bar all">
        {/* <Link to="/">All</Link> */}
        <Link to="/" onClick={() => setActiveTab('all')}>All</Link>
        </div>
        <div className="all-line">
        </div>
      </div>
      <div className="navigation-active">
        <div className="navigation-bar active">
        {/* <Link to="/active">Active</Link> */}
        <Link to="/" onClick={() => setActiveTab('active')}>Active</Link>
        </div>
        <div className="active-line" />
      </div>
      <div className="navigation-completed">
        <div className="navigation-bar completed">
        {/* <Link to="/completed">Completed</Link> */}
        <Link to="/" onClick={() => setActiveTab('completed')}>Completed</Link>
        </div>
        <div className="completed-line" />
      </div>
    </div>
  )
}

export default Navigation
