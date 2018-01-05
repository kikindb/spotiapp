import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify Listo');
   }

  getArtistas(termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;

    const tokenSpotify:string = 'BQBv83W7QAi4_udqZLuLWQ_PZOORO9zkzD5bWtUTy5dZvNpqDrnoomnN4DimEgg4NhVXnKVCwOliFeAme0I';
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenSpotify}`
    });

    return this.http.get(url, {headers})
               .map((resp: any) => {
                 this.artistas = resp.artists.items;
                 return this.artistas;
               });
  }

}
