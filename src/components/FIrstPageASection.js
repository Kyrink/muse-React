// FirstPageSection.js
import React from 'react';

const FirstPageSection = ({ scrollToSection }) => {
    return (
        <section className="flex justify-between items-center p-10 bg-cover" style={{ backgroundImage: 'url(/background-image.png)' }}>
            <div>
                <h1>Be Inspired. Be Amused. Be in Portland</h1>
                <p>Explore, Discover, Contribute — Portland's art scenes unified.</p>
                <button onClick={() => scrollToSection('howItWorks')}>How it Works</button>
            </div>
            <img
                className="object-cover"
                alt="Portland art scene"
                src="/rectangle-1@2x.png"
            />
            {/* Add more content or styling as needed */}
        </section>
    );
};

export default FirstPageSection;
