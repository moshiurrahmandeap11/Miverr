import React from 'react';

import ProBusinessBanner from './ProBusinessBanner/ProBusinessBanner';
import ProBusinessHires from './ProBusinessHires/ProBusinessHires';
import ProBusinessRedeem from './ProBusinessRedeem/ProBusinessRedeem';
import ProBusinessFaq from './ProBusinessFaq/ProBusinessFaq';
import ProBusinessSolutionsSecond from './ProBusinessSolutionsSecond/ProBusinessSolutionsSecond';

const ProBusinessSolutions = () => {
  return (
    <div>
      <div data-aos="fade-up">
        <ProBusinessBanner />
      </div>

      <div data-aos="fade-up">
        <ProBusinessHires />
      </div>

      <div data-aos="fade-up">
        <ProBusinessRedeem />
      </div>

      <div data-aos="fade-up">
        <ProBusinessFaq />
      </div>

      <div data-aos="fade-up">
        <ProBusinessSolutionsSecond />
      </div>
    </div>
  );
};

export default ProBusinessSolutions;
