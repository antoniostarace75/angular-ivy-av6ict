import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Album } from '../model/album';

@Component({
  selector: 'app-catalog',
  template: `
    <h1>Albums</h1>

    <li *ngFor="let album of albums" [routerLink]="'/catalog/' + album.id">
    {{ album.title }}
  </li>
  `
})
export class CatalogComponent {
  albums: Album[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(res => (this.albums = res));
  }
}