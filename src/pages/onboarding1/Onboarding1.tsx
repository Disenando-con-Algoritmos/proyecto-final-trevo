
import { Link } from "react-router";

import ContinueButton from "../../components/ContinueButton";
import DotsIndicator from "../../components/DotsIndicator";

export default function Onboarding1 () {
    return (
        <div id="full-page" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(/trevo/assets/background.png)" }}>
            <div id="boarding1-container" className="w-120 h-150 bg-[#9872F0] rounded-3xl shadow-lg relative">
                <img src="/trevo/assets/image1.png" alt="Onboarding ilustration" className="absolute top-1/3 left-65 transform -translate-x-1/2 -translate-y-1/3 w-80 h-55 object-contain" />
                <img src="/trevo/assets/image2.png" alt="Onboarding title" className="absolute left-1/2 transform -translate-x-1/2 w-70 h-auto object-contain top-[5%]" />

                <div id="boarding2-continer" className="w-120 h-70 bg-black rounded-3xl absolute bottom-0 flex flex-col items-center justify-start gap-5 px-8 pt-20">
                    <div id="dots-indicator" className="-mt-17">
                        <DotsIndicator active={0} />
                    </div>
                    <h1 className="text-3xl font-[neulis]">Be a fitter version</h1>
                    <h5 className="text-sm font-[poppins] w-[300px] leading-tight text-center">Post your progress and stay motivated every day</h5>
                    <ContinueButton />
                    <p>
                        <Link className="underline font-[poppins]" to="entrypoint">
                            Skip
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
