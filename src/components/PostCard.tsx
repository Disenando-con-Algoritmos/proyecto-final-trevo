import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function PostCard() {
    return (
        <div className="w-[400px] mx-auto text-white rounded-2xl p-4 mt-2 font-sans">
            <div className="flex items-center gap-2 mb-4 font-[neulis]">
                <img src="../public/assets/image 42.png" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <div>
                    <h2 className="font-medium text-[16px]">Hellen Ramirez</h2>
                </div>
            </div>

            <div className="mb-4 font-[poppins]">
                <p className="font-normal text-[12px] text-white">Just completed the pull + Abs workout, let’s keep goingg!!</p>
            </div>

            <div className="rounded-xl overflow-hidden mb-3">
                <img src="../public/assets/image 42.png" alt="post" className="w-full h-64 object-cover" />
            </div>

            <div className="flex items-center justify-between text-gray-300 text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 cursor-pointer hover:text-pink-500 transition-colors" />
                        <span>10</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <MessageCircle className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
                        <span>1</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="bg-[#2b2b2b] px-3 py-1 rounded-full text-xs font-medium">#gym</span>
                    <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-200 transition-colors" />
                </div>
            </div>
        </div>
    );
}
