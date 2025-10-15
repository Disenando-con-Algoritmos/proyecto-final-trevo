import { Bell } from "lucide-react";

import NavBar from "../../components/NavBar";

import ContainerHashtag from "./ContainerHashtag";

export default function Home () {
    return(
        <div id="home-page" className="min-h-screen m-0 p-0 flex flex-row font-[neulis] bg-[#1E1E1E]">
            <div id="navbar" className="fixed top-0 left-0 h-full w-[330px]">
                <NavBar />
            </div>
            
            <div id="info" className="fixed top-0 left-[330px] bg-[#1E1E1E] w-[580px] h-[200px] overflow-y-auto">
                <div className="flex flex-row gap-35 mt-15 mb-2 items-center">
                    <h1 className="text-[#CAD83B] text-[50px]">Hello, Sophia!</h1>
                    <Bell size={28} />
                </div>
                <div className="flex flex-row gap-2" id="containers">
                    <ContainerHashtag text="#gym"/>
                    <ContainerHashtag text="#foodie"/>
                    <ContainerHashtag text="#motivation"/>
                    <ContainerHashtag text="#runnies"/>
                </div>
            </div>
        </div>
    );
}