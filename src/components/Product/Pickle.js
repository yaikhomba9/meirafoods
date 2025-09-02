import React, {useState} from 'react';
import styles from '../css/Pickle.module.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faSignOut, faUser, faTimes, faGlobe, faRoad, faBridge, faTrafficLight, faGear, faSignsPost, 
  faRoadCircleExclamation, faChartColumn, faDashboard, faUpload, faUserShield, faDatabase, faFileImport, 
  faCloudUploadAlt, faArrowRight, faInfoCircle,faLink,
  faDownload,
  faTimesCircle,
  faTimesSquare} from '@fortawesome/free-solid-svg-icons';


const Pickle=()=>{

    const [loadedImages, setLoadedImages] = useState({});

    const modules = [
    { name: 'KING CHILLI PICKLE', description: 'King chilli pickle', image : `${process.env.PUBLIC_URL}/images/KingChilli_pickle.png`},
    { name: 'BAMBOO SHOOT PICKLE', description: 'Bamboo Shoot Pickle', image : `${process.env.PUBLIC_URL}/images/Bambooshoot_pickle.png`},
    { name: 'FISH PICKLE', description: 'Fish Pickle', image : `${process.env.PUBLIC_URL}/images/Fish_pickle.png`},
    { name: 'GARLIC PICKLE', description: 'Garlic Pickle', image : `${process.env.PUBLIC_URL}/images/Garlic_pickle.png`},
    { name: 'LEMON PICKLE', description: 'Lemon Pickle',  image : `${process.env.PUBLIC_URL}/images/Lemon_pickle.png`},
    { name: 'MANGO PICKLE', description: 'Mango Pickle',  image : `${process.env.PUBLIC_URL}/images/Mango_pickle.png`},
    { name: 'MIX-VEG-PICKLE', description: 'Mix Vegetable Pickle',  image : `${process.env.PUBLIC_URL}/images/Mix_veg_pickle.png`},
    { name: 'NGARI KING CHILLI PICKLE', description: 'Ngari King Chilli Pickle',  image : `${process.env.PUBLIC_URL}/images/Ngari_kingchilli_pickle.png`},
    { name: 'INSTANT NGARI', description: 'Instant Ngari',  image : `${process.env.PUBLIC_URL}/images/Ngari_pickle.png`},
    { name: 'SOYA KING CHILLI PICKLE', description: 'Soya King Chilli Pickle',  image : `${process.env.PUBLIC_URL}/images/Soya_kingChilli_pickle.png`},
    { name: 'NGARI & CHILLI PICKLE', description: 'Ngari Chilli Pickle', image : `${process.env.PUBLIC_URL}/images/ngari_chilli_pickle.png` },
    { name: 'CHILLI KING PICKLE', description: 'Chilli King Pickle', image : `${process.env.PUBLIC_URL}/images/chilli_king_pickle.png`}
  ];


  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
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
                                      <small className="text-muted">{module.description}</small>
                                    </div>
                               </div> 
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
           </div>

         </>
    );

}   

export default Pickle;