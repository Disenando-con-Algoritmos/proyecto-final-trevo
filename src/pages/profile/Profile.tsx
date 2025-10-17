import { Upload, Settings } from "lucide-react";

import NavBar from "../../components/NavBar";

export default function Profile() {
    return (
        <div id="full-page" className="fixed top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/trevo/assets/backgroundProfile.png)" }}>
            <div id="navbar" className="fixed top-0 left-0 h-full w-[20%] min-w-[280px] max-w-[330px]">
                <NavBar />
            </div>

            <div id="content" className="ml-[20%] flex flex-col p-6 min-h-screen text-white font-[neulis] transition-all duration-300">
                <div id="info" className="flex items-center bg-[#000000] p-[2vw] rounded-b-[2vw] h-[200px] w-[calc(100%-300px)] fixed top-0 m-0 z-20">
                    <img src="/trevo/assets/profilepic.png" alt="profile" className="w-[10vw] h-[10vw] rounded-full object-cover mr-[2vw]" />

                    <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-[3vw]">
                                <h2 className="text-[1.8vw] font-semibold text-[#C8F442] ml-[1vw]">sophiarose</h2>

                                <div id="profile-data" className="flex space-x-[4vw] ml-[5vw]">
                                    <div className="text-center">
                                        <p className="text-[1.8vw] font-bold text-[#A480FF]">2</p>
                                        <p className="text-[1vw] text-gray-300">Posts</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[1.8vw] font-bold text-[#A480FF]">13</p>
                                        <p className="text-[1vw] text-gray-300">Followers</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[1.8vw] font-bold text-[#A480FF]">2</p>
                                        <p className="text-[1vw] text-gray-300">Workouts</p>
                                    </div>
                                </div>
                            </div>

                            <div id="icons" className="flex items-center space-x-[2vw] mr-[2vw]">
                                <Upload size={30} color="#C8F442" />
                                <Settings size={30} color="#C8F442" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
