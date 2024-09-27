import React from 'react';

const TourismInfoSection = () => {
    return (
        <section className="tourism-info">
            <div className="image-grid">
                <img src="/images/aboutione.png" alt="Scenic Image 1" />
                <img src="/images/aboutitwo.png" alt="Scenic Image 2" />
                <img src="/images/aboutithree.png" alt="Scenic Image 3" />
                <img src="/images/aboutifour.png" alt="Scenic Image 4" />
            </div>
            <div className="info-text">
                <h2>We have been in the tourism industry for more than 20 years</h2>
                <p>Leave your guidebooks at home and dive into the local cultures that make each destination so special. We’ll connect you with our exclusive experiences.</p>
                <ul>
                    <li><strong>Book With Confidence</strong> - Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.</li>
                    <li><strong>Freedom To Discover, Confidence To Explore</strong> - Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.</li>
                </ul>
            </div>
        </section>
    );
};

export default TourismInfoSection;
