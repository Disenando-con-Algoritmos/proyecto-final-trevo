import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import type { Posttype, comment } from "../types/postTypes";
import ContainerHashtag from "../pages/home/ContainerHashtag";

export default function PostCard({ post }: { post: Posttype }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<comment[]>(post.comments);
    const [newComment, setNewComment] = useState("");

    const toggleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    const handleAddComment = () => {
        if (newComment.trim() === "") return;

        const commentToAdd: comment = {
            id: Date.now(),
            username: "Tú",
            profilepic: "/assets/default-profile.png",
            comment: newComment,
            likes: 0,
            liked: false,
        };

        setComments([...comments, commentToAdd]);
        setNewComment("");
    };

    const handleLikeComment = (id: number) => {
        setComments((prevComments) =>
            prevComments.map((comment) => {
                if (comment.id === id) {
                    const liked = comment.liked ?? false; 
                    const updatedLikes = liked ? comment.likes - 1 : comment.likes + 1;
                    return { ...comment, likes: updatedLikes, liked: !liked };
                }
                return comment;
            })
        );
    };

    return (
        <div className="w-full max-w-md mx-auto text-white rounded-2xl p-4 mt-4">
            {/* info de usuario post */}
            <div className="flex items-center gap-3 mb-3">
                <img src={post.profilepic} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <div>
                    <h2 className="text-[15px] font-semibold">{post.username}</h2>
                    <p className="text-[10px] text-gray-400">{post.date}</p>
                </div>
            </div>

            {/* descripción post */}
            <p className="text-[13px] mb-3 font-[poppins]">{post.description}</p>

            {/* imagen post */}
            <img src={post.image} alt="post" className="w-full rounded-xl mb-3" />

            {/* botones postt */}
            <div className="flex items-center justify-between text-gray-300 text-sm">
                <div className="flex items-center gap-3">
                    <button onClick={toggleLike} className="flex items-center gap-1">
                        <Heart className={`w-5 h-5 cursor-pointer ${liked ? "fill-[#9872F0] text-[#9872F0]" : ""}`} />
                        <span>{likeCount}</span>
                    </button>

                    <button onClick={() => setShowComments(!showComments)} className="cursor-pointer flex items-center gap-1 hover:text-[#9872F0]">
                        <MessageCircle className="w-5 h-5" />
                        <span>{comments.length}</span>
                    </button>
                </div>

                <div className="flex items-center gap-3">

                    <ContainerHashtag text={post.hashtag} onClick={() => console.info(`Hashtag: #${post.hashtag}`)} />

                    <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-200" />
                
                </div>
            </div>

            {/* comentarioss uwu */}
            {showComments && (
                <div className="mt-3 border-t border-gray-700 pt-2 font-[poppins]">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex items-start gap-2 mb-2">
                            <img src={comment.profilepic} alt="pfp" className="w-8 h-8 rounded-full object-cover" />
                            <div className="bg-[#2b2b2b] p-2 rounded-lg w-full">
                                <p className="text-xs font-semibold">{comment.username}</p>
                                <p className="text-[12px]">{comment.comment}</p>
                                <button onClick={() => handleLikeComment(comment.id)} className="flex items-center gap-1 text-xs text-gray-400 mt-1 hover:text-[#9872F0]">
                                    <Heart className={`w-3 h-3 cursor-pointer ${comment.liked ? "fill-[#9872F0] text-[#9872F0]" : ""}`} /> {comment.likes}
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* nuevo comentario */}
                    <div className="flex gap-2 mt-2">
                        <img src="/assets/default-profile.png" alt="you" className="w-8 h-8 rounded-full object-cover" />
                        <input value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Escribe un comentario..." className="flex-1 bg-[#2b2b2b] rounded-full px-3 py-1 text-sm outline-none" />
                        <button onClick={handleAddComment} className="text-[#9872F0] text-sm font-semibold cursor-pointer">
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
