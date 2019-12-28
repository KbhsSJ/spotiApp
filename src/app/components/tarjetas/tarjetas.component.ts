import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  @Input() newSong: any[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  verArtista(cancion: any){
    // console.log(cancion);
    let artistaID;
    if (cancion.type  === 'artist'){
      artistaID = cancion.id;
    }
    else {
      artistaID = cancion.artists[0].id;
    }
    this.router.navigate(['/artist', artistaID]);
  }

}
