import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public newSong: any[] = [];
  public loading: boolean;

  constructor(
    private spotify: SpotifyService,
    spotify2: SpotifyService) {

    this.loading =  true;
    setTimeout(() => {
      this.spotify.getNewReleases()
      .subscribe((song: any) => {
        console.log(song);
        this.newSong = song;
        this.loading = false;
      });

    }, 1000);

    // this.spotify.getapiraul();
  }

  ngOnInit() {
  }

}
