import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import type { Posttype } from "../../types/postTypes";
import { getPosts } from "../../services/postServices";

import ContainerHashtag from "./ContainerHashtag";

export default function Home () {
    const [posts, setPosts] = useState<Posttype[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchData();
    }, []);

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

            <div className="ml-[320px] mt-[200px] top-0 bg-[#1E1E1E] w-[600px] h-min">
                {posts.map((post: Posttype) => {
                    return <PostCard key={post.id} post={post} />;
                })}
            </div>
        </div>
    );
}