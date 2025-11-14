import React, {useState} from 'react';
import styles from '../css/Pickle.module.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faSignOut, faUser, faTimes, faGlobe, faRoad, faBridge, faTrafficLight, faGear, faSignsPost, 
  faRoadCircleExclamation, faChartColumn, faDashboard, faUpload, faUserShield, faDatabase, faFileImport, 
  faCloudUploadAlt, faArrowRight, faInfoCircle,faLink,
  faDownload,
  faTimesCircle,
  faTimesSquare} from '@fortawesome/free-solid-svg-icons';
  import { Modal, Button } from 'react-bootstrap';



const Pickle=()=>{

    const [loadedImages, setLoadedImages] = useState({});
      const [showModal, setShowModal] = useState(false);
      const [selectedModule, setSelectedModule] = useState(null);

    const modules = [
    { 
      name: 'Umorok King Chilli Pickle | Authentic Manipur Ghost Pepper', 
      description: 'Ferociously hot yet aromatic King Chilli (Umorok) pickle from Manipur—crafted for true spice lovers. Add instant heat and depth to any meal.', 
      image : `${process.env.PUBLIC_URL}/images/KingChilli_pickle.webp`
    },
    { name: 'Soibum Bamboo Shoot Pickle | Fermented & Crunchy', 
      description: 'Traditional fermented bamboo shoot pickle—tangy, crunchy, and culture-rich. A Northeastern staple for good reason.', 
      image : `${process.env.PUBLIC_URL}/images/Bambooshoot_pickle.webp`
    },
    { 
      name: 'Rohu Fish Pickle | Ginger-Garlic Manipuri Style', 
      description: 'Tender rohu in aromatic ginger-garlic pickle—balanced heat, big flavour, ready to serve with meals or snacks.', 
      image : `${process.env.PUBLIC_URL}/images/Fish_pickle.webp`
    },
    { 
      name: 'Garlic Pickle | Slow-Cooked, Aromatic, Balanced', 
      description: 'Smooth, full-bodied garlic pickle—flavourful and versatile. Serve with parathas, dal, or thalis.', 
      image : `${process.env.PUBLIC_URL}/images/Garlic_pickle.webp`
    },
    { 
      name: 'Lemon Pickle | Tangy, Sun-Cured & Spiced', 
      description: 'Zesty lemon pickle—balanced sour, bitter, and spice notes in every spoonful.',  
      image : `${process.env.PUBLIC_URL}/images/Lemon_pickle.webp`
    },
    { 
      name: 'Traditional Mango Pickle | Manipur Local Mangoes', 
      description: 'Handcrafted mango pickle with bold spices and the right sour-spicy balance.',  
      image : `${process.env.PUBLIC_URL}/images/Mango_pickle.webp`
    },
    { 
      name: 'Mixed Veg Pickle with Kachai Lemon | Crunchy & Zesty', 
      description: 'Exotic veggie medley lifted by Manipur’s GI-tagged Kachai Lemon—crunch, zing, and real Northeast character.',  
      image : `${process.env.PUBLIC_URL}/images/Mix_veg_pickle.webp`
    },
    { 
      name: 'Ngari & King Chilli Pickle | Fermented Manipuri Classic', 
      description: 'Fermented ngari meets Manipur’s King chilli for an intensely savoury, authentic pickle—perfect with rice, lai saag, or snacks.',  
      image : `${process.env.PUBLIC_URL}/images/Ngari_kingchilli_pickle.webp`
    },
    { 
      name: 'Instant Ngari | Ready-to-Use Fermented Fish from Manipur', 
      description: 'Authentic Manipuri ngari—prepped and ready for everyday cooking. Big flavour, zero fuss.',  
      image : `${process.env.PUBLIC_URL}/images/Ngari_pickle.webp`
    },
    { 
       name: 'Hawaijar & Umorok Pickle | Vegan Fermented Soybean',
       description: 'Protein-rich fermented soy (hawaijar) with Manipur’s Umorok—pure umami heat, crafted in small batches.',  
       image : `${process.env.PUBLIC_URL}/images/Soya_kingChilli_pickle.webp`
      },
    { 
       name: 'CHILLI KING PICKLE',
       description: 'Chilli King Pickle', 
       image : `${process.env.PUBLIC_URL}/images/chilli_king_pickle.webp`
      },
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


                                    {/* Image Wrapper with Loader Overlay */}
                                  <div className={styles.imageWrapper}>
                                    {!loadedImages[index] && (
                                      <img
                                        src={`${process.env.PUBLIC_URL}/images/loader_img.webp`}
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



                                    {/* Skeleton Loader */}
                                    {/* {!loadedImages[index] && (
                                      <img
                                          src={`${process.env.PUBLIC_URL}/images/loader_img.png`}  
                                          alt="Loading..."
                                          className={styles.loaderImg}
                                        />
                                    )}
                                    <img className={`${styles.meirafoodLogo} ${!loadedImages[index] ? styles.hidden : ""}`} 
                                     src={module.image} alt="Meira Foods Logo" loading="lazy"
                                     onLoad={() => handleImageLoad(index)}
                                     onError={() => handleImageError(index)}/> */}
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

export default Pickle;