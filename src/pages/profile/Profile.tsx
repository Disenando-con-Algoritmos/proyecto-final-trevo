import { Upload, Settings } from "lucide-react";

import NavBar from "../../components/NavBar";

import background from "./background.png";

export default function Profile() {
    return (
        <div id="full-page" className="h-screen w-screen relative" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div id="navbar" className="fixed top-0 left-0 h-full w-[330px]">
                <NavBar />
            </div>
            <div id="content" className="ml-[330px] flex flex-col p-4 min-h-screen text-white font-[neulis]">
                <div id="info" className="w-[1406px] h-[280px] bg-[#000000] p-8 ml-[-46px] mt-[-15px] rounded-b-[35px] flex items-center">
                    <img src="/trevo/assets/profilepic.png" alt="profile" className="w-[150px] h-[150px] rounded-full object-cover mr-[20px] ml-15" />

                    <div className="flex flex-col">
                        <div className="flex items-center space-x-12">
                            <h2 className="text-[28px] font-semibold text-[#C8F442] ml-6">sophiarose</h2>

                            <div id="profile-data" className="flex space-x-16 ml-40">
                                <div className="text-center">
                                    <p className="text-[28px] font-bold text-[#A480FF]">2</p>
                                    <p className="text-[18px] text-gray-300">Posts</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[28px] font-bold text-[#A480FF]">13</p>
                                    <p className="text-[18px] text-gray-300">Followers</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[28px] font-bold text-[#A480FF]">2</p>
                                    <p className="text-[18px] text-gray-300">Workouts</p>
                                </div>
                            </div>
                            <div id="icons" className="flex items-center space-x-6 ml-3">
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
