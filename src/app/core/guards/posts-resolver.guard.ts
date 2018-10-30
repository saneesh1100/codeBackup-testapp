import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../shared/model/post';
import { PostService } from '../../posts/services/post.service';;
import { map } from 'rxjs/operators';

@Injectable()

export class PostsResolverGuard implements Resolve<Post[]> {

  constructor(private postService: PostService, private router: Router) {
  }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getPosts().pipe(map((posts: Post[]) => {    
      if (posts) {        
        return posts;
      }
      else {
        console.log('error occured ');
        this.router.navigate(['/error']);
      }
    }));

  }
} 