import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, LikeDislikeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
