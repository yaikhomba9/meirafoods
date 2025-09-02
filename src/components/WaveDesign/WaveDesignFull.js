import React from "react";

import styles from '../css/WaveDesign.module.css';


const WaveDesignFull=({children})=>{

    return(
        <>
        <div className={styles.waveWrapper1}>
        <div className={styles.waveBg1}>
        {/* Layer 1 */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`${styles.wavea} ${styles.waveb}`}
        >
        <path
        fill="#E71D26"
        d="M0,160L60,165C120,170,240,180,360,186.7C480,193,600,195,720,181.3C840,168,960,140,1080,133.3C1200,127,1320,141,1380,149.3L1440,160L1440,320L0,320Z"
        />
        </svg>

        {/* Layer 2 */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`${styles.waveb} ${styles.wavec}`}
        >
        <path
        fill="#d66b70ff"
        fillOpacity="0.8"
        d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,170.7C840,171,960,181,1080,197.3C1200,213,1320,235,1380,245.3L1440,256L1440,320L0,320Z"
        />
        </svg>

        {/* Layer 3 */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`${styles.wavea} ${styles.wavec}`}
        >
        <path
        fill="#E71D26"
        fillOpacity="0.6"
        d="M0,288L60,282.7C120,277,240,267,360,256C480,245,600,235,720,229.3C840,224,960,224,1080,229.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L0,320Z"
        />
        </svg>
        </div>

        <div className={styles.waveContent1}>{children}</div>
        </div>

        </>
    );
}

export default WaveDesignFull;