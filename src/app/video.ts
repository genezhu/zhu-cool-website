import { Thumbnail } from "./thumbnail";

export interface Video {
    id: string;
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    title: string;
    thumbnail: Thumbnail;
    duration: string;
}
