import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Settings, Upload } from "lucide-react";

import { getPosts } from "../../services/supabase/postService";
import type { Posttype } from "../../types/postTypes";
import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import NavBarResponsive from "../../components/NavBarResponsive";
import authService from "../../services/supabase/authService";
import { getProfileStats, type ProfileStats } from "../../services/supabase/profileStatsService";

export default function Profile() {
    const matches = useMediaQuery("(min-width:768px)");
    const [userPosts, setUserPosts] = useState<Posttype[]>([]);
    const [profileStats, setProfileStats] = useState<ProfileStats | null>(null);
    const [loading, setLoading] = useState(true);

    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    const defaultProfilePic = "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Obtener usuario autenticado
                const authUser = await authService.getCurrentUser();
                if (!authUser || !authUser.email) {
                    console.error("No authenticated user");
                    setLoading(false);
                    return;
                }

                // Obtener estadísticas del perfil
                const stats = await getProfileStats(authUser.email);
                setProfileStats(stats);

                // Obtener todos los posts y filtrar por el usuario actual
                const allPosts = await getPosts();
                const filtered = allPosts.filter((post: Posttype) => 
                    post.username === stats?.username
                );
                setUserPosts(filtered);
                
                setLoading(false);
            } catch (err) {
                console.error("Error al cargar los datos:", err);
                setUserPosts([]);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {/* VISTA DESKTOP */}
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
                            <img src={profileStats?.profilePic || defaultProfilePic} className="w-[10vw] h-[10vw] rounded-full object-cover mr-[2vw]" />

                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-[3vw]">
                                        {/* USERNAME */}
                                        <h2 className="text-[1.8vw] font-semibold text-[#C8F442] ml-[1vw]">
                                            {loading ? "Loading..." : profileStats?.username || currentUser.username}
                                        </h2>

                                        {/* STATS */}
                                        <div id="profile-data" className="flex space-x-[4vw] ml-[5vw]">
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{profileStats?.postsCount || 0}</p>
                                                <p className="text-[1vw] text-gray-300">Posts</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{profileStats?.followers || 0}</p>
                                                <p className="text-[1vw] text-gray-300">Followers</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[1.8vw] font-bold text-[#A480FF]">{profileStats?.workouts || 0}</p>
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

                        {/* SECCIÓN DE POSTS - DESKTOP */}
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

            {/* VISTA RESPONSIVE */}
            {!matches && (
                <div id="full-page-mobile" className="w-full min-h-screen bg-cover bg-center pb-24" style={{ backgroundImage: "url(/trevo/assets/backgroundProfile.png)" }}>
                    {/* NAVBAR RESPONSIVE */}
                    <div className="fixed bottom-0 w-full z-50">
                        <NavBarResponsive />
                    </div>

                    {/* CONTENIDO */}
                    <div className="flex flex-col text-white font-[neulis] p-5">
                        {/* CONTENEDOR NEGRO */}
                        <div className="fixed top-0 left-0 w-full bg-black rounded-b-[100px] h-[250px] p-4 flex items-start">
                            {/* ICONOS */}
                            <div className="absolute top-4 right-4 flex space-x-4 mt-10">
                                <Upload size={20} color="#C8F442" />
                                <Settings size={20} color="#C8F442" />
                            </div>

                            {/* FOTO */}
                            <img src={profileStats?.profilePic || defaultProfilePic} className="w-[22vw] h-[22vw] rounded-full object-cover mr-4 mt-22 ml-6"  />

                            <div className="flex flex-col mt-1">
                                {/* USERNAME */}
                                <p className="text-[5.5vw] font-semibold text-center mt-8 mr-18 mb-4 text-[#C8F442]">
                                    {loading ? "Loading..." : profileStats?.username || currentUser.username}
                                </p>

                                {/* STATS */}
                                <div className="flex space-x-5 mt-8">
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{profileStats?.postsCount || 0}</p>
                                        <p className="text-[3vw] text-gray-300">Posts</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{profileStats?.followers || 0}</p>
                                        <p className="text-[3vw] text-gray-300">Followers</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[4vw] font-bold text-[#A480FF]">{profileStats?.workouts || 0}</p>
                                        <p className="text-[3vw] text-gray-300">Workouts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECCIÓN DE POSTS - MOBILE */}
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
