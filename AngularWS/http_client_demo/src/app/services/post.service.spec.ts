import { PostService } from "./post.service";
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';
import { TestBed } from "@angular/core/testing";


describe('Post Service Suite', () => {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  // DATA
  // getAllPosts()
  const posts = [
    {
      userId: 101,
      id: 201,
      title: 'post 1',
      body: 'post 1 body'
    },
    {
      userId: 102,
      id: 202,
      title: 'post 2',
      body: 'post 2 body'
    },
    {
      userId: 103,
      id: 203,
      title: 'post 3',
      body: 'post 3 body'
    }
  ]

  // getPostById()
  const post = {
    userId: 103,
    id: 203,
    title: 'post 3',
    body: 'post 3 body'
  }

  // addPost()
  const newPost = {
    userId: 104,
    id: 204,
    title: 'post 4',
    body: 'post 4 body'
  }

  // updatePost()
  const updatePost = {
    userId: 104,
    id: 204,
    title: 'post 400',
    body: 'post 400 body'
  }

  // // Option 1: without TestBed
  // beforeEach(() => {
  //   // Create HttpClient spy object
  //   httpClientSpy = jasmine.createSpyObj(HttpClient, ['get'])

  //   // Passing HttpClient Mock object to PostService
  //   postService = new PostService(httpClientSpy);
  // });

  // Option 2: beforeEach() - with TestBed to create objects for component/service
  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete', 'put']);
    TestBed.configureTestingModule({
      providers: [
        PostService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        }
      ],
    });
    postService = TestBed.inject(PostService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  })


  describe('getPosts()', () => {
    it('Should get posts', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(posts));
      postService.getAllPosts().subscribe({
        next: (res) => {
          expect(res).toEqual(posts);
          done();
        },
        error: () => done.fail
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getPostById()', () => {
    it('Should return post based on post id', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(post));
      postService.getPostById(3).subscribe({
        next: (res) => {
          expect(res).toEqual(post);
          done()
        },
        error: () => done.fail
      })
    })
  });

  describe('addPost()', () => {
    it('Should add new post ', (done: DoneFn) => {
      httpClientSpy.post.and.returnValue(of(newPost));
      expect(postService.addPost(newPost).subscribe({
        next: (res) => {
          expect(res).toEqual(newPost);
          done();
        },
        error: () => { done.fail; }
      }))
    })
  });

  describe('updatPost()', () => {
    it('Should update post', (done: DoneFn) => {

      httpClientSpy.put.and.returnValue(of(updatePost));
      postService.updatePost(updatePost).subscribe({
        next: (res) => {
          expect(res).toEqual(updatePost);
          done();
        },
        error: () => {
          done.fail;
        }
      })
    })
  });

  describe('deletePost()', () => {
    it('Should delete post', (done: DoneFn) => {
      httpClientSpy.delete;
      postService.deletePostById(2).subscribe(() => {
        next: (res) => {
          done();
        }
        error: () => { error.fail }
      })
    })
  });

  describe('', () => {
    it('', () => { })
  });


})