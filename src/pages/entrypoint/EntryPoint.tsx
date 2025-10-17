import CreateButton from "../../components/CreateButton";
import LoginButton from "../../components/LoginButton";

export default function Entrypoint () {
    return (
        <div id="full-page" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(/trevo/assets/background.png)"}}>
            <div id="entry-container" className="w-120 h-133 bg-[#121212] rounded-3xl shadow-lg relative">
                <h1 className="text-[60px] text-center p-8 font-[neulis]">Welcome to</h1>
                <h2 className="text-[60px] text-center text-[#CAD83B] -mt-[60px] font-[neulis]">Trevo</h2>
                <img src="/trevo/assets/logoentrypoint.png" alt="logo ilustration" className="h-15 w-15 mx-auto mt-[20px]" />
                <h1 className="text-[25px] w-80 text-center leading-[34px] mx-auto mt-[30px] font-[poppins]">Where fitness meets friends</h1>

                <div className="mt-6 flex flex-col items-center gap-[10px]">
                    <CreateButton />
                    <LoginButton />
                </div>
            </div>
        </div>
    );
}
