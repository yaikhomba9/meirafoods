import React,{useState} from 'react';
import styles from '../css/Footer.module.css';

const Footer =()=>{

    return(
        <>

         <div id="services" className={`${styles.footerMainDiv}`}>
            <div className={`container `}>
                <p>© 2025 Meira Food. Designed & developed by &nbsp;
                  <a href='https://www.linkedin.com/in/yaikhomba-laishram-5b947b131' target="_blank">Laishram Yaikhomba</a> 
                 </p>
            </div>
         </div>


        </>
    );
}

export default Footer;