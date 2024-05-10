import React from 'react';
import "./home.css"
import Banner from '../../components/Home/Banner/Banner';
import Links from '../../components/Home/Links/Links';
import AboutUs from '../../components/Home/AboutUs/AboutUs';
import Products from '../../components/Home/Products/Products';
import Services from '../../components/Home/Services/Services';
import ContactUs from '../../components/Home/ContactUs/ContactUs';


const Home = () => {
  return (
    <div className="Home">
        <Banner/>
        <Links/>
        <AboutUs/>
        <Products/>
        <Services/>
        <ContactUs/>
    </div>
  )
}

export default Home