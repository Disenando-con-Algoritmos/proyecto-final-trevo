import CreateButton from "../../components/CreateButton";
import LoginButton from "../../components/LoginButton";

import background from "./background.png";
import logo from "./logo.png";

export default function Entrypoint () {
    return (
        <div id="full-page" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            <div id="entry-container" className="w-120 h-133 bg-[#121212] rounded-3xl shadow-lg relative">
                <h1 className="text-[60px] text-center p-8 font-bold">Welcome to</h1>
                <h2 className="text-[60px] font-bold text-center text-[#CAD83B] -mt-[60px]">Trevo</h2>
                <img src={logo} alt="logo ilustration" className="h-15 w-15 mx-auto mt-[30px]" />
                <h1 className="text-[30px] w-80 text-center leading-[34px] mx-auto mt-[30px]">Where fitness meets friends</h1>

                <div className="mt-6 flex flex-col items-center gap-[10px]">
                    <CreateButton />
                    <LoginButton />
                </div>
            </div>
        </div>
    );
}
