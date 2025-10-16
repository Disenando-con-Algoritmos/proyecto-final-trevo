import NavBar from "../../components/NavBar";

import background from "./background.png";

export default function Profile() {
    return (
        <div id="full-page" className="h-screen w-screen relative" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div id="navbar" className="fixed top-0 left-0 h-full w-[330px]">
                <NavBar />
            </div>

            <div id="content" className="ml-[330px] flex flex-col p-4 min-h-screen text-white font-[neulis]">
                <div id="info" className="w-[580px] h-[200px] bg-[#1E1E1E] p-4">
                    <h1>hola</h1>
                </div>
            </div>
        </div>
    );
}
