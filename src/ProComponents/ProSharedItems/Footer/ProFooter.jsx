import React from 'react';
import SubFooter from '../../../pages/sharedPages/Footer/SubFooter/SubFooter';
import ProMainFooter from "../Footer/ProMainFooter/ProMainFooter"

const ProFooter = () => {
    return (
        <div>
            <div className="divider"></div>
            <SubFooter></SubFooter>
            <ProMainFooter></ProMainFooter>
        </div>
    );
};

export default ProFooter;