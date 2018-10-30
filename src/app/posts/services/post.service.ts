import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { map } from 'rxjs/operators';

import { Post } from '../../shared/model/post';
import {TranslateService} from '@ngx-translate/core';

@Injectable()

export class PostService {
  private _url = 'https://jsonplaceholder.typicode.com/posts';
  public isLoaded: boolean = false;

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {      
    return this.httpClient.get<Post[]>(this._url);   
  }
}
