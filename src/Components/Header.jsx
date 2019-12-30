import React from 'react';
import '../Styles/header.css'
import CardMembershipIcon from '@material-ui/icons/CardMembership';

const Header = () => {

    return (
        <div className="header">
            <CardMembershipIcon fontSize="large" style={{color: "white"}}/>
            <h1>  Create an ID Card  </h1>
            <CardMembershipIcon fontSize="large" style={{color: "white"}}/>
        </div>
    )
};

export default Header