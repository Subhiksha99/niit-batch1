import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  // DI
  constructor(private postService: PostService,
    private router: Router) { }

  post;

  postAddForm = new FormGroup({
    userId: new FormControl(0),
    id: new FormControl(0),
    title: new FormControl(''),
    body: new FormControl(''),
  })

  onSubmit() {
    this.postService.addPost(this.postAddForm.value).subscribe(
      {
        next: (res) => {
          this.post = res;
          console.log(this.post);
          window.alert("Added post with id:" + this.post.id);
          this.router.navigate(['/posts']);
        },
        error: (error) => { console.log(error) },
        complete: () => { console.log("Completed!!!") }
      }
    )
  }


}
