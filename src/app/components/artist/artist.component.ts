import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  idArtista: string = '';
  artista: any = {};
  top: any = [];
  constructor( private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
    
    this.activatedRoute.params.map(params => params.id).subscribe(params =>{
      this.idArtista = params;
      console.log(this.idArtista);
      this._spotify.getArtista(this.idArtista).subscribe(artista => {
        this.artista = artista;
        console.log(this.artista);
      });
      this._spotify.getTop(this.idArtista).subscribe(top =>{
        this.top = top;
        console.log(this.top);
      });
    });
  }

}
