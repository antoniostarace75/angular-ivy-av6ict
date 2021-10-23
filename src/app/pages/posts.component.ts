import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../model/posts';

@Component({
  selector: 'app-post',
  template: `
  <h1>Posts</h1>

  <li *ngFor="let post of posts" [routerLink]="'/posts/'">
  {{ post.title }}
</li>
  `,
})
export class PostsComponent {
  posts: Posts[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => (this.posts = res));
  }
}
