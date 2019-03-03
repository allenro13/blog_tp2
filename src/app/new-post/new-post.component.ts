import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	postForm: FormGroup;

  constructor(private postsService : PostsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.postForm = this.formBuilder.group({
      title:['',Validators.required],
      content:['',Validators.required]
    });
  }

  onSubmit(){
  	const title = this.postForm.get('title').value;
  	const content = this.postForm.get('content').value;
  	const post = new Post(title, content);
  	this.postsService.addPost(post);
  	this.router.navigate(['/posts']);
  }

}
