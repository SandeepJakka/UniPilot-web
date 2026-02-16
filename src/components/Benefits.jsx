import React from 'react';
import './Benefits.css';

const Benefits = () => {
    return (
        <section id="benefits" className="benefits-section">
            <div className="container">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="section-badge">Institutional Growth</span>
                    <h2 className="section-title">Maximum ROI. <span className="text-primary">Minimum Effort.</span></h2>
                </div>

                <div className="benefits-grid">
                    <div className="benefit-card animate-fade-up delay-100">
                        <div className="roi-stat">70%</div>
                        <h3 className="benefit-name">Operational Efficiency</h3>
                        <p className="benefit-info">Automated workflows reduce manual administrative load by over 70%, allowing staff to focus on student success.</p>
                    </div>

                    <div className="benefit-card animate-fade-up delay-200">
                        <div className="roi-stat">48h</div>
                        <h3 className="benefit-name">Result TAT</h3>
                        <p className="benefit-info">Unbeatable Turn-Around Time for exam result publishing. From script digitization to final marksheets in 48 hours.</p>
                    </div>

                    <div className="benefit-card animate-fade-up delay-300">
                        <div className="roi-stat">Zero</div>
                        <h3 className="benefit-name">Leakage Legacy</h3>
                        <p className="benefit-info">Eliminate financial leakage and exam integrity issues with our 100% transparent and audited engine.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
