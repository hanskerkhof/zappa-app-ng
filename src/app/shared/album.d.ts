/* tslint:disable:no-string-literal */
import { UUID } from 'angular2-uuid';

export interface IAlbum {
    $key?: string;
    name: string;
    year: number;
    owned: boolean;
    spotifyAlbumId: string;
    uuid: string;
    // createdAt: number;
}

// export class Album implements IAlbum {
//     owned: false;
//     // createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
//     name: string;
//     year: number;
//     spotifyAlbumId: string;
//     uuid: string;
//     // 3PZXB9NBWf11eDS72JCGaY
//     constructor(name: string, year: number, spotifyAlbumId: string) {
//         this.name = name;
//         this.year = year;
//         this.spotifyAlbumId = spotifyAlbumId;
//         this.uuid = UUID.UUID();
//     }
// }

/* tslint:disable */
