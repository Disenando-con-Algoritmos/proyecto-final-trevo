import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import type { Posttype } from "../../types/postTypes";
import type { instructorType } from "../../types/instructorTypes";
import { getPosts } from "../../services/postServices";
import InstructorCard from "../../components/InstructorCard";
import { getInstructors } from "../../services/instructorServices";
import WorkoutCard from "../../components/WorkoutCard";
import NavBarResponsive from "../../components/NavBarResponsive";
import { getWorkouts } from "../../services/workoutServices";
import type { workoutType } from "../../types/workoutTypes";

import ContainerHashtag from "./ContainerHashtag";

export default function Home() {
    // estados
    const [posts, setPosts] = useState<Posttype[]>([]);
    const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
    const matches = useMediaQuery("(min-width:600px)");
    const [instructors, setInstructors] = useState<instructorType[]>([]);
    const [workouts, setWorkouts] = useState<workoutType[]>([]);
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

    // cargar posts
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchData();
    }, []);

    // cargar instructores
    useEffect(() => {
        const fetchInstructors = async () => {
            const data = await getInstructors();
            setInstructors(data);
        };
        fetchInstructors();
    }, []);

    // cargar ejercicios
    useEffect(() => {
        const fetchWorkouts = async () => {
            const data = await getWorkouts();
            setWorkouts(data);
        };
        fetchWorkouts();
    }, []);

    //seleccion de hashtag
    const handleHashtagClick = (hashtag: string) => {
        setSelectedHashtag((prevHashtag) => (prevHashtag === hashtag ? null : hashtag));
    };

    //filtrar posts
    const filteredPosts = selectedHashtag ? posts.filter((post) => post.hashtag === selectedHashtag) : posts;

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

            {/* saludo y hashtags */}
            <div id="info" className={`${matches ? "fixed top-0 left-[330px] w-[580px] h-[200px]" : "left-[20px] fixed w-full px-4 pt-10"} bg-[#1E1E1E] overflow-y-auto`}>
                <div className={`flex ${matches ? "flex-row gap-35 mt-15 items-center" : "mt-5 items-center flex-row "} mb-2 items-center`}>
                    <h1 className={`text-[#CAD83B] ${matches ? "text-[50px]" : "text-[35px] text-left items-start"}`}>Hi, {currentUser.username}</h1>
                    <Bell className= {`${matches ? "absolute right-20 top-[95px] -translate-y-1/2" : "absolute right-20 top-[85px] -translate-y-1/2"}`} color="white" size={matches ? 28 : 26} />
                </div>

                <div id="containers" className={`flex ${matches ? "flex-row gap-1" : "flex-wrap mt-9"}`}>
                    <ContainerHashtag text="#gym" onClick={() => handleHashtagClick("#gym")} />
                    <ContainerHashtag text="#foodie" onClick={() => handleHashtagClick("#foodie")} />
                    <ContainerHashtag text="#motivation" onClick={() => handleHashtagClick("#motivation")} />
                    <ContainerHashtag text="#runnies" onClick={() => handleHashtagClick("#runnies")} />
                </div>
            </div>

            {/* posts */}
            <div className={`${matches ? "ml-[320px] mt-[200px] w-[600px]" : "mt-[25vh] mb-[20vh] w-[90%] mx-auto"}`}>
                {filteredPosts.map((post: Posttype) => (
                    <PostCard key={post.id} post={post} currentUser={currentUser} />
                ))}
            </div>

            {/* seccion lateral*/}
            {matches && (
                <div className="mt-25 ml-8 mr-2" id="extra-info">
                    <p className="text-[#CAD83B] text-[17px] mb-1">Instructors</p>
                    <div className="flex gap-5 flex-col">
                        {instructors.slice(0, 2).map((instructor, index) => (
                            <InstructorCard key={index} instructor={instructor} />
                        ))}
                    </div>
                    <p className="text-[#CAD83B] text-[17px] mb-1 mt-7">Workouts</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {workouts.slice(0, 4).map((workout, index) => (
                            <WorkoutCard key={index} workout={workout} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
