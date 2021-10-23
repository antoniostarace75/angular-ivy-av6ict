import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  template: `
  <h1>Post</h1>

  <li *ngFor="let post of post" [routerLink]="'/post/'">
  {{ post.body }}
</li>
  `,
})
export class PostComponent {
  post: Post[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => (this.post = res));
  }
}
