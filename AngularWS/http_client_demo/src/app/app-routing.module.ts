import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'posts/add', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
