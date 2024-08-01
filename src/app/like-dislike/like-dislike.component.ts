import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css'],
})
export class LikeDislikeComponent {
  likeCount: number = 10;
  dislikeCount: number = 10;

  isLiked: boolean = false;
  isDisliked: boolean = false;

  liked() {
    if (!this.isLiked) {
      this.likeCount++;
      if (this.isDisliked) {
        this.dislikeCount--;
        this.isDisliked = false;
      }
    } else {
      this.likeCount--;
    }
    this.isLiked = !this.isLiked;
  }

  disliked() {
    if (!this.isDisliked) {
      this.dislikeCount++;
      if (this.isLiked) {
        this.likeCount--;
        this.isLiked = false;
      }
    } else {
      this.dislikeCount--;
    }
    this.isDisliked = !this.isDisliked;
  }
}
