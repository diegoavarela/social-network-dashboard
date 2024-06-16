import React from "react";
import '../stylesheets/header.css';

function Header() {
    return (
        <div className="header">
            <h1>Social Media Dashboard</h1>
            <h4>Total Followers: 23,004</h4>
            <hr />
            <div className="dark-mode">
                <h4>Dark Mode</h4>
                <i class="bi bi-toggle-on"></i>
            </div>
        </div>
    )
}

export default Header;