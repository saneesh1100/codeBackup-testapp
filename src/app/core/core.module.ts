import { NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { PostsResolverGuard } from './guards/posts-resolver.guard';
import { PostService } from '../posts/services/post.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[HomeComponent],
    imports:[AppRoutingModule,SharedModule],
    exports:[AppRoutingModule],
    providers:[PostService,PostsResolverGuard,
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}]
})

export class CoreModule {

}