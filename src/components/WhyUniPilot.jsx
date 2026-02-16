import React from 'react';
import './WhyUniPilot.css';

const WhyUniPilot = () => {
    return (
        <section id="why-unipilot" className="why-section">
            <div className="container">
                <div className="why-grid">
                    <div className="why-content animate-fade-up">
                        <span className="section-badge">The UniPilot Advantage</span>
                        <h2 className="section-title">Built for the Scale of <span className="text-primary">Today's University.</span></h2>
                        <p className="section-desc">We don't just provide software. We provide the resilience required to manage 100k+ students without breaking a sweat.</p>

                        <div className="benefit-list">
                            <div className="benefit-item">
                                <div className="benefit-icon">🛡️</div>
                                <div>
                                    <h4>Enterprise Resilience</h4>
                                    <p>Battle-tested during peak exam traffic. Our architecture handles 10,000+ concurrent users with sub-second response times.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🏢</div>
                                <div>
                                    <h4>100% Data Ownership</h4>
                                    <p>Your university, your data. We offer flexible deployment models—cloud-native or on-premise—ensuring absolute sovereign control.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">⚡</div>
                                <div>
                                    <h4>Implementation Speed</h4>
                                    <p>Go live in weeks, not years. Our modular approach allows for phased rollouts that don't disrupt your current semester.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="why-visual animate-fade-up delay-300">
                        <div className="stats-board glass-morphism">
                            <div className="stats-header">Performance Metrics</div>
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <span className="stat-value">99.9%</span>
                                    <span className="stat-label">Uptime SLA</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-value">137+</span>
                                    <span className="stat-label">Modules</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-value">20+</span>
                                    <span className="stat-label">Features</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-value">0</span>
                                    <span className="stat-label">Data Leaks</span>
                                </div>
                            </div>
                            <div className="pulse-network">
                                {/* Visual representation of a network/connection */}
                                <div className="network-bg"></div>
                                <div className="scan-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUniPilot;
