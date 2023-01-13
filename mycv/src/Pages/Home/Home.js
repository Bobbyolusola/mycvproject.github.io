import styles from './Home.module.css'
import Header from "../Header/Header";
import image from "../../Images/image.jpg";

const Home = () => {

    let imgStyle = {
        width: "260px",
        height: "260px",
        borderRadius: "150px"
    }
    return (
            <div className={styles.mainBox}>
                <div className={styles.halfLeftBox}>
                    <div className={styles.InnerHalfLeftBox}>
                        <div className={styles.imgBox}>
                            <div className={styles.eclipseHome}>
                                <img src={image} alt='photo' style={imgStyle}/>
                            </div>

                            <div className={styles.headerName}>
                                    Bobby Olusola
                            </div>
                            <div className={styles.subHeaderName}>
                                    Front-end Web Developer
                            </div>
                            <div className={styles.secondSubHeaderName}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum, eius perferendis quos ut voluptatem.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita in incidunt nostrum quo ratione rem.
                                    Lorem ipsum dolor sit amet, conse
                            </div>

                        </div>
                        <div className={styles.basicInfoBox}></div>

                    </div>
                </div>

                <div className={styles.halfRightBox} >
                    <div className={styles.innerBox}>
                        <div className={styles.headerBox}>
                            <Header />
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Home;