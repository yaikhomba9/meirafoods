import React,{useState} from 'react';
import styles from '../css/Teams.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';





const Teams =()=>{


    return(

        <>


         <div id="teams" className={styles.teamsBodyDiv}>
              <div className={`container ${styles.cont}`}>
                  <div className={styles.teamsMainTitle}>
                    <h2>Meet the team</h2>
                 </div>
                <div className={`row`}>
                <div className='col-lg-6'>
                <div className='row d-flex justify-content-center'>
                 <div className={`col-lg-6 col-md-3 col-sm-6 ${styles.teamProfile}`}>
                        <div className={styles.thumbnail}>
                        <img className={styles.teamImage} src={`${process.env.PUBLIC_URL}/images/cheTalu.webp`} alt='...' />
                       {/*  <FontAwesomeIcon className={styles.teamImage} icon={faUserCircle}/> */}
                            <div className={styles.teamCaption}>
                                <h4>Hanjabam Shubhra Devi</h4>
                                <p>- Managing Director <a href="https://linkedin.com/in/shubhra-hanjabam-foodpreneur-16346091" target="_blank" rel="noopener noreferrer">
                                   <FontAwesomeIcon className={styles.socialCon} icon={faLinkedin} />
                                </a></p>
                                
                            </div>
                        </div>
                    </div>

                    <div className={`col-lg-6 col-md-3 col-sm-6 ${styles.teamProfile}`}>
                        <div className={styles.thumbnail}>
                             <img className={styles.teamImage} src={`${process.env.PUBLIC_URL}/images/akash_img.webp`} alt='...' /> 
                       {/*  <FontAwesomeIcon className={styles.teamImage} icon={faUserCircle}/> */}
                            <div className={styles.teamCaption}>
                                <h4>Ch. Akash Sharma</h4>
                                <p>- Director | Marketer & Trainer <a href="https://linkedin.com/in/ch-akash-sharma-89ba92271" target="_blank" rel="noopener noreferrer">
                                   <FontAwesomeIcon className={styles.socialCon} icon={faLinkedin} />
                                </a></p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>

                <div className={`col-md-6 col-sm-6 ${styles.teamProfileall}`}>
                        <div className={styles.thumbnail}>
                         <img className={styles.teamImageAll} src={`${process.env.PUBLIC_URL}/images/meira_teams_img.webp`} alt='...' /> 
                          
                            <div className={styles.teamCaption}>
                                <h4>Meira Team</h4>
                            </div>
                        </div>
                    </div>
                   

                 </div>

              </div>
             
           </div>


        </>
    );
}

export default Teams;