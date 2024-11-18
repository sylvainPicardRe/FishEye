import { MediaPhoto } from "../models/MediaPhoto.js";
import { MediaVideo } from "../models/MediaVideo.js";

export class MediasFactory {
    constructor(data){
        if(data.image){
            return new MediaPhoto(data)
        } else if (data.video){
            return new MediaVideo(data)
        } else {
            throw 'Type de format inconnu';
        }
    }
}