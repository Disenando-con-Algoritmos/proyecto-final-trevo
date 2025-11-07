import { Upload, Settings } from "lucide-react";
import { useMediaQuery } from "@mui/material";

import NavBar from "../../components/NavBar";
import NavBarResponsive from "../../components/NavBarResponsive";

export default function Profile() {

    const matches = useMediaQuery("(min-width:768px)");

    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <>
            {/*  VISTA DESKTOP  */}
            {matches && (
                <div
                    id="full-page"
                    className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/trevo/assets/backgroundProfile.png)" }}
                >
                    {/* NAVBAR */}
                    <div id="navbar" className="fixed top-0 left-0 h-full w-[20%] min-w-[280px] max-w-[330px]">
                        <NavBar />
                    </div>

                    {/* CONTENIDO */}
                    <div id="content" className="ml-[20%] flex flex-col p-6 min-h-screen text-white font-[neulis]">

                        {/* CONTENEDOR NEGRO */}
                        <div
                            id="info"
                            className="flex items-center bg-black p-[2vw] rounded-b-[2vw] h-[200px] left-[300px] right-0 w-auto fixed top-0 m-0 z-20"
                        >
                            {/* FOTO */}
                            <img
                                src={currentUser.profilePic}
                                alt="profile"
                                className="w-[10vw] h-[10vw] rounded-full object-cover mr-[2vw]"
                            />

                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-[3vw]">

                                        {/* USERNAME */}
                                        <h2 className="text-[1.8vw] font-semibold text-[#C8F442] ml-[1vw]">
                                            {currentUser.username}
                                        </h2>

                                        {/* STATS */}
                                        <div id="profile-data" className="flex space-x-[4vw] ml-[5vw]">
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{currentUser.posts}</p>
                                                <p className="text-[1vw] text-gray-300">Posts</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{currentUser.followers}</p>
                                                <p className="text-[1vw] text-gray-300">Followers</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{currentUser.workouts}</p>
                                                <p className="text-[1vw] text-gray-300">Workouts</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ICONOS */}
                                    <div id="icons" className="flex items-center space-x-[2vw] mr-[2vw]">
                                        <Upload size={30} color="#C8F442" />
                                        <Settings size={30} color="#C8F442" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/*  VISTA RESPONSIVE  */}
            {!matches && (
                <div
                    id="full-page-mobile"
                    className="w-full min-h-screen bg-cover bg-center pb-24"
                    style={{ backgroundImage: "url(/trevo/assets/backgroundProfile.png)" }}
                >

                    {/* NAVBAR RESPONSIVE */}
                    <div className="fixed bottom-0 w-full z-50">
                        <NavBarResponsive />
                    </div>

                    {/* CONTENIDO */}
                    <div className="flex flex-col text-white font-[neulis] p-4">

                        {/* CONTENEDOR NEGRO */}
                        <div className="absolute top-0 left-0 w-full bg-black rounded-b-[100px] h-[250px] p-4 flex items-start">

                            {/* ICONOS */}
                            <div className="absolute top-4 right-4 flex space-x-4 mt-10">
                                <Upload size={20} color="#C8F442" />
                                <Settings size={20} color="#C8F442" />
                            </div>

                            {/* FOTO */}
                            <img
                                src={currentUser.profilePic}
                                className="w-[22vw] h-[22vw] rounded-full object-cover mr-4 mt-22 ml-6"
                            />

                            <div className="flex flex-col mt-1">

                                {/* USERNAME */}
                                <p className="text-[4vw] font-semibold text-center mt-10 mr-18 mb-4 text-[#C8F442]">
                                    {currentUser.username}
                                </p>

                                {/* STATS */}
                                <div className="flex space-x-5 mt-8">
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{currentUser.posts}</p>
                                        <p className="text-[3vw] text-gray-300">Posts</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{currentUser.followers}</p>
                                        <p className="text-[3vw] text-gray-300">Followers</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{currentUser.workouts}</p>
                                        <p className="text-[3vw] text-gray-300">Workouts</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
