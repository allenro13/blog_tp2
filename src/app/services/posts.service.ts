import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable()
export class PostsService {

	private posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts(){
  	this.postsSubject.next(this.posts.slice());
  }

  addPost(newPost: Post){
  	this.posts.push(newPost);
  	this.emitPosts();
  }

  deletePost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postE1) => {
        if(postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  likePost(id: number){
  	this.posts[id].loveIts ++;
  	this.emitPosts();
  }

  dislikePost(id: number){
  	this.posts[id].loveIts --;
  	this.emitPosts();
  }

}
