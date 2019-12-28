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
  public error: boolean;
  public messageError: string;

  constructor(
    private spotify: SpotifyService,
    spotify2: SpotifyService) {

    this.loading =  true;
    this.error = false;

    setTimeout(() => {

      this.spotify.getNewReleases()
      .subscribe((song: any) => {
        console.log(song);
        this.newSong = song;
        this.loading = false;
      }, (errorServicio)=>{
        this.loading = false;
        this.error= true;
        console.log(errorServicio);
        this.messageError= errorServicio.error.error.message;
      }


      );

    }, 1000);

    // this.spotify.getapiraul();
  }

  ngOnInit() {
  }

}
