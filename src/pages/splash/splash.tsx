import { Link } from "react-router";
import backgroundSplash from "/assets/backgroundsplash.png";
import logo from "/assets/logo.png";

export default function Splash() {
    return (
        <Link to="/entrypoint">
            <div className="w-screen h-screen relative cursor-pointer">
                <div className="absolute inset-0 bg-black">
                    <img src={backgroundSplash} alt="Fondo" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
                </div>
            </div>
        </Link>
    );
}
