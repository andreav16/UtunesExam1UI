import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { environment } from 'src/environments/environment';
import { AlbumInfo } from '../models/albumInfo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${environment.baseApiUrl}/Albums`);
  }
  getAlbumById(id : string | null):Observable<AlbumInfo>{
    return this.httpClient.get<AlbumInfo>(`${environment.baseApiUrl}/Albums/${id}`);
  }

  likeAlbum(id: string | null): Observable<Album> {
    return this.httpClient.put<Album>(`${environment.baseApiUrl}/Albums/${id}/like`, null);
  }
  dislikeAlbum(id: string | null): Observable<Album> {
    return this.httpClient.put<Album>(`${environment.baseApiUrl}/Albums/${id}/dislike`, null);
  }
}
