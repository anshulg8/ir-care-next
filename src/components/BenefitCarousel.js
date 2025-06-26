import React from 'react';

const BenefitsCarousel = ({ benefits }) => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Key <span className="text-teal-600">Benefits</span>
            </h2>
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <div className="icon-wrapper">
                            {benefit.icon}
                        </div>
                        <h3><b>{benefit.title}</b></h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BenefitsCarousel;
