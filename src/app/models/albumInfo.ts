import { SongInfo } from "./songInfo";

export interface AlbumInfo{
    name:string;
    artist:string;
    review:string;
    songs:SongInfo[];
    albumPrice:number;
    score:number;
}