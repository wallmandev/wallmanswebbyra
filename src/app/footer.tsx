'use client'
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

function Footer () {
    return (
        <footer className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 justify-between gap-12">
                {/* Brand & Description */}
                <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-2xl font-bold text-gray-900 font-rooftop">Christoffer Wallman</span>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">
                        Fullstack Developer & Digital Creator. Jag hjälper företag att växa genom smart teknik och kreativ design.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61577330613259" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 group">
                            <FaFacebookF className="text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/christoffer-wallman-20223623a/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300 group">
                            <FaLinkedinIn className="text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/wallmanswebbyra?igsh=MWx4emJwMGtjeG04Mg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300 group">
                            <FaInstagram className="text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
                {/* Services & Company Links */}
                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900">Tjänster</h4>
                        <ul className="space-y-4">
                            <li><a href="#tjanster" className="text-gray-600 hover:text-gray-900 transition text-lg">Webbutveckling</a></li>
                            <li><a href="#tjanster" className="text-gray-600 hover:text-gray-900 transition text-lg">UX/UI Design</a></li>
                            <li><a href="#tjanster" className="text-gray-600 hover:text-gray-900 transition text-lg">E-handel</a></li>
                            <li><a href="#tjanster" className="text-gray-600 hover:text-gray-900 transition text-lg">SEO</a></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900">Länkar</h4>
                        <ul className="space-y-4">
                            <li><a href="#hem" className="text-gray-600 hover:text-gray-900 transition text-lg">Hem</a></li>
                            <li><a href="#om-oss" className="text-gray-600 hover:text-gray-900 transition text-lg">Om mig</a></li>
                            <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition text-lg">Portfolio</a></li>
                            <li><a href="mailto:kontakt@wallmanswebbyra.se" className="text-gray-600 hover:text-gray-900 transition text-lg">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-base mb-4 md:mb-0">© 2025 WallmansWebbyrå. Alla rättigheter reserverade.</p>
               
            </div>
        </div>
    </footer>
    )
}

export default Footer;