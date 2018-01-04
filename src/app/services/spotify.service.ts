import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify Listo');
   }

  getArtistas(query: string, type: string, limit: string) {
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';

    let headers = new HttpHeaders({
      'Authorization': 'Bearer BQDuEzwqDxNayKJQEk8-tyRB9dG-2mSIlemiwTuOLOXNJsvJbkj1LqsPTKDX_zpST6CaN9ia6nLYiymLMw8'
    });

    return this.http.get(url, {headers})
               .map(resp => {
                 this.artistas = (resp).artists.items;
                 return this.artistas;
               });
  }

}
