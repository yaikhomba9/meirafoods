import React from "react";
import style from './css/Home.module.css';



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