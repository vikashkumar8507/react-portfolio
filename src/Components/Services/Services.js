import React from 'react';
import "./Services.css";

const Services = () => {
    return (
        <div className='services-container'>
            <div className="services-list-container">
                {/* desc */}
                <div className="services-desc-container">
                    <h1>
                        My Awesome <span>Services</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, architecto autem molestiae aliquid inventore cupiditate adipisci, tempora illo ipsa corrupti velit obcaecati eos odio praesentium enim optio. Asperiores, deserunt. Corrupti repudiandae at minus quo ullam quis amet quam veniam accusamus!
                    </p>
                    <button>Hire Me</button>
                </div>

                {/* item */}

                <div className="service-item-container">
                    <div className="services-item">
                        <i className='fa-solid fa-code'></i>
                        <div className="item-desc">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos in provident tempora repellat culpa aspernatur nobis sequi est, ea tenetur? Corrupti dignissimos expedita illo. Maiores neque, culpa recusandae aut natus eum vel, fuga distinctio veniam assumenda ipsum. Repellat, animi necessitatibus natus, provident alias est rem tenetur quis harum ullam deserunt.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <i className='fa-solid fa-desktop'></i>
                        <div className="item-desc">
                            <h3>UI/UX Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos in provident tempora repellat culpa aspernatur nobis sequi est, ea tenetur? Corrupti dignissimos expedita illo. Maiores neque, culpa recusandae aut natus eum vel, fuga distinctio veniam assumenda ipsum. Repellat, animi necessitatibus natus, provident alias est rem tenetur quis harum ullam deserunt.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <i className='fa-solid fa-cloud'></i>
                        <div className="item-desc">
                            <h3>Cloud Computing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos in provident tempora repellat culpa aspernatur nobis sequi est, ea tenetur? Corrupti dignissimos expedita illo. Maiores neque, culpa recusandae aut natus eum vel, fuga distinctio veniam assumenda ipsum. Repellat, animi necessitatibus natus, provident alias est rem tenetur quis harum ullam deserunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services