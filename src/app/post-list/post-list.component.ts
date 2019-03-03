import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	postsSubscription: Subscription;
	posts: Post[];

  constructor(private postsService:PostsService) { }

  ngOnInit() {
  	this.postsSubscription = this.postsService.postsSubject.subscribe(
  		(posts: Post[]) => {
  			this.posts = posts;
  		},
  		(error) => {
  			console.log('une erreur est survenue '+error);
  		}
  	);
  	this.postsService.emitPosts();
  }

  ngOnDestroy(){
  	this.postsSubscription.unsubscribe();
  }

}
