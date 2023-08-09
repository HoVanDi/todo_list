import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
const index = ({ setActiveTab }) => {
  return (
    <div className="navigation-completed">
    <div className="navigation-bar completed">
    {/* <Link to="/completed">Completed</Link> */}
    <Link to="/" onClick={() => setActiveTab('completed')}>Completed</Link>
    </div>
    <div className="completed-line" />
  </div>
  )
}

export default index
