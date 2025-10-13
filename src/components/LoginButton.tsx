import { Link } from "react-router";

export default function LoginButton() {
    return (
        <div id="login-button">
            <Link to="/login">
                <button className="bg-[#A480FF] text-white font-semibold text-base rounded-full px-15 py-1.5 transition duration-300 hover:bg-[#956CFF] active:scale-95">
                    Log in
                </button>
            </Link>
        </div>
    );
}
