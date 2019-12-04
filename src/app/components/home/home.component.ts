import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public newSong: any[] = [];

  constructor(
    private spotify: SpotifyService,
    spotify2: SpotifyService) {

    this.spotify.getNewReleases()
      .subscribe((song: any) => {
        console.log(song);
        this.newSong = song;
      });

    // this.spotify.getapiraul();
  }

  ngOnInit() {
  }

}
