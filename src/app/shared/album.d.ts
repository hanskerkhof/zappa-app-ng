// import { UUID } from 'angular2-uuid';

export interface IAlbumSource {
  [key: string]: IAlbum;
}

export interface IAlbum {
  name: string;
  year: number;
  owned: boolean;
  spotifyAlbumId?: string;
  uuid: string;
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
