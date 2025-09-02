import React, { useEffect, useRef, useState } from "react";
import styles from '../css/Testtimonial.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';


const Testimonial=()=>{

    
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
   

   
     return(

        <>
           <div id="testimonial" className={styles.testBodyDiv}>
            <hr className={styles.homeHr}></hr>
          


             {/*   <section className={styles.testimonialSection}>
                 <div className={styles.serviceMainTitle}>
                    <h2>What our clients Say</h2>
                 </div>
                  <div className={styles.testimonialGrid}>
                  {testimonialData.map((t, i) => (
                     <TestimonialCard key={i} {...t} />
                  ))}
                  </div>
               </section> */}


              <div className={`container`}>
                  <div className={styles.serviceMainTitle}>
                    <h2>What our clients Say</h2>
                 </div>
                      <div className={`row`}>
                        <div ref={sectionRef} className={` col-lg-4 ${styles.slideHidden} ${isVisible ? styles.slideVisible : ""}`}>
                             <div className={styles.testimonial}>
                               <div>
                                 <FontAwesomeIcon className={styles.testImage} icon={faUserCircle}/>
                               </div>
                              <div className={styles.testContent}>
                                 <p>  
                                      "One of the famous food processing industries in Manipur."
                                 </p>
                                 <div className={styles.testName}>
                                    -
                                    Sagolsem Nareshkumar Singh
                                 </div>
                              </div>
                            </div>
                          </div>

                          <div ref={sectionRef} className={` col-lg-4 ${styles.slideHidden} ${isVisible ? styles.slideVisible : ""}`}>
                             <div className={styles.testimonial}>
                               <div>
                                 <FontAwesomeIcon className={styles.testImage} icon={faUserCircle}/>
                               </div>
                              <div className={styles.testContent}>
                                 <p>  
                                      "Mushroom pickle is very tasty. I like it very much."
                                 </p>
                                 <div className={styles.testName}>
                                    -
                                    Nongmaithem Romen Singh
                                 </div>
                              </div>
                            </div>
                          </div>

                           <div ref={sectionRef} className={` col-lg-4 ${styles.slideHidden} ${isVisible ? styles.slideVisible : ""}`}>
                             <div className={styles.testimonial}>
                               <div>
                                 <FontAwesomeIcon className={styles.testImage} icon={faUserCircle}/>
                               </div>
                              <div className={styles.testContent}>
                                 <p>  
                                      "Dehydrated exotic fruits are very tasty. All other products are very good."
                                 </p>
                                 <div className={styles.testName}>
                                    -
                                    Rita Dubey
                                 </div>
                              </div>
                            </div>
                          </div>


                    </div>
                     

              </div>
             
            
            <hr className={styles.homeHr}></hr>

           </div>
          
        </>
     );


}
export default Testimonial;




