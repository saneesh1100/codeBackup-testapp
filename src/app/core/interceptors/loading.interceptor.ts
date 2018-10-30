import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostService } from '../../posts/services/post.service';
import {  finalize } from 'rxjs/operators'

@Injectable()

export class LoadingInterceptor implements HttpInterceptor {
    constructor(private postService: PostService){           
    }
    
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        this.postService.isLoaded = true;
        return next.handle(req).pipe(finalize(() =>
        {
            this.postService.isLoaded = false          
        }
    ))   
    }
}

