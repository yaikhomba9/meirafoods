import React from "react";
import style from './css/Home.module.css';
import { Title, Meta } from "react-head";



const ImageSlider = React.lazy(() => import('../components/Home/ImageSlider'));
const Testimonial = React.lazy(() => import('../components/Home/Testimonial'));
const About = React.lazy(() => import('../components/Home/About'));
const Services = React.lazy(() => import('../components/Home/Services'));
const Footer = React.lazy(() => import('../components/Home/Footer'));
const Teams = React.lazy(() => import('../components/Home/Teams'));
const Contact = React.lazy(() => import('../components/Home/Contact'));
const Awards = React.lazy(()=> import('../components/Home/Awards'));
const FormContact = React.lazy(()=>import('../components/Home/ContactFrm'));
const LandingSection = React.lazy(()=>import('../components/Home/LandingSection'));
const TrendProdCSlider =React.lazy(()=>import('../components/Home/TrendProdSlider'));
const Vision = React.lazy(()=>import('../components/Home/Vision'));
const Galery= React.lazy(()=> import('../components/Home/Galery'));
const Home = ()=>{

    return(
        <>

        <Title>Meira Foods – Authentic Manipuri Pickles & North East Specialities Supply</Title>
        <Meta name="description" content="Looking for reliable Manipuri pickle suppliers? Choose Meira’s 
            authentic North East pickles with consistent quality, easy delivery and trusted nationwide fulfilment." />

        <h2  className={`${style.home}`}>Home</h2>

             {/* <ImageSlider /> */}
            <LandingSection /> 
            <Vision />
            <About />
            <TrendProdCSlider />
            <Services />
            <Testimonial />
            <Awards />
            <Teams />
            {/*  <FormContact /> */}
            <Galery />
            <Contact />
            <Footer />

        </>
    );
}

export default Home;