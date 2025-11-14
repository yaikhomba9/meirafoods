import React,{useState, useEffect, useRef,} from 'react';
import styles from '../css/About.module.css';
import WaveBackground from '../WaveDesign/WaveDsign';
import WaveDesignFull from '../WaveDesign/WaveDesignFull';


const About =()=>{


    const sectionRefs = useRef([]);

    const [isVisible, setIsVisible] = useState(false);
    const lineRef = useRef(null);
    


    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
           if (entry.isIntersecting) {
                  entry.target.classList.add(styles.visible);
        } else {
                  entry.target.classList.remove(styles.visible); // reset when out of view
        }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(
      `.${styles.hidden},.${styles.hiddenRight}`
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (lineRef.current) observer.observe(lineRef.current);

    return () => {
      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, []);


   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (lineRef.current) observer.observe(lineRef.current);

    return () => {
      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, []);

    return (

        <>
       

         <div className={`container-fluid ${styles.aboutmain}`}>
          <WaveBackground>
           {/* <div className={`d-flex justify-content-start className={styles.itemTitle} `}>
               <p><b>READ OUR STORY</b></p>
           </div> */}
            <div className={`row`}>
              
               <div className={`col-lg-6 col-md-12 col-sm-10 col-xs-12 ${styles.storyTxt} ${styles.hiddenLeft}`}>

                   <h2 className={`styles.header1`}>Read</h2><h3 className={`styles.header2`}><u>Our Story</u></h3>
                   <p className={styles.txtCatgry}>
                        Meira Foods, established in the year 2004 in Manipur, stands as a pioneering food processing enterprise 
                        dedicated to preserving and promoting the rich culinary heritage of the region. By transforming traditional
                        produce into high-quality, value-added products, the company bridges the gap between indigenous flavours and 
                        modern consumer markets. Its commitment lies in showcasing the authenticity of local ingredients while 
                        ensuring that every product reflects both cultural pride and contemporary standards of excellence. 
                   </p>
                   <p  className={styles.txtCatgry}>
                        At the heart of Meira Foods’ journey is its mission to empower women and create sustainable livelihood
                         opportunities. With more than two decades of community-driven engagement, the company has become a trusted 
                         partner for women entrepreneurs and small-scale farmers across Manipur. Through training, skill development, 
                         and continuous support, Meira Foods enables women to build financial independence, improve their 
                         families’ well-being, and contribute meaningfully to their communities. This approach not only 
                         strengthens individual lives but also uplifts the socio-economic fabric of the region.
                   </p>
                   <p  className={styles.txtCatgry}>
                        Beyond business, Meira Foods embodies a vision of resilience and sustainability. 
                        By integrating traditional knowledge with modern processing techniques, 
                        the company reduces food waste, enhances market accessibility, and fosters environmental responsibility.
                        With every product brought to shelves, Meira Foods delivers a story of empowerment, 
                        sustainability, and cultural celebration bringing the timeless flavours of Manipur 
                        to national and international markets, while staying rooted in its core values of community, 
                        tradition, and innovation.
                   </p>

                  

               </div>
               <div className={`col-lg-6 col-md-12 col-sm-10 col-xs-12 d-flex justify-content-center ${styles.hiddenRight}`}>
                    <img className={styles.meirafoodLogo} src={`${process.env.PUBLIC_URL}/images/about_img.webp`} alt="Meira Foods Logo" />
               </div>
               
                
            </div>
            <hr className={styles.abthr}></hr>
            <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 `}>
               <div className={`${styles.abtPropiter}`}>
                <div className={`card ${styles.propcard}`}>
                  <div className={`row  d-flex justify-content-center ${styles.rowpro}`}>
                    <div className={`col-lg-3 col-md-6 col-sm-8 col-xs-4 d-flex justify-content-center ${styles.proImag} ${styles.hidden} `}>  {/* "image-session" */}
                        <img className={styles.meirapropieter} src={`${process.env.PUBLIC_URL}/images/cheTalu.webp`} alt="Meira Foods Logo"/>
                    </div>
                    <div className={` col-lg-9 col-md-6 col-sm-8 col-xs-8 ${styles.propContext}`}>
                        <p  className={styles.txtCatgry}>"Meira Foods is a movement to create opportunities for every woman, providing them with a livelihood 
                        option that allows them to participate in nation-building and live a dignified life. 
                        Please support us and support our women by buying our products and giving us feedback, 
                        so we can serve you better."</p>
                        <p  className={styles.txtCatgry}>- Hanjabam Shubhra Devi</p>
                        <p  className={styles.txtCatgry}>Managing Director  - Meira Foods</p>
                    </div>

                  </div>
                   
                </div>

               </div>

               

            </div>
            </WaveBackground>
        
                <div ref={lineRef} className={`${styles.lineHidden} ${isVisible ? styles.lineVisible : ""}`}/>
        </div>

       
          
        </>
    );

}


export default About;