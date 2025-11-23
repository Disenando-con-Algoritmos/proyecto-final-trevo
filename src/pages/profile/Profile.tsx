import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Settings, LogOut } from "lucide-react";

import { getProfilePost } from "../../services/profilepostServices";
import type { Posttype } from "../../types/profilepostTypes";
import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import NavBarResponsive from "../../components/NavBarResponsive";
export default function Profile() {
    const matches = useMediaQuery("(min-width:768px)");
    const [userPosts, setUserPosts] = useState<Posttype[]>([]);
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    const currentUserId = currentUser?.id ?? null;
    const currentUsername = currentUser?.username ?? "";
    const defaultProfilePic = "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg";
    /* -------------------------- NAVBAR SCROLL EN RESPONSIVE -------------------------- */
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
        if (matches) return;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY === 0) {
                setIsSmall(false);
            } else {
                setIsSmall(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [matches]);
    /* ------------------------------ FETCH POST ------------------------------ */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allPosts = await getProfilePost();
                const filtered = allPosts.filter(
                    (post: Posttype) =>
                        post.username === currentUsername ||
                        String(post.userId) === String(currentUserId)
                );
                setUserPosts(filtered);
            } catch (err) {
                console.error("Error al cargar los posts:", err);
                setUserPosts([]);
            }
        };
        fetchData();
    }, [currentUserId, currentUsername]);
    return (
        <>
            {/* --------------------------- VISTA DESKTOP --------------------------- */}
            {matches && (
                <div id="full-page" className="fixed top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/trevo/assets/backgroundProfile.png)" }}>
                    {/* NAVBAR */}
                    <div id="navbar" className="fixed top-0 left-0 h-full w-[20%] min-w-[280px] max-w-[330px]">
                        <NavBar />
                    </div>
                    {/* CONTENIDO */}
                    <div id="content" className="ml-[20%] flex flex-col p-6 min-h-screen text-white font-[neulis]">
                        {/* CONTENEDOR NEGRO */}
                        <div id="info" className="flex items-center bg-black p-[2vw] rounded-b-[2vw] h-[200px] left-[300px] right-0 w-auto fixed top-0 m-0 z-20">
                            {/* FOTO */}
                            <img src={currentUser.profilePic || defaultProfilePic} className="w-[10vw] h-[10vw] rounded-full object-cover mr-[2vw]" />
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-[3vw]">
                                        {/* USERNAME */}
                                        <h2 className="text-[1.8vw] font-semibold text-[#C8F442] ml-[1vw]">{currentUser.username}</h2>
                                        {/* STATS */}
                                        <div id="profile-data" className="flex space-x-[4vw] ml-[5vw]">
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{userPosts.length}</p>
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
                                        <Settings size={30} color="#C8F442" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* POSTS DESKTOP */}
                        <div className="mt-[170px] ml-[15vw] overflow-y-auto max-h-[70vh] pr-2 ">
                            {userPosts.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 max-w-2xl">
                                    {userPosts.map((post: Posttype) => (
                                        <PostCard key={post.id} post={post} currentUser={currentUser} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-400 mt-10">
                                    <p className="text-lg">No posts yet</p>
                                    <p className="text-sm">Share your first workout!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* --------------------------- VISTA RESPONSIVE --------------------------- */}
            {!matches && (
                <div id="full-page-mobile" className="w-full min-h-screen bg-cover bg-center pb-24" style={{ backgroundImage: "url(/trevo/assets/backgroundProfile.png)" }}>
                    {/* NAVBAR RESPONSIVE */}
                    <div className="fixed bottom-0 w-full z-50">
                        <NavBarResponsive />
                    </div>
                    {/* CONTENIDO */}
                    <div className="flex flex-col text-white font-[neulis] p-5">
                        {/* ---------- NAVBAR CON SCROLL ANIMADO ---------- */}
                        <div
                            className={`
                                fixed top-0 left-0 w-full bg-black rounded-b-[100px]
                                p-4 flex items-start z-40 transition-all duration-300
                                ${isSmall ? "h-[120px]" : "h-[250px]"}
                            `}
                        >
                            {/* ICONOS */}
                            <div
                                className={`
        absolute left-4 transition-all duration-300
        ${isSmall ? "top-3" : "top-4 mt-10"}
    `}
                            >
                                <Settings size={20} color="#C8F442" />
                            </div>

                            <div
                                className={`
        absolute right-4 transition-all duration-300
        ${isSmall ? "top-3" : "top-4 mt-10"}
    `}
                            >
                                <LogOut size={20} color="#C8F442" />
                            </div>
                            {/* FOTO */}
                            <img
                                src={currentUser.profilePic || defaultProfilePic}
                                className={`
                                    rounded-full object-cover mr-4 transition-all duration-300
                                    ${isSmall ? "w-[12vw] h-[12vw] mt-4 ml-6" : "w-[22vw] h-[22vw] mt-22 ml-6"}
                                `}
                            />
                            <div className="flex flex-col mt-1 transition-all duration-300">
                                {/* USERNAME */}
                                <p
                                    className={`
                                        font-semibold text-center text-[#C8F442] transition-all duration-300
                                        ${isSmall ? "text-[4vw] mt-4" : "text-[5.5vw] mt-8 mr-18 mb-4"}
                                    `}
                                >
                                    {currentUser.username}
                                </p>
                                {/* STATS */}
                                <div
                                    className={`
                                        flex space-x-5 transition-all duration-300
                                        ${isSmall ? "mt-2" : "mt-8"}
                                    `}
                                >
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{userPosts.length}</p>
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
                        {/* POSTS RESPONSIVE */}
                        <div className="mt-[240px] mb-150">
                            {userPosts.length > 0 ? (
                                <div className="mb-30 flex flex-col items-center max-h-[70vh] mt-4 px-2">
                                    {userPosts.map((post: Posttype) => (
                                        <PostCard key={post.id} post={post} currentUser={currentUser} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center justify-center text-gray-400 mt-10">
                                    <p className="text-lg">No posts yet</p>
                                    <p className="text-sm">Share your first workout!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
