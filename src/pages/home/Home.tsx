import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import type { Posttype } from "../../types/postTypes";
import { getPosts } from "../../services/postServices";
import InstructorCard from "../../components/InstructorCard";
import WorkoutCard from "../../components/WorkoutCard";
import NavBarResponsive from "../../components/NavBarResponsive";

import ContainerHashtag from "./ContainerHashtag";

export default function Home() {
    const [posts, setPosts] = useState<Posttype[]>([]);
    const matches = useMediaQuery("(min-width:600px)"); 

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div id="home-page" className={`min-h-screen m-0 p-0 flex ${matches ? "flex-row" : "flex-col items-center"} font-[neulis] bg-[#1E1E1E] text-white`}>
            {matches && (
                <div id="navbar" className="fixed top-0 left-0 h-full w-[330px]">
                    <NavBar />
                </div>
            )}

            {!matches && (
                <div id="navbar-responsive" className="fixed bottom-0 left-0 w-full">
                    <NavBarResponsive />
                </div>
            )}

            <div id="info" className={`${matches ? "fixed top-0 left-[330px] w-[580px] h-[200px]" : "left-[20px] fixed w-full px-4 pt-10 pb-2"} bg-[#1E1E1E] overflow-y-auto`}>
                <div className={`flex ${matches ? "flex-row gap-35 mt-15 items-center" : "mt-5 items-center flex-row "} mb-2 items-left`}>
                    <h1 className={`text-[#CAD83B] ${matches ? "text-[50px]" : "text-[35px] text-left items-start"}`}>Hi, sophiarose!</h1>
                    <Bell  className={matches ? "" : "ml-6"} color="#CAD83B" size={matches ? 28 : 26} />
                </div>

                <div id="containers" className={`flex ${matches ? "flex-row gap-2" : "flex-wrap gap-2 mt-9"}`}>
                    <ContainerHashtag text="#gym" />
                    <ContainerHashtag text="#foodie" />
                    <ContainerHashtag text="#motivation" />
                    <ContainerHashtag text="#runnies" />
                </div>
            </div>

            <div className={`${matches ? "ml-[320px] mt-[200px] w-[600px]" : "mt-[25vh] mb-[20vh] w-[90%] mx-auto"}`}>
                {posts.map((post: Posttype) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {matches && (
                <div className="mt-25 ml-8 mr-2" id="extra-info">
                    <p className="text-[#CAD83B] text-[17px] mb-1">Instructors</p>
                    <div className="flex gap-5 flex-col">
                        <InstructorCard />
                        <InstructorCard />
                    </div>
                    <p className="text-[#CAD83B] text-[17px] mb-1 mt-7">Workouts</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <WorkoutCard />
                        <WorkoutCard />
                        <WorkoutCard />
                        <WorkoutCard />
                    </div>
                </div>
            )}
        </div>
    );
}
