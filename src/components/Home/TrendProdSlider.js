import React, { useRef, useEffect, useState } from 'react';
import styles from '../css/TrendProdSlider.module.css'
import { Carousel } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const TrendProdCSlider=()=>{



   const handleRoute = (route) => {
      navigate(route);
    };
  
     const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [isPaused, setIsPaused] = useState(false);  
    const [currentPosition, setCurrentPosition] = useState(0);   

   const cardData = [
    {
      id: 'product',
      img: `${process.env.PUBLIC_URL}/images/imgland1.png`,
      title: "Pickle",
      text: "Tender rohu in aromatic ginger-garlic pickle—balanced heat, big flavour, ready to serve with meals or snacks.",
      route: "/product/pickle", 
    },
   /*  {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/imgland2.png`,
      title: "King Chilli (Umorok) Pickle",
      text: "Ferociously hot yet aromatic King Chilli (Umorok) pickle from Manipur—crafted for true spice lovers. Add instant heat and depth to any meal.",
      updated: "Last updated 10 mins ago",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/imgland3.png`,
      title: "Bamboo Shoot (Soibum) Pickle",
      text: "Traditional fermented bamboo shoot pickle—tangy, crunchy, and culture-rich. A Northeastern staple for good reason.",
      updated: "Last updated 20 mins ago",
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/images/Pinapple_cookies.png`,
      title: "Pineapple Cookies",
      text: "Crisp outside, soft inside — our Pineapple Cookies blend buttery goodness with the sweet tropical flavor of ripe pineapples.",
      updated: "Last updated 20 mins ago",
    }, */
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/images/candyImg.png`,
      title: "Candy",
      text: "Sweet-sour tamarind candy—classic Indian flavour you’ll keep reaching for.",
       route: "/product/candy",  
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/images/kiwi_img.png`,
      title: "Jam",
      text: "Crisp outside, soft inside — our Pineapple Cookies blend buttery goodness with the sweet tropical flavor of ripe pineapples.",
      updated: "Last updated 20 mins ago",
      route: "/product/jam" ,  
    },
    {
      id: 7,
      img: `${process.env.PUBLIC_URL}/images/Pinapple_cookies.png`,
      title: "Cookies",
      text: "Crisp outside, soft inside — our Pineapple Cookies blend buttery goodness with the sweet tropical flavor of ripe pineapples.",
      route: "/product/all" ,  
    },
  ];



  // Scroll functions
  const cardWidth = 400 + 16; // 400px width + 16px margin (mx-2 adds 0.5rem each side)

  // Scroll functions with infinite behavior
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = currentPosition - 1;
      
      if (newPosition < 0) {
        // Jump to the end for infinite effect
        setCurrentPosition(cardData.length - 1);
        container.scrollTo({
          left: (cardData.length - 1) * cardWidth,
          behavior: 'smooth'
        });
      } else {
        setCurrentPosition(newPosition);
        container.scrollTo({
          left: newPosition * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = currentPosition + 1;
      
      if (newPosition >= cardData.length) {
        // Jump to the beginning for infinite effect
        setCurrentPosition(0);
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        setCurrentPosition(newPosition);
        container.scrollTo({
          left: newPosition * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  // Check scroll position to show/hide buttons
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }; 



  // Auto-scroll effect
 /*  useEffect(() => {
    let autoScrollInterval;
    
   
      autoScrollInterval = setInterval(() => {
        scrollRight();
      }, 5000);
    
    
    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [ currentPosition]); */
 

  // Handle manual scroll
   useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      
      // Initial check
      checkScrollPosition();
      
      // Auto-scroll animation
     /*  let autoScrollInterval;
      
    
        autoScrollInterval = setInterval(() => {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
          }
        }, 3000); */
      
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
        //clearInterval(autoScrollInterval);
      };
    }
  }, [currentPosition]); 


    return(

    <>
    <div className={`${styles.cardDiv}`}>
    <div><h3><b style={{color:"red" }}><u>Category:</u></b></h3></div>
     <div className={`${styles.controls} d-flex justify-content-end `}>
            <button 
              className={`${styles.scrollButton} ${styles.leftButton} ${!showLeftButton ? styles.hidden : ''}`}
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              &#8249;
            </button>
            <button 
              className={`${styles.scrollButton} ${styles.rightButton} ${!showRightButton ? styles.hidden : ''}`}
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              &#8250;
            </button>
          </div>
  <div className={`scroll-wrapper ${styles.scrollWrapper}`} ref={scrollContainerRef}>
  <div className={`scroll-content ${styles.scrollContent}`}>
    {cardData.concat(cardData).map((card) => (
      <div
        key={card.id + Math.random()} // avoid duplicate keys
        className={`card mb-3 mx-2 ${styles.carddiv1}`}
        style={{ maxWidth: "400px", minWidth: "400px", cursor: "pointer"  }}
         onClick={() => handleRoute(card.route)} 
      >
        <div className="row g-0">
          <div className="col-12 col-md-4 ">
            <img
              src={card.img}
              className="img-fluid rounded-start"
              alt={card.title}
            />
          </div>
          <div className="col-12 col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">
                <b style={{ color:"red"}}>{card.title}</b>
              </h5>
              <p className={`card-text ${styles.txtCatgry}`}>{card.text}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* <Carousel  indicators controls>
      {cardData.map((card) => (
        <Carousel.Item key={card.id}>
          <div className={`card mb-3 mx-auto ${styles.card}`} style={{ maxWidth: "400px" }}>
            <div className="row g-0">
              <div className="col-md-4 col-sm-4">
                <img
                  src={card.img}
                  className="img-fluid rounded-start"
                  alt={card.title}
                />
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="card-body">
                  <h5 className="card-title"><b>{card.title}</b></h5>
                  <p className="card-text">{card.text}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>  */}

      </div>
    
     </>

    );
}

export default TrendProdCSlider;


{/* <p className="card-text">
                    <small className="text-muted">{card.updated}</small>
                  </p> */}