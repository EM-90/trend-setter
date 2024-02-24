import { FaYoutube, FaFacebook, FaInstagram} from 'react-icons/fa'

export const Footer = () => {
    return (
        <div>
            <p>&copy; TrendSetter 2024</p>
            <div className="soMe-container">
                <FaYoutube/>
                <FaInstagram/>
                <FaFacebook/>
            </div>
        </div>
    )
}
