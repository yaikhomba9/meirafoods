import React, { useState, useEffect } from "react";
import style from '../css/LandingSection.module.css'
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Mali_700Bold } from '@expo-google-fonts/mali/700Bold';



const LandingSection =()=>{



 const handleRoute = (route) => {
    navigate(route);
  };

   const navigate = useNavigate();

   return (
    <>

    <div className={style.landingDiv}>
      {/* Hero Section */}
      <Container className={`text-center  ${style.containerDiv}`}>
        <h1 className={`fw-bold display-4`}>Bringing Local <br /> Goodness <br/> to Every Table</h1>
        {/* <p className="lead mt-3">
          Because great coffee is the start of something even greater.
        </p> */}
{/*         <div className="mt-4">
          <Button variant="warning" onClick={(e) => {handleRoute('/product')}} className={`me-3 px-4 py-2 ${style.custombtn}`}>Explore our Products</Button>
          <a href='#contact'><Button variant="outline-light" className="px-4 py-2">Our Locations</Button></a>
        </div> */}
          

        {/* <div className={`row justify-content-center ${style.imgDiv}`}>
            <div className={`col-lg-4  col-md-4 col-sm-4 col-xs-2  ${style.image}`}>
                <img src={`${process.env.PUBLIC_URL}/images/imgland1.png`}
                    alt="King Chilli Pickle"
                     className={`${style.imgfluid1} ${style.imgTiltLeft}`}/>
            </div>

            <div className={`col-lg-4  col-md-4 col-sm-4 col-xs-2  ${style.image}`}>
                <img src={`${process.env.PUBLIC_URL}/images/imgland2.png`}
                    alt="King Chilli Pickle"
                    className={style.imgfluid2}/>
            </div>

            <div className={`col-lg-4  col-md-4 col-sm-4 col-xs-2  ${style.image}`}>
                <img src={`${process.env.PUBLIC_URL}/images/imgland3.png`}
                    alt="King Chilli Pickle"
                    className={`${style.imgfluid3} ${style.imgTiltRight}`}/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex justify-content-center">
                <img src={`${process.env.PUBLIC_URL}/images/imgland2.png`}
                    alt="King Chilli Pickle"
                    className={`${style.imgfluid4}`}/>
            </div>
         </div> */}

        <div className={`row justify-content-center ${style.imgDiv}`}>
          <div className={`col-4 ${style.image}`}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/imgland1.webp`}
              alt="King Chilli Pickle"
              className={`${style.imgfluid} ${style.imgTiltLeft}`}
            />
          </div>

          <div className={`col-4 ${style.image}`}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/imgland2.webp`}
              alt="King Chilli Pickle"
              className={`${style.imgfluid} ${style.centerImage}`}
            />
          </div>

          <div className={`col-4 ${style.image}`}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/imgland3.webp`}
              alt="King Chilli Pickle"
              className={`${style.imgfluid} ${style.imgTiltRight}`}
            />
          </div>
        </div>


       {/*  <Row className="mt-5 justify-content-center">
          <Col xs={10} md={3} className="mb-4">
            <img
                    src={`${process.env.PUBLIC_URL}/images/imgland1.png`}
                    alt="King Chilli Pickle"
                     className={`${style.imgfluid1} ${style.imgTiltLeft}`}
                />
          </Col>
          <Col xs={10} md={3} className="mb-4">
            <img
                    src={`${process.env.PUBLIC_URL}/images/imgland2.png`}
                    alt="King Chilli Pickle"
                    className={style.imgfluid2}
                />
          </Col>
          <Col xs={10} md={3} className="mb-4">
           <img
                    src={`${process.env.PUBLIC_URL}/images/imgland3.png`}
                    alt="King Chilli Pickle"
                      className={`${style.imgfluid3} ${style.imgTiltRight}`}
                />
          </Col>
        </Row> */}
      </Container>
    </div>
    </>
   );

}

export default LandingSection;


 {/* <div className={`${style.LandingSectionDiv}`}>

           <div className={`container ${style.lndSecTxt}`}>
               <h1>Bringing Local<br/>Goodness to Every Table</h1>
           </div>

        </div> */}