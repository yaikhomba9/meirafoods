import React from 'react';
import styles from '../css/TrendProdSlider.module.css'
import { Carousel } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const TrendProdCSlider=()=>{



   const handleRoute = (route) => {
      navigate(route);
    };
  
     const navigate = useNavigate();


   const cardData = [
    {
      id: 'product',
      img: `${process.env.PUBLIC_URL}/images/imgland1.png`,
      title: "Fish (Rohu/Rou) Pickle",
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
      title: "Tamarind Candy",
      text: "Sweet-sour tamarind candy—classic Indian flavour you’ll keep reaching for.",
       route: "/product/candy",  
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/images/kiwi_img.png`,
      title: "Kiwi Jam",
      text: "Crisp outside, soft inside — our Pineapple Cookies blend buttery goodness with the sweet tropical flavor of ripe pineapples.",
      updated: "Last updated 20 mins ago",
      route: "/product/jam" ,  
    },
    {
      id: 7,
      img: `${process.env.PUBLIC_URL}/images/Pinapple_cookies.png`,
      title: "Pineapple Cookies",
      text: "Crisp outside, soft inside — our Pineapple Cookies blend buttery goodness with the sweet tropical flavor of ripe pineapples.",
      route: "/product/all" ,  
    },
  ];

    return(

    <>
    <div className={`${styles.cardDiv}`}>
    <div><h3><b><u>Customer Favorites</u></b></h3></div>
  <div className={`scroll-wrapper ${styles.scrollWrapper}`}>
  <div className={`scroll-content ${styles.scrollContent}`}>
    {cardData.concat(cardData).map((card) => (
      <div
        key={card.id + Math.random()} // avoid duplicate keys
        className={`card mb-3 mx-2 ${styles.carddiv1}`}
        style={{ maxWidth: "400px", minWidth: "400px" }}
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
                <b>{card.title}</b>
              </h5>
              <p className="card-text">{card.text}</p>
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