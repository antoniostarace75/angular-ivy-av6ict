import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-album',
  template: `
    <h1>Photos</h1>

    <img *ngFor="let photo of photos" [src]="photo.thumbnailUrl" />

    <hr />

    <button routerLink="/catalog">back</button>
  `
})
export class AlbumComponent {
  photos: Photo[];

  constructor(activatedRoute: ActivatedRoute, http: HttpClient) {
    // get albumID from url
    const albumId = activatedRoute.snapshot.params.albumId;

    // load photos
    http
      .get<Photo[]>(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      )
      .subscribe(res => (this.photos = res));
  }
}