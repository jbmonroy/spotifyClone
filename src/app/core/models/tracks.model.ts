import { ArtistModel } from "./artist.model";

export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    duration: any;
    url: string;
    _id: string;
    artist?: ArtistModel
}