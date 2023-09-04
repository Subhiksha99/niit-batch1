import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  // Add post service dependency - DI
  constructor(private postService: PostService) { }

  // store response getting from service getAllPosts()
  posts: any = [];

  ngOnInit() {
    this.postService.getAllPosts().subscribe({
      next: (res) => {
        this.posts = res;
        console.log(this.posts);
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log("Completed!!!") }
    });
    console.log(this.posts);
  }


  onDelete(id: number) {
    this.postService.deletePostById(id).subscribe({
      next: (res) => {
        console.log(res);
        window.alert("Deleted post with id: " + id);
        // this.posts = this.posts.filter(p: Post => { p.id !== id });
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log("Completed!!!") }
    });

    console.log("onDelete", id);
  }

}
