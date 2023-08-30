import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';

// HttpClient - Get, Post, Put, Delete, Patch requests can send

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Inject HttpClient into service with the help of constructor
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com';


  // header
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Get - Get All Posts
  // http.get(url, options:optional)
  getAllPosts() {
    // https://jsonplaceholder.typicode.com/posts
    //this.http.get(this.baseUrl + '/posts')
    // get() method return Observable
    // Observable emits multiple values 
    // Without subscription Observable won't emit data
    return this.http.get(`${this.baseUrl}/posts`);
  }

  // DELETE - Delete post by id
  // Delete - /posts/1
  // baseUrl/posts/1 - url
  deletePostById(id: number) {
    console.log("deletePostById", id);
    return this.http.delete(`${this.baseUrl}/posts/${id}`);

  }

  // POST  - add post
  // http.post(url, body, header-options)
  //POST -	/posts
  addPost(post) {
    let body = JSON.stringify(post);
    return this.http.post(`${this.baseUrl}/posts`, body, { headers: this.httpHeaders })
  }

  // PUT - Update Post
  // PUT	/posts/1
  // put(url, body, options)
  updatePost(post) {
    let body = JSON.stringify(post);
    return this.http.put(`${this.baseUrl}/posts/${post.id}`, body, { headers: this.httpHeaders })
  }


}
