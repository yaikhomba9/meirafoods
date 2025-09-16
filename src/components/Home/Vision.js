import React,{useEffect,useRef} from 'react';
import styles from '../css/Vsion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBriefcase, faChalkboardTeacher, faHandHolding, faHandsHolding, faIndustry, faPeopleArrows, faPersonChalkboard, faUsersRectangle, faBullseye} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';


const Vision=()=>{


  const containerRefs = useRef([]);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles.active); // Reset animation
            void entry.target.offsetWidth;               // Force reflow
            entry.target.classList.add(styles.active);  // Trigger animation
          }
        });
      },
      { threshold: 0.1 }
    )

    containerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      containerRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);



  const visionData = [
  {
    icon: faBullseye,
    title: "OUR MISSION",
    description: `To preserve and promote the natural tastes of indigenous food.\nTo provide training in food processing technologies.\nTo create work opportunities for the youths.\nTo support entrepreneurs in creating a sustainable business model.`,
  },
  {
    icon: faEye,
    title: "OUR VISION",
    description: "To empower the community and create a sustainable, healthy ecosystem.",
  },
  {
    icon: farHeart,
    title: "OUR VALUES",
    description: `Purpose Driven\nNurturing\nEmpathetic\nCollaborative\nShared Success`,
  },
];


     return(

      <>
        <div id="vision" className={styles.visionDiv}>
{/* bg-white */}
        <section className={`py-4  ${styles.visonSec}`}>
        <div className="container">
          <div className="row text-center">
            {visionData.map((item, index) => (
              <div
                key={index}
                className={`col-12 col-md-4 mb-4  ${styles.border}`}
              >
{/*  style={index < 2 ? { borderRight: "2px solid #ddd" } : {}} */}
                <div ref={(el) => (containerRefs.current[index] = el)} className={styles.visioneffct}>
                <FontAwesomeIcon className={`fa-5x mb-3 text-dark ${styles.visonLogo}`} icon={item.icon} />
                <div className="d-flex justify-content-center">
                  <h4 className={`d-inline-block px-3 py-1 text-white fw-bold ${styles.visonhdr}`}>
                    {item.title}
                  </h4>
                </div>
                <div className="my-2" style={{ width: "40px", height: "2px", background: "#000", margin: "10px auto" }}></div>
                <p className={`text-muted ${styles.visionTxt}`}>
                 {item.description.split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                </p>
              </div>

              
                
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* <h2 class="text-center fw-bold mb-4">Mission, Vision & Values</h2> */}
          {/* <section className={`py-4 bg-white ${styles.visonSec}`} >
                <div className="container">
                  <div className="row text-center">
                   
                    <div className="col-12 col-md-4 mb-4 border-md-end"  style={{ borderRight: "2px solid #ddd" }}>
                     <div ref={ref} className={styles.visioneffct}>
                      <FontAwesomeIcon className={`fa-5x mb-3 text-dark ${styles.visonLogo}`} icon={faBullseye} />
                      <div className='d-flex justify-content-center'>
                           <h4 className={`d-inline-block px-3 py-1 text-white fw-bold ${styles.visonhdr}`}>
                            OUR MISSION
                          </h4>
                      </div>
                      <div className="my-2" style={{ width: "40px", height: "2px", background: "#000", margin: "10px auto" }}></div>
                      <p className="text-muted  ${styles.visionTxt}">
                        To preserve and promote the natural tastes of indigenous food. <br />
                        To provide training in food processing technologies. <br />
                        To create work opportunities for the youths. <br />
                        To support entrepreneurs in creating a sustainable business model.
                      </p>
                    </div>
                    </div>
                    

                    
                     <div className="col-12 col-md-4 mb-4 border-md-end"  style={{ borderRight: "2px solid #ddd" }}>
                     <div ref={ref} className={styles.visioneffct}>
                      <FontAwesomeIcon className={`fa-5x mb-3 text-dark ${styles.visonLogo}`} icon={faEye} />
                      <div className='d-flex justify-content-center'>
                          <h4 className={`d-inline-block px-3 py-1 text-white fw-bold ${styles.visonhdr}`}>
                            OUR VISION
                          </h4>
                      </div>
                    
                      <div className="my-2" style={{ width: "40px", height: "2px", background: "#000", margin: "10px auto" }}></div>
                      <p className="text-muted  ${styles.visionTxt}">
                        To empower the community and create a sustainable, healthy ecosystem.
                      </p>
                    </div>

                    </div>
                   

                   
                    <div className="col-12 col-md-4 mb-4">
                     <div ref={ref} className={styles.visioneffct}>
                      <FontAwesomeIcon className={`fa-5x mb-3 text-dark ${styles.visonLogo}`} icon={farHeart} />
                      <div className='d-flex justify-content-center'>
                          <h4 className={`d-inline-block px-3 py-1 text-white fw-bold ${styles.visonhdr}`}>
                            OUR VALUES
                          </h4>
                      </div>
                      <div className="my-2" style={{ width: "40px", height: "2px", background: "#000", margin: "10px auto" }}></div>
                      <p className={`text-muted  ${styles.visionTxt}`}>
                        Purpose Driven <br />
                        Nurturing <br />
                        Empathetic <br />
                        Collaborative <br />
                        Shared Success
                      </p>
                    </div>

                    </div>
                    
                  </div>
                </div>
              </section> */}

          {/* <div class="container my-5">
                <h2 class="text-center fw-bold mb-4">Mission, Vision & Values</h2>

                <div class="row g-4">
                    <div class="col-md-4 col-sm-12">
                    <div class="card shadow-sm h-100">
                        <div class="card-body text-center">
                        <h4 class="card-title text-primary fw-bold">Mission</h4>
                        <p class="card-text">Preserving and promoting indigenous tastes...</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#missionModal">
                            Read More
                        </button>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 col-sm-12">
                    <div class="card shadow-sm h-100">
                        <div class="card-body text-center">
                        <h4 class="card-title text-success fw-bold">Vision</h4>
                        <p class="card-text">Empower the community for sustainability...</p>
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#visionModal">
                            Read More
                        </button>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 col-sm-12">
                    <div class="card shadow-sm h-100">
                        <div class="card-body text-center">
                        <h4 class="card-title text-warning fw-bold">Values</h4>
                        <p class="card-text">Purpose-driven, nurturing, empathetic...</p>
                        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#valuesModal">
                            Read More
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="modal fade" id="missionModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-primary">Mission</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <ul>
                        <li>Preserve and promote the natural tastes of indigenous food.</li>
                        <li>Provide training in food processing technologies.</li>
                        <li>Create work opportunities for the youths.</li>
                        <li>Support entrepreneurs in creating a sustainable business model.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div class="modal fade" id="visionModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-success">Vision</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        Empower the community and create a sustainable, healthy ecosystem.
                    </div>
                    </div>
                </div>
                </div>

                <div class="modal fade" id="valuesModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-warning">Values</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <ul>
                        <li>Purpose Driven</li>
                        <li>Nurturing</li>
                        <li>Empathetic</li>
                        <li>Collaborative</li>
                        <li>Shared Success</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div> */}

{/* <div class="container my-5">
  <h2 class="text-center fw-bold mb-4">Our Mission, Vision & Values</h2>

  <div class="accordion" id="missionVisionValues">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingMission">
        <button class="accordion-button fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMission" aria-expanded="true" aria-controls="collapseMission">
          Mission
        </button>
      </h2>
      <div id="collapseMission" class="accordion-collapse collapse show" aria-labelledby="headingMission" data-bs-parent="#missionVisionValues">
        <div class="accordion-body">
          <ul class="mb-0">
            <li>Preserve and promote the natural tastes of indigenous food.</li>
            <li>Provide training in food processing technologies.</li>
            <li>Create work opportunities for the youths.</li>
            <li>Support entrepreneurs in creating a sustainable business model.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="headingVision">
        <button class="accordion-button collapsed fw-bold text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVision" aria-expanded="false" aria-controls="collapseVision">
          Vision
        </button>
      </h2>
      <div id="collapseVision" class="accordion-collapse collapse" aria-labelledby="headingVision" data-bs-parent="#missionVisionValues">
        <div class="accordion-body">
          Empower the community and create a sustainable, healthy ecosystem.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="headingValues">
        <button class="accordion-button collapsed fw-bold text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseValues" aria-expanded="false" aria-controls="collapseValues">
          Values
        </button>
      </h2>
      <div id="collapseValues" class="accordion-collapse collapse" aria-labelledby="headingValues" data-bs-parent="#missionVisionValues">
        <div class="accordion-body">
          <ul class="mb-0">
            <li>Purpose Driven</li>
            <li>Nurturing</li>
            <li>Empathetic</li>
            <li>Collaborative</li>
            <li>Shared Success</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> */}


              {/* <section className="py-5 ">
                <div class="container my-5">
                    <h2 class="text-center fw-bold mb-4">Our Mission, <b className={styles.hdtxt}>Vision & Values</b></h2>
                    <p class="text-center text-muted mb-5">
                        Preserving traditions, empowering communities, and building a sustainable future.
                    </p>

                    <div class="row g-4">
                        <div class="col-md-4 col-sm-12">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                            <h4 class="card-title text-primary fw-bold">Mission</h4>
                            <ul class="list-unstyled mt-3">
                                <li>• Preserve and promote the natural tastes of indigenous food.</li>
                                <li>• Provide training in food processing technologies.</li>
                                <li>• Create work opportunities for the youths.</li>
                                <li>• Support entrepreneurs in creating a sustainable business model.</li>
                            </ul>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                            <h4 class="card-title text-success fw-bold">Vision</h4>
                            <p class="mt-3">
                                Empower the community and create a sustainable, healthy ecosystem.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                            <h4 class="card-title text-warning fw-bold">Values</h4>
                            <ul class="list-unstyled mt-3">
                                <li>• Purpose Driven</li>
                                <li>• Nurturing</li>
                                <li>• Empathetic</li>
                                <li>• Collaborative</li>
                                <li>• Shared Success</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

               </section> */}

          </div>        
        </>
     );

}
export default Vision;