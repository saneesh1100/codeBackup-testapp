import { Component } from '@angular/core';
import { PostService } from './posts/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private postService: PostService){
  }
  

  isLoadingFinished(){
    return this.postService.isLoaded;
  }
}
