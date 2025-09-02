import React, {useState} from 'react';
import styles from '../css/Jam.module.css';


const Jam=()=>{

  const [loadedImages, setLoadedImages] = useState({});

     const modules = [
    
    { name: 'KIWI JAM', description: 'Kiwi Jam', image : `${process.env.PUBLIC_URL}/images/Kiwi_jam.png` },
    { name: 'PINEAPPLE JAM', description: 'Pineapple Jam', image : `${process.env.PUBLIC_URL}/images/pineapple_jam.png`},
    { name: 'MIX FRUIT JAM', description: 'Mix Fruit Jam', image : `${process.env.PUBLIC_URL}/images/mix_fruit.png`},
   
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

export default Jam;