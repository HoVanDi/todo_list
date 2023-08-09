import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
const index = ({ setActiveTab }) => {
  return (
    <div className="navigation-active">
    <div className="navigation-bar active">
    {/* <Link to="/active">Active</Link> */}
    <Link to="/" onClick={() => setActiveTab('active')}>Active</Link>
    </div>
    <div className="active-line" />
  </div>
  )
}

export default index
