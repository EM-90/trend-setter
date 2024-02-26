import { FaYoutube, FaFacebook, FaInstagram} from 'react-icons/fa'
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>&copy; TrendSetter 2024</p>
            <div className={styles.soMeContainer}>
                <FaYoutube size={32}/>
                <FaFacebook size={32}/>
                <FaInstagram size={32}/>
            </div>
        </div>
    )
}
