import React,{useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../css/Galery.module.css';




const Galery =()=>{
  const [selectedImage, setSelectedImage] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);


    const updateSlidesToShow = () => {
    const width = window.innerWidth;

    if (width < 576) {
      setSlidesToShow(1);
    } else if (width < 768) {
      setSlidesToShow(1);
    } else if (width < 992) {
      setSlidesToShow(2);
    } else if (width < 1200) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

    useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...customArrowStyle, right: '-25px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...customArrowStyle, left: '-25px' }}
      onClick={onClick}
    />
  );
};


const customArrowStyle = {
  display: 'block',
  background: '#ff5733', // Change arrow color
  borderRadius: '50%',
  zIndex: 2,
  
};

     const images = [
    `${process.env.PUBLIC_URL}/images/KingChilli_pickle.png`,
    `${process.env.PUBLIC_URL}/images/Bambooshoot_pickle.png`,
    `${process.env.PUBLIC_URL}/images/Fish_pickle.png`,
    `${process.env.PUBLIC_URL}/images/Lemon_pickle.png`,
    `${process.env.PUBLIC_URL}/images/Ngari_kingchilli_pickle.png`,
    // Add more image URLs as needed
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  
  };


    return(
    
    <>
       <div className={styles.galleryDiv}>
         
        <div className="container my-4">
        <h3 className="mb-3"><b>PHOTO</b> <b className={styles.galry}>GALLERY</b></h3>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className={`px-2 ${styles.customSlide}`}>
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="img-fluid rounded img"
                style={{ height: '300px', width: '100%', objectFit: 'cover' , border: '2px solid rgba(0, 0, 0, 0.05)',
                  boxShadow : '0 2px 7px 1px rgba(10, 9, 9, 0.15)', cursor:'pointer' }}
                  onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </Slider>
      </div>


       </div>

       {/* Popup Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
              &times;
           </button>
            <img src={selectedImage} alt="Expanded view" className="img-fluid" style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
          </div>
        </div>
      )}

    </>
    
);
}


export default Galery;