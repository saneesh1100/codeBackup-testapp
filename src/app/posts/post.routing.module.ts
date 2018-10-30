import { NgModule} from '@angular/core';
import { PostComponent } from './post/post.component';
import { RouterModule, Route } from '@angular/router';

const postRoutes: Route[] = [
    {path:'', component: PostComponent}
];


@NgModule({    
    imports:[      
        RouterModule.forChild(postRoutes)
    ],
    exports:[RouterModule]  
})

export class PostRoutingModule {
}
