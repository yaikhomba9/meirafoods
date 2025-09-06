import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header =()=>{


    const [isHamburgerActive, setHamburgerActive] = useState(false);
    const [isCollapsed, setCollapsed] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

        useEffect(() => {
            const handleResize = () => {
            const isLarge = window.innerWidth >= 992;
            setIsLargeScreen(isLarge);

            if (!isLarge) {
              // Auto-collapse menu on smaller screens
              setCollapsed(true);
              setHamburgerActive(false);
            }
            };

            window.addEventListener('resize', handleResize);

            // Initial run to set state correctly
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }, []);

 


 const toggleHamburgerMenu = () => {
    setCollapsed(!isCollapsed);
    setHamburgerActive(prev => !prev);
  };

  const toggleDropdown = (e) => {
  e.preventDefault();
  if (isLargeScreen) {
    setDropdownOpen(prev => !prev);
  }
};
   const handleRoute = (route) => {
    navigate(route);
  };

  const navigate = useNavigate();

      return (

        <>

         <nav className={`navbar navbar-expand-lg navbar-light bg-light shadow ${styles.navbarSticky} `}>
           <div className="container-fluid">
          
             <a className={`navbar-brand ${styles.navbar}`}  onClick={(e) => {e.preventDefault(); handleRoute('home'); toggleDropdown()}}>
               <img className={styles.meirafoodLogo} src={`${process.env.PUBLIC_URL}/images/meira_foods_logo.png`} alt="Meira Foods Logo" />
            </a> 
            <button
            className={`navbar-toggler collapsed ${styles.hamburgerToggle} ${isHamburgerActive ? 'active' : ''}`}
            type="button"
            onClick={toggleHamburgerMenu}
            aria-controls="navbar-content"
            aria-expanded={!isCollapsed}
          >
           <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          
          </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'} ${styles.navBarCol}`} id="navbar-content">
               <div className={`row ${styles.hdrrow}`}>
               {/* <div className='col-lg-2'></div> */}
               <div className={`col-lg-12   d-flex justify-content-center  `}>
                    <ul className={`navbar-nav mr-auto mb-2 mb-lg-0 ${styles.ullink}`}>
                    <li className={`nav-item ${styles.hdrItem}`}>
                    <span className={`nav-link active ${styles.navlinkItem}`} onClick={(e) => {handleRoute('/'); toggleHamburgerMenu();}}>
                    <p className={styles.globalFont}><b>Home</b></p>
                    </span>
                    </li>
                   <li className={`nav-item ${styles.hdrItem}`}>
                    <span className="nav-link active" onClick={(e) => {handleRoute('/home'); toggleHamburgerMenu();}}>
                    <p className={styles.globalFont}><a href='#services'><b>Services</b></a></p>
                    </span>
                    </li>
                    <li className={`nav-item ${styles.hdrItem}`}>
                    <span className="nav-link active " onClick={(e) => {handleRoute('/home');  toggleHamburgerMenu();}}>
                    <p className={styles.globalFont}><a href='#testimonial'><b>Testimonial</b></a></p>
                    </span>
                    </li>
                   <li className={`nav-item ${styles.hdrItemlogo}`}>
                    <span className="nav-link active " onClick={(e) => {handleRoute('/home');  toggleHamburgerMenu();}}>
                          <img className={styles.meirafoodLogo} src={`${process.env.PUBLIC_URL}/images/meira_foods_logo.png`} alt="Meira Foods Logo" />
                    </span>
                    </li>
                    <li className={`nav-item ${styles.hdrItem}`}>
                    <span className="nav-link active " onClick={(e) => { handleRoute('/home'); toggleHamburgerMenu();}}>
                    <p className={styles.globalFont}><a href='#teams'><b>Team</b></a></p>
                    </span>
                    </li> 
                    <li className={`nav-item ${styles.hdrItem}`}>
                    <span className="nav-link active " onClick={(e) => {handleRoute('/product'); toggleHamburgerMenu();}}>
                    <p className={styles.globalFont}><b>Product</b></p>
                    </span>
                    </li>
                    <li className={`nav-item ${styles.hdrItem}`}>
                    <span className="nav-link active " onClick={(e) => {handleRoute('/home'); toggleHamburgerMenu();}}>
                    <p className={styles.globalFont}><a href='#contact'><b>Contact</b></a></p>
                    </span>
                    </li>
                    </ul>

               </div>
               {/* <div className='col-lg-2'></div> */}


               </div>
              
            </div>
           </div>   
         </nav>
         
        </>
      );

}

export default Header;