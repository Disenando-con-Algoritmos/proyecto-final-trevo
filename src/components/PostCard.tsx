import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import type { Posttype } from "../types/postTypes";

export default function PostCard({ post }: { post: Posttype }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);

    const toggleLike = () => {
        setLiked(!liked);
        setLikeCount((prev) => prev + (liked ? -1 : 1));
    };

    return (
        <div className="w-[400px] mx-auto text-white rounded-2xl p-4 mt-2 font-sans bg-[#1c1c1c]">
            <div className="flex items-center gap-2 mb-4 font-[neulis]">
                <img src={post.profilepic} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-row gap-4 items-center">
                    <h2 className="font-medium text-[16px]">{post.username}</h2>
                    <p className="font-[poppins] text-[10px] text-gray-400">{post.date}</p>
                </div>
            </div>

            <div className="mb-4 font-[poppins]">
                <p className="font-normal text-[12px] text-white">{post.description}</p>
            </div>

            <div className="rounded-xl overflow-hidden mb-3">
                <img src={post.image} alt="post" className="w-full h-64 object-cover" />
            </div>

            <div className="flex items-center justify-between text-gray-300 text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Heart className={`w-5 h-5 cursor-pointer transition-colors ${liked ? "fill-[#9872F0] text-[#9872F0]" : "hover:text-[#7f5fc9]"}`} onClick={toggleLike} />
                        <span>{likeCount}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <MessageCircle className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
                        <span>{post.comments}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="bg-[#2b2b2b] px-3 py-1 rounded-full text-xs font-medium">{post.hashtag}</span>
                    <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-200 transition-colors" />
                </div>
            </div>
        </div>
    );
}
