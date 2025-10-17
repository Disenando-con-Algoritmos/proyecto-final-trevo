import { Link } from "react-router";

export default function CreateButton() {
    return (
        <div id="create-button">
            <Link to="/register">
                <button className="bg-[#A480FF] text-white font-[poppins] text-base rounded-full px-15 py-2.5 transition duration-300 hover:bg-[#956CFF] active:scale-95">
                    Create account
                </button>
            </Link>
        </div>
    );
}
