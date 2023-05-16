import { Component } from '@angular/core';
import { Album } from '../models/album';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums !: Array<Album>;
  selectedAlbum ?: Album;

  constructor(private albumService: AlbumsService) {}

  ngOnInit():void{
    this.albumService.getAlbums().subscribe({
      next: (data:Album[])=>{
        this.albums = data
      },
      error: (err) => console.log(err)
    })
  }
  onClick(album:Album){
    this.selectedAlbum = album;
    //para pasar valor entre componentes, podemos hacerlo por rutas o propiedades de entrada y salida del componente
  }

}
