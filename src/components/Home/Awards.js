import React,{useState, useEffect, useRef,} from 'react';
import styles from '../css/Awards.module.css';

const Awards=()=>{


     const [isVisible, setIsVisible] = useState(false);
     const lineRef = useRef(null);
     


     useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            //observer.unobserve(entry.target);
          }else {
              entry.target.classList.remove(styles.visible); // reset when leaving
        }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(
      `.${styles.hidden}`
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


    return(
        <>

        <div className={`col-lg-12 ${styles.awrdDiv}`}>
          <div className={`container`}>
                <div className={`d-flex justify-content-center ${styles.awrdTxtHd} `}>
                    <h2 className={styles.textShadow}>Awards and Recognition</h2>
                </div>
                <div
                    ref={lineRef}
                    className={`${styles.lineHidden} ${isVisible ? styles.lineVisible : ""}`}
                    />

                <div className={'row'}>
                <div className={`col-lg-2`}></div>
                    <div className={`col-lg-3 col-md-4 col-sm-4 col-xs-3 d-flex justify-content-center ${styles.hidden} ${styles.stagger1}`}>
                       <img className={styles.meiraAwards} src={`${process.env.PUBLIC_URL}/images/awards1.webp`} alt="Meira Awards"/>
                    </div>
                    <div className={`col-lg-3 col-md-4 col-sm-4 col-xs-3 d-flex justify-content-center ${styles.hidden} ${styles.stagger2}`}>
                        <img className={styles.meiraAwards} src={`${process.env.PUBLIC_URL}/images/awards2.webp`} alt="Meira Awards"/>
                    </div>
                    <div className={`col-lg-3 col-md-4 col-sm-4 col-xs-3 d-flex justify-content-center ${styles.hidden} ${styles.stagger3}`}>
                         <img className={styles.meiraAwards} src={`${process.env.PUBLIC_URL}/images/awards3.webp`} alt="Meira Awards"/>
                    </div>
                    <div className={`col-lg-1`}></div>
                </div>
           
          
             

          </div>
        </div>
        </>
    );

}

export default Awards;