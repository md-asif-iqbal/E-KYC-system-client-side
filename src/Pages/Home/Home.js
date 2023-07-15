import React from 'react';
import Banner from './Banner/Banner';
import VerifiyDetails from './verifyDetails/VerifiyDetails';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    return (
      <div>
        <Banner />
        <VerifiyDetails />
        <Footer/>
      </div>
    );
};

export default Home;