import React from "react";
import './UserProfileCard.css';
import profile_icon from '../Assests/samruddhi.jpg'
const UserProfileCard = () => {

    return (

        <div className="upc">

            <div className="gradient"></div>
            <div className="profile-down">

                <img src={profile_icon} alt="" />
                <div className="profile-title">Samruddhi Dutta</div>
                <div className="profile-description">Secretary</div>
                <div className="profile-icons">
                    <a href="mailto:skdutta_b21@pe.vjti.ac.in" className="icon" target="__blank">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/samruddhi-dutta-08320524a/" className="icon" target="__blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/samruddhidutta" className="icon" target="__blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

        </div>
    )



}
export default UserProfileCard