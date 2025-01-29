import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  imports: [CommonModule,
    MatCard,
    MatIcon,
    MatCard,
    MatIcon,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatList,
    MatListItem
  ]

  
})
export class PostDetailComponent implements OnInit {
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPost(id);
  }
}