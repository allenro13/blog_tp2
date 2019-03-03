import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

	@Input() post:Post;
  @Input() index:number;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
  }

  onLike(){
  	this.postsService.likePost(this.index);
  }

  onDislike(){
    this.postsService.dislikePost(this.index);
  }

  onDelete(post: Post){
    this.postsService.deletePost(post);
  }

}
