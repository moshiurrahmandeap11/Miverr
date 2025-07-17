import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SatisfactionBanner from './SatisfactionBanner/SatisfactionBanner';
import ProSatisfactionReview from './ProSatisfactionReview/ProSatisfactionReview';
import SatisfactionChoose from './satisfactionChoose/SatisfactionChoose';
import SatisfactionMake from './SatisfactionMake/SatisfactionMake';
import SatisfactionBannerSecond from './SatisfactionBannerSecond/SatisfactionBannerSecond';

const Satisfaction = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            offset: 100,
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-up">
                <SatisfactionBanner />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <ProSatisfactionReview />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <SatisfactionChoose />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <SatisfactionMake />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
                <SatisfactionBannerSecond />
            </div>
        </div>
    );
};

export default Satisfaction;
