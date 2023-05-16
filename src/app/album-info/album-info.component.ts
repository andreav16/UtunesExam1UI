import { Component, Input } from '@angular/core';
import { Album } from '../models/album';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { AlbumInfo } from '../models/albumInfo';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css']
})
export class AlbumInfoComponent {
  @Input() album ?: AlbumInfo;
  albumId="";
  totalSongs=0;
  constructor(private route : ActivatedRoute, private albumService: AlbumsService){}
  
  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id  = params.get('id');
      if(id!==null){
        this.albumId = id;
      }
      this.albumService.getAlbumById(id)
        .subscribe({
          next: (data: AlbumInfo) => {
            this.album = data;
            this.totalSongs = data.songs.length;
          },
          error: (err) => console.log(err)
        })
    })
  }
  
  likeSong(){
    this.albumService.likeAlbum(this.albumId)
        .subscribe({
          next: (data : Album) => {
            this.albumService.getAlbumById(String(data.id))
              .subscribe({
                next: (data : AlbumInfo) => this.album = data,
                error: (err) => console.log(err)
              })
          },
          error: (err) => console.log(err)
        });
  }

  dislikeSong(){
    this.albumService.dislikeAlbum(this.albumId)
        .subscribe({
          next: (data : Album) => {
            this.albumService.getAlbumById(String(data.id))
              .subscribe({
                next: (data : AlbumInfo) => this.album = data,
                error: (err) => console.log(err)
              })
          },
          error: (err) => console.log(err)
        });
  }
}
