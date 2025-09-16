import React, {useState} from 'react';
import styles from '../css/Candy.module.css';
import { Modal, Button } from 'react-bootstrap';



const Candy=()=>{

    const [loadedImages, setLoadedImages] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [selectedModule, setSelectedModule] = useState(null); 

    const modules = [
     { 
      name: 'Amla Candy | Vitamin-C Rich Sweet-Tart Bites', 
      description: 'Traditional amla candy—tangy, tasty, and naturally rich in vitamin C.', 
      image : `${process.env.PUBLIC_URL}/images/amla_candy.png`
     },
    { 
      name: 'Ginger Candy | Zingy, Soothing, Digestive',
       description: 'Classic ginger candy—comforting heat and travel-friendly.', 
       image : `${process.env.PUBLIC_URL}/images/ginger_candy.png` 
      },
    { name: 'HEIBUM CANDY', 
      description: 'Heibum Candy', 
      image : `${process.env.PUBLIC_URL}/images/heibum_candy.png`
    },
    { name: 'Mango Candy | Chewy, Aromatic, King-of-Fruits', 
      description: 'Sun-bright mango candy—tropical sweetness in every bite.', 
      image : `${process.env.PUBLIC_URL}/images/mango_candy.png`
     },
    { name: 'Indian Olive Candy | Tangy Jolphai/Heibong', 
      description: 'Zesty Indian olive candy—distinctive Northeast flavour with natural fruit goodness.',  
      image : `${process.env.PUBLIC_URL}/images/oliv_candy.png` 
    },
    { name: 'Pineapple Candy | Tropical & Juicy', 
      description: 'Real pineapple flavour with bromelain’s natural digestive support—crafted into chewy candy.',  
      image : `${process.env.PUBLIC_URL}/images/pineape_candy.png`
    },
    { name: 'Plum Candy | Juicy, Tangy, Antioxidant-Rich', 
      description: 'Sweet-tart plum candy with natural fruit goodness—a satisfying anytime nibble.',  
      image : `${process.env.PUBLIC_URL}/images/plum_candy.png`
    },
    { name: 'Tamarind Candy | Tangy, Nostalgic, Addictive',
       description: 'Sweet-sour tamarind candy—classic Indian flavour you’ll keep reaching for.',  
       image : `${process.env.PUBLIC_URL}/images/tanmarind_candy.png`
      },
    { name: 'Wild Apple Candy | Sweet-Sour Hillside Treat', 
      description: 'Northeast wild apple candy—zesty flavour with natural fruit goodness.',  
      image : `${process.env.PUBLIC_URL}/images/wildApple_candy.png` 
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
                                    <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 ${styles.moduleIconContainer}`}>
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
                                    <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                                      <h6 className={`mb-0`}>{module.name}</h6>
                                      <small className="text-muted">{truncateText(module.description)}</small>
                                    <div className="mt-2">
                                      <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => openModal(module)}
                                      >
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

export default Candy;