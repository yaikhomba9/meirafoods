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


const Home = ()=>{

    return(
        <>
             <ImageSlider />
             <About />
             <Services />
             <Testimonial />
             <Awards />
             <Teams />
             <Contact />
             <Footer />

        </>
    );
}

export default Home;