import { Component, OnInit, Injectable } from '@angular/core';

import { PostsResolverGuard } from '../../core/guards/posts-resolver.guard';
import { Post } from '../../shared/model/post';
import { ActivatedRoute, Data } from '@angular/router';
import { PostService } from '../../posts/services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
//import {TranslateService} from '@ngx-translate/core';


@Injectable()

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  private key: string = 'userId'; //set default
  private reverse: boolean = false;
  private p: number = 1;
  private showSpinner = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {
   // translate.addLangs(["en","fr","hi"]);
   //translate.setDefaultLang("en");
   //let browserLang = translate.getBrowserLang();
   //  console.log(browserLang);
     //translate.use(browserLang.match(/en|fr|hi/) ? browserLang : "en");
   // translate.use('en');
   }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.posts = data['posts'];
    })
  }

  //sorting   
  public sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
