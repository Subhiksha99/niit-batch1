import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'test', component: TestComponent },
  { path: 'parent', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
