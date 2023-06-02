import { FaWhatsapp } from "react-icons/fa"
function Whatsapp({ scroll }) {
    return (
        scroll > 780 &&
        <div className="fixed bottom-12 right-2.5 md:bottom-20 md:right-5 z-50">
            <a href="https://wa.me/+905465359448" target={"_blank"} rel="noreferrer">
                <div className="bg-[#25D366] hover:bg-[#25D366]/80 text-white rounded-full p-2 animate-fadeIn transition-all duration-300">
                    <FaWhatsapp size={32} />
                </div>
            </a>
        </div>

    )
}

export default Whatsapp