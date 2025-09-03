import React, { useEffect, useRef, useState } from "react";
import styles from '../css/Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChalkboardTeacher, faHandHolding, faHandsHolding, faIndustry, faPeopleArrows, faPersonChalkboard, faUsersRectangle} from '@fortawesome/free-solid-svg-icons';
import WaveDesignFull from '../WaveDesign/WaveDesignFull';


const Services =()=>{

      const sectionRef = useRef(null);
      const [inView, setInView] = useState(false); 




    const cards = [
    {
      id: 1,
      title: "Micropreneur (Foodpreneur)",
      text: "We provide consultation and guidance programs to support aspiring micropreneurs (foodpreneurs), helping them establish and grow their food businesses.",
      accent: "#92b283ab", // orange
      icon: (
        <FontAwesomeIcon   className={styles.serviceIcon} icon={faPeopleArrows}/>
      )
    },
    {
      id: 2,
      title: "Product Development & Enterprise Support",
      text: "Our team assists in developing new food products, finalizing product concepts, confirming shelf life, and testing consumer acceptability to ensure successful market entry.",
      accent: "#92b283ab", // teal
      icon: (
         <FontAwesomeIcon className={styles.serviceIcon} icon={faIndustry}/>
      )
    },
    {
      id: 3,
      title: "Farmers’ Training Programme",
      text: "We conduct specialized training programs for farmers, enabling them to create secondary sources of income.",
      accent: "#92b283ab", // deep blue
      icon: (
        <FontAwesomeIcon className={styles.serviceIcon} icon={faChalkboardTeacher}/>
      )
    },
    {
      id: 4,
      title: "Training for Self-Help Groups",
      text: "We provide training for self-help groups (SHGs) to engage in income-generating activities, empowering communities and creating sustainable livelihoods.",
      accent: "#92b283ab", // slate
      icon: (
        <FontAwesomeIcon className={styles.serviceIcon} icon={faUsersRectangle}/>
      )
    },
    {
      id: 5,
      title: "Student Internship Opportunities",
      text: "We offer internship opportunities to students, giving them hands-on experience in food processing, entrepreneurship, and enterprise development.",
      accent: "#92b283ab", // slate
      icon: (
        <FontAwesomeIcon className={styles.serviceIcon} icon={faPersonChalkboard}/>
      )
    },
   /*  {
      id: 5,
      title: "Service enquiry",
      text: "",
      accent: "#92b283ab", // slate
      icon: (
        <FontAwesomeIcon className={styles.serviceIcon1} icon={faPersonChalkboard}/>
      )
    } */
    
  ];


  /* useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []); */


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



    return (

        <>


         <div id="services" className={`${styles.serviceMainDiv}`}>

             {/*  <section ref={sectionRef} className={styles.stepsWrap}>
 
                     <h2 className={styles.heading}>OUR SERVICES</h2>
                     <div className={styles.grid}>
                        {cards.map((c) => (
                        <article key={c.id} 
                        className={`${styles.card} ${inView ? styles.show : ""}`} 
                        style={{
                        // Pass accent color to CSS via custom property
                        ['--accent'] : c.accent
                        }}>
                        <h3 className={styles.title}>{c.title}</h3>
                        <p className={styles.text}>{c.text}</p>
                        <div className={styles.icon} role="img" aria-label={`${c.title} icon`}>
                        {c.icon}
                        </div>
                        </article>
                        ))}
                     </div>


              </section> */}



               <div className={`container`} >
                 
                 <div className={styles.serviceMainTitle}>

                    <h1>Our Services</h1>
                    <p>Our professional services are designed to deliver exceptional value, tailored solutions, 
                    and seamless experiences to meet your unique needs and drive success.</p>
                 </div>

                 <div className={`row`}>

                    <div className={`col-md-4 ${styles.srvDiv} ${styles.hidden} ${styles.stagger1} `}>
                       <div>
                           <FontAwesomeIcon className={styles.serviceIcon} icon={faPeopleArrows}/>
                       </div>
                       <div className={styles.serviceDesc}>
                           <h3 className={styles.globalFont}>Micropreneur (Foodpreneur)</h3>
                           <p>We provide consultation and guidance programs to support aspiring micropreneurs (foodpreneurs), 
                              helping them establish and grow their food businesses.
                           </p>
                       </div>
                    </div>

                    <div className={`col-md-4 ${styles.srvDiv} ${styles.hidden} ${styles.stagger2}`}>
                       <FontAwesomeIcon className={styles.serviceIcon} icon={faIndustry}/>
                       <div className={styles.serviceDesc}>
                           <h3 className={styles.globalFont}>Product Development & Enterprise Support</h3>
                           <p>Our team assists in developing new food products, finalizing product concepts, 
                              confirming shelf life, and testing consumer acceptability to ensure successful market entry.</p>

                       </div>
                    </div>

                     <div className={`col-md-4 ${styles.srvDiv} ${styles.hidden} ${styles.stagger3}`}>
                       <FontAwesomeIcon className={styles.serviceIcon} icon={faChalkboardTeacher}/>
                       <div className={styles.serviceDesc}>
                           <h3 className={styles.globalFont}>Farmers’ Training Programme</h3>
                           <p>We conduct specialized training programs for farmers, enabling them to create 
                              secondary sources of income.</p>

                       </div>
                    </div>
                     <div className={`col-md-6 ${styles.srvDiv} ${styles.hidden} ${styles.stagger4}`}>
                       <FontAwesomeIcon className={styles.serviceIcon} icon={faUsersRectangle}/>
                       <div className={styles.serviceDesc}>
                           <h3 className={styles.globalFont}>Training for Self-Help Groups</h3>
                           <p>We provide training for self-help groups (SHGs) to engage in income-generating activities, 
                              empowering communities and creating sustainable livelihoods.</p>

                       </div>
                    </div>
                     <div className={`col-md-6 ${styles.srvDiv} ${styles.hidden} ${styles.stagger5}`}>
                       <FontAwesomeIcon className={styles.serviceIcon} icon={faPersonChalkboard}/>
                       <div className={styles.serviceDesc}>
                           <h3 className={styles.globalFont}>Student Internship Opportunities</h3>
                           <p>We offer internship opportunities to students, giving them hands-on experience in food processing, 
                              entrepreneurship, and enterprise development.</p>
                       </div>
                    </div>
                     


                 </div>

              </div> 

          </div>

        </>
    );
}


export default Services;
