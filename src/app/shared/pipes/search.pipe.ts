import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/post'; 

@Pipe({
  name: 'searchFilter',
  pure: false
})

export class SearchPipe implements PipeTransform {

  transform(posts: any[], field: string, searchInput?: any): any {
   
    if(!posts) { 
        return []; 
    }

    if (!field || !searchInput) {
      return posts;
    }

    return posts.filter(singleItem =>
      singleItem[field].toLowerCase().includes(searchInput.toLowerCase())
    );    
    }
  }
