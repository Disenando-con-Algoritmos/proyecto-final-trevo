import supabase from "./config";

export type UserProfile = {
    id: number;
    username: string;
    email: string;
    profile_pic: string;
};

const getUserProfile = async (email: string): Promise<UserProfile | null> => {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("id, username, email, profile_pic")
            .eq("email", email) 
            .single();

        if (error) {
            console.error("Error fetching user profile:", error);
            return null;
        }

        return data;
    } catch (error) {
        console.error("Unexpected error fetching user profile:", error);
        return null;
    }
};

export { getUserProfile };

const createUserProfile = async (email: string, username: string): Promise<UserProfile | null> => {
    try {
        const { data, error } = await supabase
            .from("users")
            .insert({
                email,
                username,
                profile_pic: "",
            })
            .select("id, username, email, profile_pic")
            .single();

        if (error) {
            console.error("userService: Error creating user profile:", JSON.stringify(error, null, 2));
            return null;
        }

        return data;
    } catch (error) {
        console.error("userService: Unexpected error creating user profile:", error);
        return null;
    }
};

export { createUserProfile };
