import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import type { Posttype } from "../types/postTypes";

export default function PostCard({ post }: { post: Posttype }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState<number>(post.likes);

    const toggleLike = () => {
        if (liked) {
            setLikeCount((prevCount) => prevCount - 1);
        } else {
            setLikeCount((prevCount) => prevCount + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="w-full max-w-md mx-auto text-white rounded-2xl p-4 mt-4 font-sans">
            <div className="flex items-center gap-3 mb-4 font-[neulis]">
                <img src={post.profilepic} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                    <h2 className="font-medium text-[16px]">{post.username}</h2>
                    <p className="font-[poppins] text-[10px] text-gray-400">{post.date}</p>
                </div>
            </div>

            <div className="mb-4 font-[poppins]">
                <p className="font-normal text-[12px] text-white">{post.description}</p>
            </div>

            <div className="rounded-xl overflow-hidden mb-3">
                <img src={post.image} alt="post" className="w-full h-auto max-h-80 object-cover" />
            </div>

            <div className="flex items-center justify-between text-gray-300 text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Heart className={`w-5 h-5 cursor-pointer transition-transform duration-150 ${liked ? "fill-pink-500 text-pink-500 scale-110" : "hover:text-pink-500"}`} onClick={toggleLike} />
                        <span>{likeCount}</span>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-5 h-5" />
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
