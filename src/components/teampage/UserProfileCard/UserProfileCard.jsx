import React from "react";
import './UserProfileCard.css';
import profile_icon from '../Assests/Aditya.jpg';

const UserProfileCard = () => {
    return (
        <div className="upc">
            <div className="gradient"></div>
            <div className="profile-down">
                <img src={profile_icon} alt="" />
                <div className="profile-title">Aditya Chakraborty</div>
                <div className="profile-description">Secretary</div>
                <div className="profile-icons">
                    <a href="mailto:adityachk2002@gmail.com" className="icon" target="__blank">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/adityachk2002" className="icon" target="__blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/adityachk2002" className="icon" target="__blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default UserProfileCard;
