import { NgModule} from '@angular/core';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PostRoutingModule } from '../posts/post.routing.module';

@NgModule({
    declarations:[
       PostComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        Ng2OrderModule,
        NgxPaginationModule,
        SharedModule,
        PostRoutingModule     
    ]    
})

export class PostModule {
}