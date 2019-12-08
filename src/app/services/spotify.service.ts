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
      Authorization: 'Bearer BQCxFh62Unn1bEe8pOp7uoEql9Ccev-prbTgpZqabrg7LKu40uAxZPxf41ea5ZRGJMb3XKgQfHF3m2aPjGI'
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
