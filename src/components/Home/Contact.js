import React, {useState} from 'react';
import styles from '../css/Contact.module.css';
import { Col } from 'react-bootstrap';
import { MapContainer, TileLayer, useMap, Marker, Popup  } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const Contact=()=>{


     return (
     
     <>

       <div id="contact" className={styles.contactBodyDiv}>
              <div className={`container`}>
                  <div className={styles.contactMainTitle}>
                    <h2>Get in touch</h2>
                 </div>

                 <div className='row'>
                    <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${styles.contactmp}`}>
                       <div className={`container ${styles.contactMap}`}>
                        <iframe  className={`${styles.mapCon}`} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d871.3603437263974!2d93.9445487695712!3d24.78799351616638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzE2LjgiTiA5M8KwNTYnNDIuNyJF!5e1!3m2!1sen!2sin!4v1754821695345!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       </div>
                    </div>
                    <div className={`col-lg-6 col-md-12 col-sm-12 col-xs-12`}>
                       <div className={`container ${styles.contDetails} ${styles.animatedGradient}`}>
                         <div className={`${styles.innerDiv}`}>
                          <div class="col-lg-12 col-md-12 col-sm-12 ">
                              <h6 class="text-uppercase mb-4 font-weight-bold"><b>Contact</b></h6>
                              <p  className={styles.txtCatgry}><FontAwesomeIcon  icon={faHome}/>  Brahmapur, Aribam Leikai, Harinath Road, near via, Moirangkhom Loklaobung, Thong, Imphal, Manipur 795001</p>
                              <p  className={styles.txtCatgry}><FontAwesomeIcon  icon={faEnvelope}/> ch.ak.sharma.meirafoods@gmail.com / meirafoods01@gmail.com</p>
                              <p  className={styles.txtCatgry}><FontAwesomeIcon  icon={faPhone}/> +91 98634 13592</p>
                              <p  className={styles.txtCatgry}><FontAwesomeIcon  icon={faWhatsapp}/> +91 98634 13592  / +91 98622 85324</p>
                           </div>
                         </div>

                       </div>
                    </div>
                 </div>
                 <div className='row'>
                   <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <div className={`row d-flex justify-content-center ${styles.socialDiv}`}>
                        <h6 className={`mb-3 ${styles.otherbrandText}`}><b><u>Our products are available on:</u></b></h6>
                          <div className="d-flex justify-content-center gap-4 flex-wrap">
                              <a  href="https://www.amazon.in" target="_blank" rel="noopener noreferrer">
                                 <img className={styles.otherbrandLogo} src={`${process.env.PUBLIC_URL}/images/amazon_resized.webp`} alt="Amazon"/>
                              </a>
                              <a href="https://digihaat.in/" target="_blank" rel="noopener noreferrer">
                                 <img className={styles.otherbrandLogo} src={`${process.env.PUBLIC_URL}/images/digihaat_resized.webp`} alt="DigiHaat" />
                              </a>
                              <a href="https://www.mystore.in/en/seller/2745bfda956fd8aff07769ff5ed65449" target="_blank" rel="noopener noreferrer">
                                 <img className={styles.otherbrandLogo} src={`${process.env.PUBLIC_URL}/images/mystore_resized.webp`} alt="MyStore"  />
                              </a>
                           </div>
                      </div>
                   </div>
                   <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                       
                       <div className={`row d-flex justify-content-center ${styles.socialDiv}`}>
                           <p><b><u>Get connected with us on social networks:</u></b></p>
                           <div className={styles.fabfb} >
                              <a href='https://www.facebook.com/meirafoodsofficial' target="_blank" rel="noopener noreferrer" >
                                <FontAwesomeIcon icon={faFacebook}/> 
                              </a>
                           </div>
                           <div className={styles.fabinst} >
                              <a href='https://www.instagram.com/meirafoodproduct' target="_blank" rel="noopener noreferrer" >
                                 <FontAwesomeIcon icon={faInstagram}/>
                              </a>
                           </div>
                          {/*  <div className={styles.fabwhtsapp} ><FontAwesomeIcon icon={faWhatsapp}/></div> */}
                          
                       </div>
                        
                   </div>

                 </div>

              </div>
             
           </div>

     </>
     
    );

}

export default Contact;