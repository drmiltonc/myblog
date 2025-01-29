import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  imports: [CommonModule, RouterModule,
    MatGridList,
    MatChipListbox,
    MatChip,
    MatCard,
    MatIcon,
    MatCardActions,
    MatCardContent,
    MatGridTile,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle
    ]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}