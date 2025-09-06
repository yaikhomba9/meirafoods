import React,{useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from '../pages/css/Product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesSquare , faUserCircle} from '@fortawesome/free-solid-svg-icons';
import Pickle from '../components/Product/Pickle';
import Jam from '../components/Product/Jam';
import Candy from '../components/Product/Candy';
import Squash from '../components/Product/Squash';
import AllProduct from '../components/Product/AllProduct';

/* const Pickle = React.lazy(() => import('../components/Product/Pickle'));
const Jam = React.lazy(()=> import('../components/Product/Jam'));
const Candy = React.lazy(()=> import('../components/Product/Candy')); */


const Product =()=>{

        const { category } = useParams(); // 👈 get param from URL
        const [showNav, setShowNav] = useState(false);
        const [activeSection, setActiveSection] = useState('all');


        const handleNavigationclose = ()=>{
             setShowNav(false);
        }

        const handleNavigation = (key) => {

            setActiveSection(key);
            setShowNav(false);
        };


   const sections = {

     all:{
       title: 'All Item',
      path:'AllProduct',
      component: <AllProduct />

    },
      pickle: {
      title: 'Pickles',
      path:'Pickle',
      component: <Pickle />
      
    },
    jam: {
      title: 'Friut Jam',
      path:'Jam',
      component : <Jam />
      
    },
    candy: {
      title: 'Fruit Candy',
      path : 'JurisdictionForm',
      component: <Candy />
      
    },
    squash: {
      title: 'Squash',
      path : 'JurisdictionForm',
      component: <Squash />
      
    }

   

     /*  contact: {
      title: 'Contact',
      content: 'Get in touch with our team. We would love to hear from you and answer any questions you may have.'
    } */
  };


  useEffect(() => {
    if (category && sections[category]) {
      setActiveSection(category);
    } else {
      setActiveSection('all'); // fallback
    }
  }, [category]);


    return(
        <>      
               <div className={styles.navPath}>
               <div className='row d-flex'>
                      <div className={`col-sm-3  col-xs-3 ${styles.tglBtn}`}>
                         <button className={`${styles.navToggle}`} onClick={() => setShowNav(!showNav)}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>

                      </div>

                      <div className={`col-sm-9 col-xs-9 ${styles.brdcrnSec}`}>
                        <div className={`container breadcrumbpmodule`}>
                                                <nav aria-label="breadcrumb">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item">
                                                        <NavLink to="/home">Home</NavLink>
                                                        </li>
                                                        <li className="breadcrumb-item active" aria-current="page">
                                                                Product Category
                                                        </li>
                                                    </ol>
                                                </nav>
                                            </div>
                        
                      </div>
                     

                        
               </div>
                
                    

                      <div className={`col-lg-12`}>
                        <div className={`row`}>
                       
                        <div className={`col-lg-2 col-md-3 col-sm-1 col-xs-1 ${styles.navH} ${showNav ? styles.showSidebar : ''}` }>

                        <nav className={styles.navigation}>
                        <div className={`d-flex justify-content-end`}>
                        <FontAwesomeIcon   className={styles.navClose} icon={faTimesSquare} onClick={() => handleNavigationclose()}/>
                        </div>

                        <div className={styles.user_icon_div}>
                          <img className={styles.meirafoodLogo} src={`${process.env.PUBLIC_URL}/images/meirafoods_img_13.jpg`} alt="Meira Foods Logo" />
                         <h6>Product Category</h6>
                        </div>
                        <ul className={styles.navList}> 
                        {Object.keys(sections).map((key) => (
                        <li key={key}>
                        <button 
                        className={`${styles.navButton} ${activeSection === key ? styles.active : ''}`}
                        onClick={() => handleNavigation(key)}
                        >
                        {sections[key].icon && <span className={styles.icon}>{sections[key].icon}</span>}
                        {sections[key].title}
                        </button>
                        </li>
                        ))}
                        </ul>
                        </nav>
                        </div>

                        <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
                        <main className={styles.mainContent}>
                        <section className={styles.descriptionSection}>
                       {/*  <h2>{sections[activeSection].title}</h2>
                        <hr className={styles.hrl}></hr> */}
                        <p className={styles.section}>{sections[activeSection].component}</p>
                        </section>
                        </main>

                        </div>


                        </div>


                     </div> 
                     </div>
                

        </>
    );
}


export default Product;