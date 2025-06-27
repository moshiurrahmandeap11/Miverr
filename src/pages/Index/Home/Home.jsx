import React from 'react';
import Hero from '../Hero/Hero';
import CategoryGrid from '../../../components/CategoryGrid/CategoryGrid';
import PopularServices from '../../../components/PopularServices/PopularServices';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CategoryGrid></CategoryGrid>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;