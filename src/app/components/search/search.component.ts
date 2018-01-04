import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtistas('metallica', 'artist', '20').subscribe(artistas => {
      console.log('Información Lista');
      console.log(artistas);
    });
  }

  ngOnInit() {
  }

}