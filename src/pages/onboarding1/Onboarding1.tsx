
import { Link } from "react-router";

import ContinueButton from "../../components/ContinueButton";

export default function Onboarding1 () {
    return(
        <div id="full-page" className="h-screen flex items-center justify-center">
            <div id="boarding-container" className="w-120 h-160 bg-[#9872F0] rounded-3xl shadow-lg relative">
                <div id="boarding2-continer" className="w-120 h-80 bg-black rounded-3xl absolute bottom-0">
                    <ContinueButton />
                    <p>
                        <Link className="underline" to="entrypoint">
                            skip
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
