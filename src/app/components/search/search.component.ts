import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  constructor(
    private spotify: SpotifyService
  ) {
    this.loading = false;
  }
  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    setTimeout(() => {
      this.spotify.getArtistas(termino)
        .subscribe((artistaservice: any) => {
          console.log(artistaservice);
          this.artistas = artistaservice;
          this.loading = false;
        });
    }, 1000);


  }

}
