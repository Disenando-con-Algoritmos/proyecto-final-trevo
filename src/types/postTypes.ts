type Posttype = {
    id: number;
    profilepic: string;
    username: string;
    date: string;
    description: string;
    image: string;
    likes: string;
    hashtag: string;
    comments: comment;
};

type comment = {
    id: number;
    username: string;
    profilepic: string;
    comment: string;
    like: number;
}

export type { Posttype, comment };