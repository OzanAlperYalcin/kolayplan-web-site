import { FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
function ContactButton() {
    return (
        <Link to="/iletisim" className="bg-lime-500 hover:bg-lime-500/80 p-5 flex mx-auto items-center gap-2.5 rounded-full text-white font-arista text-md md:text-3xl transition-all duration-300">
            <div className="bg-white text-lime-500 p-2.5 rounded-full"><FaPhoneAlt size={30} /></div>
            <h1>kolayplanlı olmak için hemen iletişime geç!</h1>
        </Link>
    )
}

export default ContactButton