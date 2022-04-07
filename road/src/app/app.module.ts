import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SheltersComponent } from './shelters/shelters.component';
import { PostsComponent } from './shelters/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SheltersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
