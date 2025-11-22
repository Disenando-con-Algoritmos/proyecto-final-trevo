import type { comment } from "../../types/postTypes";

import supabase from "./config";

const getCommentsByPostId = async (postId: number): Promise<comment[]> => {
    try {
        const { data: commentsData, error } = await supabase
            .from("comments")
            .select(`
                *,
                users (
                    username,
                    profile_pic
                )
            `)
            .eq("post_id", postId);

        if (error) {
            console.error("Error fetching comments:", error);
            return [];
        }

        return commentsData?.map((comment) => ({
            id: comment.id,
            username: comment.users?.username || "Unknown",
            profilepic: comment.users?.profile_pic || "",
            comment: comment.comment || "", 
            likes: comment.likes || 0,
            liked: false,
            date: comment.date
        })) || [];
    } catch (error) {
        console.error("Unexpected error fetching comments:", error);
        return [];
    }
};

const createComment = async (postId: number, userId: string | number, text: string): Promise<comment | null> => {
    try {
        const today = new Date();
        const dateFormatted = today.toLocaleDateString("es-CO");

        const { data, error } = await supabase
            .from("comments")
            .insert([
                {
                    post_id: postId,
                    user_id: userId,
                    comment: text,
                    date: dateFormatted,
                    likes: 0
                }
            ])
            .select(`
                *,
                users (
                    username,
                    profile_pic
                )
            `)
            .single();

        if (error) {
            console.error("Error creating comment:", error);
            return null;
        }

        return {
            id: data.id,
            username: data.users?.username || "Unknown",
            profilepic: data.users?.profile_pic || "",
            comment: data.comment,
            likes: data.likes || 0,
            liked: false,
            date: data.date
        };
    } catch (error) {
        console.error("Unexpected error creating comment:", error);
        return null;
    }
};

export { getCommentsByPostId, createComment };
