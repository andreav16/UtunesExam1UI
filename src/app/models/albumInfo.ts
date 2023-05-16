import { SongInfo } from "../models/SongInfo";

export interface AlbumInfo{
    name:string;
    artist:string;
    review:string;
    songs:SongInfo[];
    albumPrice:number;
    score:number;
}