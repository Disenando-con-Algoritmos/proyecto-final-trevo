
import { Link } from "react-router";

import ContinueButton from "../../components/ContinueButton";

export default function Onboarding1 () {
    return(
        <div id="full-page" className="h-screen flex items-center justify-center">
            <div id="boarding-container" className="w-120 h-150 bg-[#9872F0] rounded-3xl shadow-lg relative">
                <div id="boarding2-continer" className="w-120 h-70 bg-black rounded-3xl absolute bottom-0 flex flex-col items-center justify-start gap-5 px-8 pt-20">
                    <h1 className="text-3xl">Be a fitter version</h1>
                    <h5 className="text-sm">Post your progress and stay motivated everyday</h5>
                    <ContinueButton />
                    <p>
                        <Link className="underline" to="entrypoint">
                            Skip
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
