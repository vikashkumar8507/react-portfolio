import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright">
                <p class="fa-solid fa-copyright">
                    2023 Vikash Kumar. All right reserved
                </p>
            </div>

            <ul className='footer-social-media'>
                <li>
                    <a href="">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-youtube'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer