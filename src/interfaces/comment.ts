export interface IComment {
    id: number;
    avatar: string;
    author: string;
    postTitle?: string;
    text: string;
    date: string;
    children?: this[];
}
