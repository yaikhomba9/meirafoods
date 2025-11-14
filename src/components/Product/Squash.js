import React, {useState} from 'react';
import styles from '../css/Squash.module.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faSignOut, faUser, faTimes, faGlobe, faRoad, faBridge, faTrafficLight, faGear, faSignsPost, 
  faRoadCircleExclamation, faChartColumn, faDashboard, faUpload, faUserShield, faDatabase, faFileImport, 
  faCloudUploadAlt, faArrowRight, faInfoCircle,faLink,
  faDownload,
  faTimesCircle,
  faTimesSquare} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';


const Squash=()=>{


  const [loadedImages, setLoadedImages] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null); 

     const modules = [
    { name: 'PINEAPPLE SQUASH', description: 'Pineapple Squash', image : `${process.env.PUBLIC_URL}/images/lemon_squash.webp`},
    { name: 'LEMON SQUASH', description: 'Lemon Squash', image : `${process.env.PUBLIC_URL}/images/pineapple_squash.webp`}
  ];


   const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

     const openModal = (module) => {
    setSelectedModule(module);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedModule(null);
  };

  const truncateText = (text, maxLength = 25) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '.......' : text;
  };


    return(

        <>
           <div className={styles.prdPadding}>
              <div className={`container-fluid p-3 ${styles.prddiv}`}>
                    <div className="row g-3">
                      {modules.map((module, index) => (
                       <div className="col-6 col-md-6 col-lg-3 col-sm-4 d-flex justify-content-center" key={index}>
                          <div className={`${styles.moduleCard} p-3`}>
                            <div className="d-flex align-items-center">
                               <div className='row'>
                                    <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-8 ${styles.moduleIconContainer} `}>
                                     {/*  <img className={styles.meirafoodLogo} src={module.image} alt="Meira Foods Logo" /> */}

                                     <div className={styles.imageWrapper}>
                                    {!loadedImages[index] && (
                                      <img
                                        src={`${process.env.PUBLIC_URL}/images/loader_img.png`}
                                        alt="Loading..."
                                        className={styles.loaderOverlay}
                                      />
                                    )}

                                    <img
                                      className={`${styles.meirafoodLogo}`}
                                      src={module.image}
                                      alt={module.name}
                                      loading="lazy"
                                      onLoad={() => handleImageLoad(index)}
                                      onError={() => handleImageError(index)}
                                    />
                                  </div>
                                    </div>
                                    <hr></hr>
                                    <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-8`}>
                                      <h6 className={`mb-0`}>{module.name}</h6>
                                      <small className="text-muted">{truncateText(module.description)}</small>
                                       <div className="mt-2">
                                        <button
                                          className="btn btn-primary btn-sm"
                                          onClick={() => openModal(module)}>
                                          More
                                        </button>
                                    </div>
                                    </div>
                               </div> 
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
           </div>


            {/* Modal for Full Description */}
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>{selectedModule?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.customModalBody}>
          <img
            src={selectedModule?.image}
            alt={selectedModule?.name}
            style={{ width: '100%', marginBottom: '1rem' }}
            className={`img-fluid ${styles.customModalImage}`}
          />
          <p><b>Description: </b> {selectedModule?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

         </>
    );

}   

export default Squash;