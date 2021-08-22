import React from 'react'

import "./Header.css"

const Header = ({ pageTitle }) => {
    return (
        <div className="header">
            <h1 className="page-title">{pageTitle}</h1>
        </div>
    )
}

export default Header
