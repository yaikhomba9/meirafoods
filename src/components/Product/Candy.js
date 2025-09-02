import React, {useState} from 'react';
import styles from '../css/Candy.module.css';


const Candy=()=>{

   const [loadedImages, setLoadedImages] = useState({});

    const modules = [
    { name: 'AMLA CANDY', description: 'Amla Candy', image : `${process.env.PUBLIC_URL}/images/amla_candy.png` },
    { name: 'GINGER CANDY', description: 'Ginger Candy', image : `${process.env.PUBLIC_URL}/images/ginger_candy.png` },
    { name: 'HEIBUM CANDY', description: 'Heibum Candy', image : `${process.env.PUBLIC_URL}/images/heibum_candy.png`},
    { name: 'MANGO CANDY', description: 'Mango Candy', image : `${process.env.PUBLIC_URL}/images/mango_candy.png` },
    { name: 'OLIVE CANDY', description: 'Olive Candy',  image : `${process.env.PUBLIC_URL}/images/oliv_candy.png` },
    { name: 'PINEAPPLE CANDY', description: 'Pineapple Candy',  image : `${process.env.PUBLIC_URL}/images/pineape_candy.png`},
    { name: 'PLUM CANDY', description: 'Plum Candy',  image : `${process.env.PUBLIC_URL}/images/plum_candy.png`},
    { name: 'TAMARIND CANDY', description: 'Tamarind Candy',  image : `${process.env.PUBLIC_URL}/images/tanmarind_candy.png`},
    { name: 'WILD APPLE CANDY', description: 'Wild Apple Candy (Heitup)',  image : `${process.env.PUBLIC_URL}/images/wildApple_candy.png` },
    
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

export default Candy;