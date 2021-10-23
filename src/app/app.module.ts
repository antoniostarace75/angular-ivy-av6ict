import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CatalogComponent } from './pages/catalog.component';
import { LoginComponent } from './pages/login.component';
import { ContactsComponent } from './pages/contacts.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './pages/album.component'; // <== NEW
import { PostsComponent } from './pages/posts.component';
import { PostComponent } from './pages/post.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'catalog/:albumId', component: AlbumComponent }, // <== NEW
      { path: 'post', component: PostComponent },
      { path: 'posts', component: PostsComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CatalogComponent,
    LoginComponent,
    AlbumComponent, // <== NEW
    ContactsComponent,
    PostsComponent,
    PostComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
