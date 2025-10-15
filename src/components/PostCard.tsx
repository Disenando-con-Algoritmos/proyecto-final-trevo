import React, { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import type { Posttype } from "../types/postTypes";

export default function PostCard({ post }: { post: Posttype }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    const toggleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    };

    const toggleComments = () => setShowComments(!showComments);

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim() === "") return;
        setComments([...comments, newComment]);
        setNewComment("");
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
                        <Heart className={`w-5 h-5 cursor-pointer transition-transform duration-150 ${liked ? "fill-pink-500 text-pink-500 scale-110" : "hover:text-pink-500"}`} onClick={toggleLike} />
                        <span>{likeCount}</span>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors" onClick={toggleComments}>
                        <MessageCircle className="w-5 h-5" />
                        <span>{comments.length}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="bg-[#2b2b2b] px-3 py-1 rounded-full text-xs font-medium">{post.hashtag}</span>
                    <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-200 transition-colors" />
                </div>
            </div>

            {/* Comment Section uwu */}
            {showComments && (
                <div className="mt-4 border-t border-gray-700 pt-3">
                    <form onSubmit={handleAddComment} className="flex gap-2 mb-3">
                        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment..." className="w-full bg-[#2b2b2b] text-sm text-white p-2 rounded-lg outline-none" />
                        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-lg text-sm">
                            Post
                        </button>
                    </form>

                    <div className="space-y-2 max-h-32 overflow-y-auto">
                        {comments.length > 0 ? (
                            comments.map((c, i) => (
                                <p key={i} className="text-sm text-gray-300 bg-[#2b2b2b] p-2 rounded-lg">
                                    <span className="font-semibold text-white">You:</span> {c}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm text-center">No comments yet. Be the first!</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
