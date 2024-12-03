import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import HowItWorks from '../Components/HowItWorks';
import SomeProjects from '../Components/SomeProjects';
import ContactUs from '../Components/ContactUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-screen-xl mx-auto'>
        <About></About>
      </div>
      <div className=' py-20 '>
        <HowItWorks></HowItWorks>
      </div>
      <div className='my-20'>
        <SomeProjects></SomeProjects>
      </div>
      <div className=' py-20'>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;