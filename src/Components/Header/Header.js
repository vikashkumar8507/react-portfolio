import React from 'react';
import "./Header.css";
import Typical from 'react-typical';
import profileImg from "../../assets/profile.png";

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-list-container">
        {/* {header content} */}
        <div className='header-content'>
          <h1>Hi 🌴 Am</h1>
          <h2 className='fullname'>Vikash Kumar</h2>
          <h2>
            I'm a {""}
            <Typical
              steps={[
                "Full Stack Developer 🫶🏼",
                1000,
                "MERN stack Developer 🤖", 1000,
                "Front-end Developer ✍🏼", 1000,
                "Back-end Developer 🪢", 1000,
              ]} loop={Infinity}
              wrapper='b' />
          </h2>
          <p>Anim id adipisicing dolore labore eiusmod adipisicing anim in elit adipisicing.Incididunt aliquip labore reprehenderit id cupidatat cillum nulla magna fugiat qui quis eufdssd skois sksli alknioi</p>

          <div className='header-payment-container'>
            <button>Hire Me</button>
            <i className='fa-brands fa-paypal'></i>
            <i className='fa-brands fa-cc-visa'></i>
            <i className='fa-brands fa-cc-mastercard'></i>
            <i className='fa-brands fa-cc-amex'></i>
          </div>
        </div>
        {/* image container */}
        <div className="profile-img-container">
          <img src={profileImg} alt="" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>

        </div>
      </div>
    </div>
  )
}

export default Header