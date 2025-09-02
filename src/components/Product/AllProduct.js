import React, {useState} from 'react';
import styles from '../css/Jam.module.css';




const Candy=()=>{

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
    { name: 'CHILLI KING PICKLE', description: 'Chilli King Pickle', image : `${process.env.PUBLIC_URL}/images/chilli_king_pickle.png`},
    { name: 'AMLA CANDY', description: 'Amla Candy', image : `${process.env.PUBLIC_URL}/images/amla_candy.png` },
    { name: 'GINGER CANDY', description: 'Ginger Candy', image : `${process.env.PUBLIC_URL}/images/ginger_candy.png` },
    { name: 'HEIBUM CANDY', description: 'Heibum Candy', image : `${process.env.PUBLIC_URL}/images/heibum_candy.png`},
    { name: 'MANGO CANDY', description: 'Mango Candy', image : `${process.env.PUBLIC_URL}/images/mango_candy.png` },
    { name: 'OLIVE CANDY', description: 'Olive Candy',  image : `${process.env.PUBLIC_URL}/images/oliv_candy.png` },
    { name: 'PINEAPPLE CANDY', description: 'Pineapple Candy',  image : `${process.env.PUBLIC_URL}/images/pineape_candy.png`},
    { name: 'PLUM CANDY', description: 'Plum Candy',  image : `${process.env.PUBLIC_URL}/images/plum_candy.png`},
    { name: 'TAMRIND CANDY', description: 'Tamarind Candy',  image : `${process.env.PUBLIC_URL}/images/tanmarind_candy.png`},
    { name: 'WILD APPLE CANDY', description: 'Wild Apple Candy (Heitup)',  image : `${process.env.PUBLIC_URL}/images/wildApple_candy.png` },
    { name: 'KIWI JAM', description: 'Kiwi Jam', image : `${process.env.PUBLIC_URL}/images/Kiwi_jam.png` },
    { name: 'PINEAPPLE JAM', description: 'Pineapple Jam', image : `${process.env.PUBLIC_URL}/images/pineapple_jam.png`},
    { name: 'MIX FRUIT JAM', description: 'Mix Fruit Jam', image : `${process.env.PUBLIC_URL}/images/mix_fruit.png`},
    { name: 'PINEAPPLE SQUASH', description: 'Pineapple Squash', image : `${process.env.PUBLIC_URL}/images/lemon_squash.png`},
    { name: 'MILLET LADOO', description: 'Millet Ladoo', image : `${process.env.PUBLIC_URL}/images/Millet_ladoo.png`},
    { name: 'PINEAPPLE COOKIES', description: 'Pineapple Cookies', image : `${process.env.PUBLIC_URL}/images/Pinapple_cookies.png`},
    { name: 'PINEAPPLE CUBES', description: 'Pineapple Cubes', image : `${process.env.PUBLIC_URL}/images/Pinapple_cubes.png`},
    { name: 'BORI', description: 'Bori', image : `${process.env.PUBLIC_URL}/images/Bori.png`},
    { name: 'MAROI BORI', description: 'Maroi Bori', image : `${process.env.PUBLIC_URL}/images/Maroi_bori.png`}
    
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
                                    {/* <img className={styles.meirafoodLogo} src={module.image} alt="Meira Foods Logo" /> */}
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