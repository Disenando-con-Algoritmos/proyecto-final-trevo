import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";

import { setMessage } from "../reducers/slice/MessageSlice";
import type { AppDispatch } from "../reducers/Store";
import type { Posttype } from "../types/postTypes";

type CreatePostProps = {
    onClose: () => void;
    onPost: (_newPost: Posttype) => void;
    currentUser: {
        username: string;
        profilePic: string;
    };
};

export default function CreatePost({ onClose, onPost, currentUser }: CreatePostProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch<AppDispatch>();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const categories = ["#gym", "#foodie", "#motivation", "#running"];

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return setImagePreview(null);

        // TAMAÑOP :3
        if (file.size > 3 * 1024 * 1024) {
            dispatch(setMessage({ message: "Image exceeds 3MB limit", severity: "error" }));
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result as string);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);

        const caption = formData.get("caption") as string;
        const category = formData.get("category") as string;

        // VACIOS
        if (!caption || !category) {
            dispatch(setMessage({ message: "Please complete all fields", severity: "warning" }));
            return;
        }

        const today = new Date();
        const dateFormatted = today.toLocaleDateString("es-CO");

        const newPost: Posttype = {
            id: Date.now(),
            profilepic:currentUser.profilePic,
            username: currentUser.username || "guest.user",
            date: dateFormatted,
            description: caption,
            image: imagePreview || "https://placehold.co/600x400",
            likes: 0,
            hashtag: category,
            comments: [],
        };

        const saved = JSON.parse(localStorage.getItem("posts") || "[]");
        localStorage.setItem("posts", JSON.stringify([newPost, ...saved]));

        // MENSAJES EXITOOO
        dispatch(setMessage({ message: "Published successfully", severity: "success" }));

        onPost(newPost);
        onClose();
    };

    return (
        <div className="m-0">
            <div className="">
                <h3 className="text-xl font-bold mb-4 text-[#CAD83B]">Create a new post</h3>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <textarea name="caption" placeholder="Write a comment..." className="textarea bg-[#000000] textarea-bordered w-full mb-4 border-[#CAD83B]"  />

                <div className="text-left text-sm text-gray-300 mb-6">
                    <label className="block mb-2">Choose a section :</label>
                    <div className="flex justify-left gap-6">
                        {categories.map((cat: string) => (
                            <label key={cat} className="flex items-center gap-1">
                                <input type="radio" name="category" value={cat} className="accent-[#D2F200]"  />
                                <span className="text-gray-300">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <input type="file" name="image" accept="image/*" className="file-input file-input-bordered w-full mb-4 border-[#CAD83B] bg-[#000000]" onChange={handleImageUpload} />
                {imagePreview && <img src={imagePreview} alt="Preview" className="rounded-xl mb-4 max-h-60 object-cover w-full" />}
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="btn rounded-2xl font-[poppins]">
                        Cancel
                    </button>
                    <button type="submit" className="btn bg-[#CAD83B] rounded-2xl font-[poppins] text-black">
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
}
