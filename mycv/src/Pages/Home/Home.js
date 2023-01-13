import styles from './Home.module.css'
import Header from "../Header/Header";

const Home = () => {
    return (
            <div className={styles.mainBox}>
                <div className={styles.halfLeftBox}>
                </div>
                <div className={styles.halfRightBox} >
                    <div className={styles.innerBox}>
                        <Header />
                    </div>

                </div>
            </div>
    )
}

export default Home;