import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  topTracks: any = [];
  urlSpotifyAPI:string = 'https://api.spotify.com/v1/';
  tokenSpotify:string = 'BQDLGBAf7flI4cUlwVnCAQJzueMNuvJmtgsBrNKehF1zvN1ctZDCAeGPKKbz4yXs3vRW7KyRs4AodnPnrk8';

  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify Listo');
  }

  private getHeaders():HttpHeaders{
    return new HttpHeaders({'Authorization': `Bearer ${this.tokenSpotify}`});
  }
  
  getArtista(id: string){
    let url = `${this.urlSpotifyAPI}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, {headers});
  }

  getArtistas(termino: string) {
    let url = `${this.urlSpotifyAPI+'search?q='+termino}&type=artist&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers})
               .map((resp: any) => {
                 this.artistas = resp.artists.items;
                 return this.artistas;
               });
  }

  getTop(id: string){
    let url = `${this.urlSpotifyAPI}artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers})
               .map((resp: any) => {
                 this.topTracks = resp.tracks;
                 return this.topTracks;
               });
  }

}
