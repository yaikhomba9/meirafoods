import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from '@react-spring/web';
import Style from '../css/ImageSlider.module.css';


const ImageSlider =()=>{


      const Images = [
        { id: "1", imgURL: `${process.env.PUBLIC_URL}/images/meira_text_img.webp`, imgAlt: "Image 3",  context: "Image" },
        { id: "2", imgURL: `${process.env.PUBLIC_URL}/images/meirafoods_img_10.webp`, imgAlt: "Image 4",  context: "Image" },
        { id: "3", imgURL: `${process.env.PUBLIC_URL}/images/meirafoods_img_11.webp`, imgAlt: "Image 1", context: "Image" },
        { id: "4", imgURL: `${process.env.PUBLIC_URL}/images/meirafoods_img_12.webp`, imgAlt: "Image 2",  context: "Image" },
        { id: "5", imgURL: `${process.env.PUBLIC_URL}/images/meirafoods_img_14.webp`, imgAlt: "Image 5",  context: "Image" },
        { id: "6", imgURL: `${process.env.PUBLIC_URL}/images/meirafood_coverpage.webp`, imgAlt: "Image 6",  context: "Image" }
    ];


    // State to keep track of the current index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);


     // Go to next image
    const nextImage = () => {
        setTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };

    // Go to previous image
    const prevImage = () => {
        setTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
    };

    // Auto change image every 3 seconds
   /*  useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // change image every 5 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);  */// Empty dependency array means this effect runs only once when the component is mounted

    // Listen for the end of the transition to remove the 'transitioning' state
    useEffect(() => {
        if (!transitioning) return;

        const timeout = setTimeout(() => {
            setTransitioning(false);
        }, 5000); // matches the duration of the transition

        return () => clearTimeout(timeout);
    }, [transitioning]);



   /*  const props = useSpring({
        transform: "scale(1.2)", // Define zoom-in scale
        from: { transform: "scale(0.98)" }, // Start from normal size
        reset: true, // Ensure the animation restarts
        config: { duration: 5000, */
          /*   tension: 150, // Lower tension for slower, smoother animation
            friction: 30, // Higher friction for smooth deceleration
            precision: 0.09, // Precision for smoothness */
         /* }, // Zoom effect duration
      }); ...props,*/

    return (

        <>

         <div className={Style.slidercontainer}>

            {Images.map((image, index) => (
                <animated.img
                    key={index}
                    src={image.imgURL}
                    alt={image.imgAlt}
                    className={`${Style.sliderimage} ${index === currentIndex ? Style.active : ''}`}
                    style={{
                        transform: transitioning && index !== currentIndex ? 'translateX(100%)' : 'translateX(0)',
                        
                        //transformOrigin: 'center center', // Ensures zooming happens from the center of the image
                       
                    }}
                />
            ))}


             {/*  <div className={Style.overlayText}>
                    <h1 >MEIRA FOODS</h1>
                    <p>Empowering women through food & tradition</p>
                </div> */}

             {/* Navigation buttons */}
            <button onClick={prevImage} className={Style.prevbutton}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <button onClick={nextImage} className={Style.nextbutton}><FontAwesomeIcon icon={faChevronRight}/></button>


         </div>


        </>
    );

}


export default ImageSlider;