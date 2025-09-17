import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import styles from '../css/Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChalkboardTeacher, faHandHolding, faHandsHolding, faIndustry, faPeopleArrows, faPersonChalkboard, faUsersRectangle} from '@fortawesome/free-solid-svg-icons';
import WaveDesignFull from '../WaveDesign/WaveDesignFull';
import emailjs from '@emailjs/browser';


const Services =()=>{

const form = useRef();
const sectionRef = useRef(null);
const [inView, setInView] = useState(false); 
const [showModal, setShowModal] = useState(false);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    remark: ''
});


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);


     e.preventDefault();

    const templateParams ={

      from_name : formData.name,
      from_email :formData.email,
      message : formData.remark,
      contact_no: formData.contact,
      to_email: "support@meirafoods.in",
      to_name:"Meira(Admin)",
    };

    const publicKey= "d9A_xI33x3EGiIoQB";
    const serviceID= "service_y6kbntm";
    const templateId = "template_3u29u8e";

    emailjs.send(serviceID, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    setFormData({
    name: '',
    email: '',
    contact: '',
    remark: ''
  });
    // Add your submit logic (e.g., API call)
    handleCloseModal();
  };


    // Toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false);
    };


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



  const renderServiceContent = () => (

    <>
            
          <div className="row">
            <Form onSubmit={handleSubmit}>
            <Form.Group className={`${styles.formAttrib} mb-3`} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className={`${styles.formAttrib} mb-3`} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className={`${styles.formAttrib} mb-3`} controlId="formContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className={`${styles.formAttrib} mb-3`} controlId="formRemark">
              <Form.Label>Remark</Form.Label>
              <Form.Control as="textarea" name="remark" value={formData.remark} onChange={handleChange} rows={3} />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>  
        </div>
        </>

);



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


                  <div className="text-center my-4">
                    <button type="button" className="btn btn-warning" onClick={handleOpenModal}>
                     <b style={{ color: 'white' }}>Request a Service</b>
                    </button>
                  </div>


                {showModal && (
                        <div className="modal-backdrop show" onClick={closeModal}></div>
                    )}
                    <div 
                        className={`modal ${showModal ? 'show d-block' : ''}`} 
                        tabIndex="-1" 
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title"><b>Request a service</b></h3>
                                    <button 
                                        type="button" 
                                        className="btn-close" 
                                        onClick={closeModal}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {renderServiceContent()}
                                </div>
                                {/* <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                     <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={getSearchHandler()}
                                    >
                                        Apply Filters
                                    </button> 
                                </div> */}
                            </div>
                        </div>
                    </div>

              </div>
              </div>
              

        

        </>
    );
}


export default Services;
