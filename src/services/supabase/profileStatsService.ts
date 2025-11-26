import supabase from "./config";

interface ProfileStats {
    username: string;
    profilePic: string;
    postsCount: number;
    followers: number;
    workouts: number;
}

const getProfileStats = async (userEmail: string): Promise<ProfileStats | null> => {
    try {
        // Obtener info del usuario
        const { data: userData, error: userError } = await supabase
            .from("users")
            .select("id, username, profile_pic")
            .eq("email", userEmail)
            .single();

        if (userError || !userData) {
            console.error("Error fetching user:", userError);
            return null;
        }

        // Contar posts del usuario
        const { count: postsCount } = await supabase
            .from("posts")
            .select("*", { count: "exact", head: true })
            .eq("user_id", userData.id);

        // Contar workouts del usuario (tabla myworkouts)
        const { count: workoutsCount } = await supabase
            .from("myworkouts")
            .select("*", { count: "exact", head: true });

        // Por ahora followers es 0 (puedes agregar una tabla followers después)
        const followers = 0;

        return {
            username: userData.username,
            profilePic: userData.profile_pic,
            postsCount: postsCount || 0,
            followers: followers,
            workouts: workoutsCount || 0
        };
    } catch (error) {
        console.error("Error getting profile stats:", error);
        return null;
    }
};

export { getProfileStats };
export type { ProfileStats };
