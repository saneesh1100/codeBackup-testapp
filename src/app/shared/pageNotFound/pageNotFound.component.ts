import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `<h2>404</h2>
             <div>
                <p class="text-default">
                    Whoops! The page you were looking for doesn't seem to exist.
                    You may have mistyped the address or the page may have moved. 
                    <a (click)="redirectToHome();" style="cursor:pointer;">Click here</a> to go to home page !
              </p>
	          </div>
     `
})
export class PageNotFoundComponent {
    constructor(private router: Router) { }

    public redirectToHome() {
        this.router.navigate(['/posts']);
    }
} 