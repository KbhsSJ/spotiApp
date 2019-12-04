import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(
    private http: HttpClient,
    private app: HttpClient) {
    console.log('SpotifyService Listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB8wkhUKNcbkpJ9EI4ygtqYvEPUsnbrvTQepq-kj-HKouHXJwbQ9NRnCEi58zRH0TarDFtWx7hZn_q1sZ8'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map((song: any) => song.albums.items));

  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((artista: any) => artista.artists.items));

  }
}
