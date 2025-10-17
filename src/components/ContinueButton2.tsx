import { Link } from "react-router";

export default function ContinueButton() {
    return (
        <div id="continue-button">
            <Link to="/onboarding2">
                <button className="bg-[#A480FF] text-white font-[poppins] rounded-full px-15 py-1.5 transition duration-300 hover:bg-[#956CFF] active:scale-95">
                    Continue
                </button>
            </Link>
        </div>
    );
}
