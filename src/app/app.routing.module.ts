import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router, PreloadAllModules } from '@angular/router'
import { PostComponent } from '../app/posts/post/post.component';
import { PostsResolverGuard } from './core/guards/posts-resolver.guard';
import { PageNotFoundComponent } from './shared/pageNotFound/pageNotFound.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './core/home/home.component';

/* lazyly loading PostModule 
const appRoutes :Routes =  [
    { path: '', component:HomeComponent},
    { path:'posts', loadChildren:'./posts/post.module#PostModule',resolve: {posts: PostsResolverGuard}},
    { path: 'error', component: ErrorComponent},
    { path: '**',  component: PageNotFoundComponent,pathMatch: 'full'}
];*/

export const appRoutes :Routes = [
    { path: '', component:HomeComponent},
    { path:'posts', component:PostComponent,resolve: {posts: PostsResolverGuard}},
    { path: 'error', component: ErrorComponent},
    { path: '**',  component: PageNotFoundComponent,pathMatch: 'full'}

]; 

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule],
    providers:[PostsResolverGuard]
})

export class AppRoutingModule {

}