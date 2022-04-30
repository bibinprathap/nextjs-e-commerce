export interface IReview {
    id: number;
    date: string;
    author: string;
    avatar: string;
    rating: number;
    content: string;
}
export interface IReviewServer {
    id: number;
    createddate: string;
    name: string;
    author: string;
    avatar: string;
    rating: number;
    reviewcontent: string;
    date: Date;
}