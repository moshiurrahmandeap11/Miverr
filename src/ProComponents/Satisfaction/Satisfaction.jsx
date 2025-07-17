import React from 'react';
import SatisfactionBanner from './SatisfactionBanner/SatisfactionBanner';
import ProSatisfactionReview from './ProSatisfactionReview/ProSatisfactionReview';
import SatisfactionChoose from './satisfactionChoose/SatisfactionChoose';
import SatisfactionMake from './SatisfactionMake/SatisfactionMake';

const Satisfaction = () => {
    return (
        <div>
            <SatisfactionBanner></SatisfactionBanner>
            <ProSatisfactionReview></ProSatisfactionReview>
            <SatisfactionChoose></SatisfactionChoose>
            <SatisfactionMake></SatisfactionMake>
        </div>
    );
};

export default Satisfaction;