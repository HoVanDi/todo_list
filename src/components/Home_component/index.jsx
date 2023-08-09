import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
const index = ({ setActiveTab }) => {
  return (
    <div className="navigation-all">
    <div className="navigation-bar all">
    <Link to="/" onClick={() => setActiveTab('all')}>All</Link>
    </div>
    <div className="all-line">
    </div>
  </div>
  )
}

export default index