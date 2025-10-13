import { Link } from "react-router";

export default function LoginButton() {
    return (
        <div id="login-button">
            <Link to="/login">
                <button className="border-2 border-[#9872F0] text-[#ffffff] font-semibold text-base rounded-full px-25 py-1.5 bg-transparent transition duration-300 hover:bg-[#9872F0] hover:text-white active:scale-95">
                    Log in
                </button>
            </Link>
        </div>
    );
}

