import NavBar from "../../components/NavBar";

import background from "./background.png";

export default function Profile() {
    return (
        <div id="full-page" className="h-screen w-screen relative" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div id="navbar" className="fixed top-0 left-0 h-full w-[330px]">
                <NavBar />
            </div>

            <div id="content" className="ml-[330px] flex flex-col p-4 min-h-screen text-white font-[neulis]">
                <div id="info" className="w-[1406px] h-[280px] bg-[#000000] p-4 ml-[-46px] mt-[-15px] rounded-b-[35px]">
                </div>
            </div>
        </div>
    );
}
